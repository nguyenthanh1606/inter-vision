/**
 * Smart Popup — Main widget entry point.
 * This file is compiled to a standalone IIFE (smart-popup.js) and can be
 * embedded in any website via a <script> tag.
 *
 * Usage:
 *   <script src="smart-popup.js" data-smart-config='{"domain":"...","proxyUrl":"/api/smart-popup","primaryColor":"#6c5ce7","greeting":"...","language":"vi"}'></script>
 *
 * NOTE: API key is NOT in client code. The proxyUrl should point to a
 * server-side endpoint that forwards requests to Groq securely.
 */

import { createPopup } from './popup-ui';

(function () {
  const scripts = document.querySelectorAll('script[data-smart-config]');
  const scriptEl = scripts[scripts.length - 1];

  if (!scriptEl) {
    console.warn('Smart Popup: No data-smart-config attribute found.');
    return;
  }

  try {
    const configStr = scriptEl.getAttribute('data-smart-config') || '{}';
    const config = JSON.parse(configStr);

    if (!config.domain || !config.proxyUrl) {
      console.warn('Smart Popup: Missing required config (domain, proxyUrl).');
      return;
    }

    // Default values
    config.primaryColor = config.primaryColor || '#6c5ce7';
    config.greeting = config.greeting || 'Hello! How can I help you?';
    config.language = config.language || 'vi';
    config.dataUrl = config.dataUrl || '';

    // Wait for DOM ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => createPopup(config));
    } else {
      createPopup(config);
    }
  } catch (err) {
    console.error('Smart Popup: Failed to parse config', err);
  }
})();
