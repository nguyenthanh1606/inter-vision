/**
 * Injected CSS for the popup widget — fully scoped with sp- prefix.
 */
export function getWidgetStyles(primaryColor: string): string {
  return `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

    .sp-trigger {
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: ${primaryColor};
      color: white;
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(0,0,0,0.25), 0 0 40px ${primaryColor}44;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
      z-index: 999998;
      transition: all 0.3s ease;
      animation: sp-pulse 2s infinite;
    }
    .sp-trigger:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 30px rgba(0,0,0,0.3), 0 0 60px ${primaryColor}66;
    }
    @keyframes sp-pulse {
      0%, 100% { box-shadow: 0 4px 20px rgba(0,0,0,0.25), 0 0 0 0 ${primaryColor}44; }
      50% { box-shadow: 0 4px 20px rgba(0,0,0,0.25), 0 0 0 12px ${primaryColor}00; }
    }

    .sp-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.4);
      backdrop-filter: blur(4px);
      z-index: 999999;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    .sp-overlay.sp-visible { opacity: 1; }
    .sp-overlay.sp-hidden { opacity: 0; pointer-events: none; }

    .sp-popup {
      position: fixed;
      bottom: 100px;
      right: 24px;
      width: 400px;
      max-height: 600px;
      background: #fff;
      border-radius: 20px;
      box-shadow: 0 24px 80px rgba(0,0,0,0.2);
      z-index: 1000000;
      overflow: hidden;
      transform: translateY(20px) scale(0.95);
      opacity: 0;
      transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
      font-family: 'Inter', -apple-system, sans-serif;
    }
    .sp-popup.sp-visible {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
    .sp-popup.sp-hidden {
      transform: translateY(20px) scale(0.95);
      opacity: 0;
      pointer-events: none;
    }

    .sp-header {
      background: linear-gradient(135deg, ${primaryColor}, ${primaryColor}cc);
      color: white;
      padding: 20px 24px;
      position: relative;
    }
    .sp-header-title {
      font-size: 16px;
      font-weight: 700;
      margin: 0 0 4px;
    }
    .sp-header-sub {
      font-size: 13px;
      opacity: 0.85;
      margin: 0;
    }
    .sp-close {
      position: absolute;
      top: 12px;
      right: 12px;
      background: rgba(255,255,255,0.2);
      border: none;
      color: white;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      cursor: pointer;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;
    }
    .sp-close:hover { background: rgba(255,255,255,0.35); }

    .sp-progress {
      display: flex;
      gap: 4px;
      padding: 0 24px;
      margin-top: -8px;
      position: relative;
      z-index: 1;
    }
    .sp-progress-dot {
      flex: 1;
      height: 4px;
      border-radius: 2px;
      background: #e0e0e0;
      transition: background 0.3s;
    }
    .sp-progress-dot.sp-active {
      background: ${primaryColor};
    }

    .sp-body {
      padding: 24px;
      min-height: 200px;
    }

    .sp-question-text {
      font-size: 16px;
      font-weight: 600;
      color: #1a1a2e;
      margin: 0 0 16px;
      line-height: 1.5;
    }

    .sp-options {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .sp-option {
      background: #f5f5ff;
      border: 2px solid #e8e8f0;
      border-radius: 12px;
      padding: 12px 16px;
      font-size: 14px;
      font-weight: 500;
      color: #333;
      cursor: pointer;
      transition: all 0.2s;
      text-align: left;
      font-family: inherit;
    }
    .sp-option:hover {
      background: ${primaryColor}11;
      border-color: ${primaryColor};
      color: ${primaryColor};
      transform: translateX(4px);
    }

    .sp-loading {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40px;
      gap: 16px;
    }
    .sp-spinner {
      width: 36px;
      height: 36px;
      border: 3px solid #e8e8f0;
      border-top: 3px solid ${primaryColor};
      border-radius: 50%;
      animation: sp-spin 0.8s linear infinite;
    }
    @keyframes sp-spin { 100% { transform: rotate(360deg); } }
    .sp-loading-text {
      font-size: 14px;
      color: #888;
    }

    /* Summary Step */
    .sp-summary {
      background: #f8f8ff;
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 20px;
      border-left: 4px solid ${primaryColor};
    }
    .sp-summary-title {
      font-size: 13px;
      font-weight: 600;
      color: ${primaryColor};
      margin: 0 0 8px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .sp-summary-text {
      font-size: 14px;
      color: #555;
      line-height: 1.5;
      margin: 0;
    }

    /* Form */
    .sp-form { display: flex; flex-direction: column; gap: 10px; }
    .sp-input {
      width: 100%;
      padding: 12px 14px;
      border: 2px solid #e8e8f0;
      border-radius: 10px;
      font-size: 14px;
      font-family: inherit;
      outline: none;
      transition: border-color 0.2s;
      box-sizing: border-box;
    }
    .sp-input:focus { border-color: ${primaryColor}; }
    .sp-input::placeholder { color: #aaa; }

    .sp-submit {
      background: ${primaryColor};
      color: white;
      border: none;
      border-radius: 10px;
      padding: 14px;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      font-family: inherit;
    }
    .sp-submit:hover { opacity: 0.9; transform: translateY(-1px); }
    .sp-submit:disabled { opacity: 0.5; cursor: not-allowed; }

    /* Thank you */
    .sp-thankyou {
      text-align: center;
      padding: 20px 0;
    }
    .sp-thankyou-icon { font-size: 48px; margin-bottom: 12px; }
    .sp-thankyou-title { font-size: 20px; font-weight: 700; color: #1a1a2e; margin: 0 0 8px; }
    .sp-thankyou-text { font-size: 14px; color: #888; margin: 0; }

    .sp-step-label {
      font-size: 12px;
      color: #aaa;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
    }

    @media (max-width: 480px) {
      .sp-popup {
        right: 8px;
        left: 8px;
        width: auto;
        bottom: 80px;
      }
      .sp-trigger {
        bottom: 16px;
        right: 16px;
        width: 52px;
        height: 52px;
        font-size: 24px;
      }
    }
  `;
}
