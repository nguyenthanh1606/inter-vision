/**
 * Popup UI builder — constructs and manages the popup DOM.
 * Pure vanilla JS, no framework dependencies.
 */

import { detectPageContext, buildContextSummary } from './detector';
import { fetchPreGeneratedQuestions, generateQuestions, generateSummary, type AIQuestion } from './groq';
import { getWidgetStyles } from './styles';

interface WidgetConfig {
  domain: string;
  proxyUrl: string;
  primaryColor: string;
  greeting: string;
  language: string;
  dataUrl?: string;
}

interface PopupState {
  step: number; // 0=closed, 1-3=questions, 4=form, 5=thankyou
  questions: AIQuestion[];
  answers: { question: string; answer: string }[];
  summary: string;
  loading: boolean;
  open: boolean;
  pageContextSummary: string;
}

export function createPopup(config: WidgetConfig) {
  const state: PopupState = {
    step: 0,
    questions: [],
    answers: [],
    summary: '',
    loading: false,
    open: false,
    pageContextSummary: '',
  };

  const labels = config.language === 'vi'
    ? {
        step: 'Bước',
        of: 'của',
        loading: 'Đang phân tích trang...',
        summaryTitle: '💬 Nhân viên tư vấn',
        formTitle: 'Bạn để lại thông tin để mình tư vấn chi tiết hơn nhé! 😊',
        name: 'Họ và tên *',
        phone: 'Số điện thoại *',
        email: 'Email (không bắt buộc)',
        submit: '📩 Gửi thông tin',
        thankTitle: 'Cảm ơn bạn! 🎉',
        thankText: 'Mình sẽ liên hệ bạn sớm nhất có thể nhé!',
        generating: 'Mình đang xem bạn cần gì nhé... ✨',
      }
    : {
        step: 'Step',
        of: 'of',
        loading: 'Analyzing page...',
        summaryTitle: '💬 Your Consultant',
        formTitle: 'Leave your info and we\'ll get back to you! 😊',
        name: 'Full name *',
        phone: 'Phone number *',
        email: 'Email (optional)',
        submit: '📩 Send',
        thankTitle: 'Thank you! 🎉',
        thankText: 'We\'ll reach out to you shortly!',
        generating: 'Let me see how I can help... ✨',
      };

  // --- Inject styles ---
  const styleEl = document.createElement('style');
  styleEl.textContent = getWidgetStyles(config.primaryColor);
  document.head.appendChild(styleEl);

  // --- Create DOM ---
  // Trigger button
  const trigger = document.createElement('button');
  trigger.className = 'sp-trigger';
  trigger.innerHTML = '💬';
  trigger.title = config.greeting;

  // Overlay
  const overlay = document.createElement('div');
  overlay.className = 'sp-overlay sp-hidden';

  // Popup container
  const popup = document.createElement('div');
  popup.className = 'sp-popup sp-hidden';

  document.body.appendChild(trigger);
  document.body.appendChild(overlay);
  document.body.appendChild(popup);

  // --- Render functions ---
  function renderPopup() {
    if (state.loading) {
      popup.innerHTML = `
        <div class="sp-header">
          <h3 class="sp-header-title">${config.greeting}</h3>
          <button class="sp-close" id="sp-close">✕</button>
        </div>
        <div class="sp-body">
          <div class="sp-loading">
            <div class="sp-spinner"></div>
            <div class="sp-loading-text">${labels.generating}</div>
          </div>
        </div>
      `;
      bindClose();
      return;
    }

    if (state.step >= 1 && state.step <= 3) {
      const q = state.questions[state.step - 1];
      if (!q) return;
      popup.innerHTML = `
        <div class="sp-header">
          <h3 class="sp-header-title">${config.greeting}</h3>
          <p class="sp-header-sub">${labels.step} ${state.step} ${labels.of} 3</p>
          <button class="sp-close" id="sp-close">✕</button>
        </div>
        <div class="sp-progress">
          ${[1, 2, 3].map(n => `<div class="sp-progress-dot ${n <= state.step ? 'sp-active' : ''}"></div>`).join('')}
        </div>
        <div class="sp-body">
          <div class="sp-step-label">${labels.step} ${state.step}/3</div>
          <p class="sp-question-text">${q.text}</p>
          <div class="sp-options">
            ${q.options.map(opt => `<button class="sp-option" data-answer="${opt.replace(/"/g, '&quot;')}">${opt}</button>`).join('')}
          </div>
        </div>
      `;
      bindClose();
      bindOptions(q.text);
      return;
    }

    if (state.step === 4) {
      // Summary + Form
      popup.innerHTML = `
        <div class="sp-header">
          <h3 class="sp-header-title">${config.greeting}</h3>
          <button class="sp-close" id="sp-close">✕</button>
        </div>
        <div class="sp-progress">
          ${[1, 2, 3].map(() => `<div class="sp-progress-dot sp-active"></div>`).join('')}
        </div>
        <div class="sp-body">
          ${state.summary ? `
            <div class="sp-summary">
              <p class="sp-summary-title">${labels.summaryTitle}</p>
              <p class="sp-summary-text">${state.summary}</p>
            </div>
          ` : ''}
          <p class="sp-question-text">${labels.formTitle}</p>
          <form class="sp-form" id="sp-form">
            <input class="sp-input" type="text" placeholder="${labels.name}" id="sp-name" required />
            <input class="sp-input" type="tel" placeholder="${labels.phone}" id="sp-phone" required />
            <input class="sp-input" type="email" placeholder="${labels.email}" id="sp-email" />
            <button class="sp-submit" type="submit">${labels.submit}</button>
          </form>
        </div>
      `;
      bindClose();
      bindForm();
      return;
    }

    if (state.step === 5) {
      popup.innerHTML = `
        <div class="sp-header">
          <h3 class="sp-header-title">${config.greeting}</h3>
          <button class="sp-close" id="sp-close">✕</button>
        </div>
        <div class="sp-body">
          <div class="sp-thankyou">
            <div class="sp-thankyou-icon">✅</div>
            <h3 class="sp-thankyou-title">${labels.thankTitle}</h3>
            <p class="sp-thankyou-text">${labels.thankText}</p>
          </div>
        </div>
      `;
      bindClose();
      // Auto-close after 3s
      setTimeout(() => closePopup(), 3000);
      return;
    }
  }

  function bindClose() {
    const btn = popup.querySelector('#sp-close');
    btn?.addEventListener('click', closePopup);
  }

  function bindOptions(questionText: string) {
    popup.querySelectorAll('.sp-option').forEach((btn) => {
      btn.addEventListener('click', () => {
        const answer = (btn as HTMLElement).dataset.answer || '';
        state.answers.push({ question: questionText, answer });

        if (state.step < 3) {
          state.step++;
          renderPopup();
        } else {
          // All questions answered — generate summary + show form
          state.step = 4;
          state.loading = true;
          renderPopup();

          generateSummary(state.answers, state.pageContextSummary, config.proxyUrl, config.domain, config.language).then((summary) => {
            state.summary = summary;
            state.loading = false;
            renderPopup();
          });
        }
      });
    });
  }

  function bindForm() {
    const form = popup.querySelector('#sp-form') as HTMLFormElement;
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = (popup.querySelector('#sp-name') as HTMLInputElement)?.value || '';
      const phone = (popup.querySelector('#sp-phone') as HTMLInputElement)?.value || '';
      const email = (popup.querySelector('#sp-email') as HTMLInputElement)?.value || '';

      if (!name || !phone) return;

      // Save lead to localStorage
      const lead = {
        id: Date.now().toString(36) + Math.random().toString(36).substring(2),
        domain: config.domain,
        pageUrl: window.location.href,
        pageTitle: document.title,
        answers: state.answers,
        name,
        phone,
        email,
        summary: state.summary,
        timestamp: Date.now(),
      };

      const existing = JSON.parse(localStorage.getItem('smart-popup-leads') || '[]');
      existing.unshift(lead);
      localStorage.setItem('smart-popup-leads', JSON.stringify(existing));

      state.step = 5;
      renderPopup();
    });
  }

  async function openPopup() {
    state.open = true;
    state.step = 1;
    state.answers = [];
    state.summary = '';
    state.loading = true;

    popup.classList.remove('sp-hidden');
    popup.classList.add('sp-visible');
    overlay.classList.remove('sp-hidden');
    overlay.classList.add('sp-visible');
    trigger.style.display = 'none';

    renderPopup();

    // Try pre-generated questions first, fallback to AI
    let questions: AIQuestion[] | null = null;

    if (config.dataUrl) {
      const currentPath = window.location.pathname;
      questions = await fetchPreGeneratedQuestions(config.dataUrl, currentPath);
    }

    if (!questions) {
      // Fallback: detect page context and generate via AI
      const ctx = detectPageContext();
      const contextSummary = buildContextSummary(ctx);
      state.pageContextSummary = contextSummary;
      questions = await generateQuestions(contextSummary, config.proxyUrl, config.domain, config.language);
    } else {
      // Still capture page context for the summary step later
      const ctx = detectPageContext();
      state.pageContextSummary = buildContextSummary(ctx);
    }

    state.questions = questions;
    state.loading = false;
    renderPopup();
  }

  function closePopup() {
    state.open = false;
    popup.classList.remove('sp-visible');
    popup.classList.add('sp-hidden');
    overlay.classList.remove('sp-visible');
    overlay.classList.add('sp-hidden');
    trigger.style.display = 'flex';
  }

  // --- Event binding ---
  trigger.addEventListener('click', openPopup);
  overlay.addEventListener('click', closePopup);

  // Auto-open popup after user stays on page for 5 seconds
  setTimeout(() => {
    if (!state.open) {
      openPopup();
    }
  }, 5000);
}
