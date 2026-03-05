import { useState } from 'react'
import type { WidgetConfig } from '@/types'

interface Props {
  config: WidgetConfig
}

export default function ScriptGenerator({ config }: Props) {
  const [copied, setCopied] = useState(false)

  const configJson = JSON.stringify({
    domain: config.domain,
    groqApiKey: config.groqApiKey,
    primaryColor: config.primaryColor,
    greeting: config.greeting,
    language: config.language
  })

  // In production this would point to a CDN. For development, use localhost.
  const scriptTag = `<!-- Smart Popup Widget -->
<script>
(function(){
  var s=document.createElement('script');
  s.src='${window.location.origin}/smart-popup.js';
  s.setAttribute('data-smart-config','${configJson.replace(/'/g, "\\'")}');
  document.head.appendChild(s);
})();
</script>`

  const handleCopy = () => {
    navigator.clipboard.writeText(scriptTag)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="config-section script-output">
      <h2 className="section-title">📦 Embed Script</h2>
      <p style={{ color: 'var(--text-2)', fontSize: 14, marginBottom: 16 }}>
        Copy this script tag and paste it before <code>&lt;/body&gt;</code> in
        your website HTML.
      </p>
      <div className="code-block">
        <button className="copy-btn" onClick={handleCopy}>
          {copied ? '✅ Copied!' : '📋 Copy'}
        </button>
        {scriptTag}
      </div>

      {/* Test locally */}
      <div
        style={{
          marginTop: 20,
          padding: 16,
          background: 'var(--surface-2)',
          borderRadius: 'var(--radius-sm)'
        }}
      >
        <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>
          🧪 Test locally
        </h4>
        <p style={{ color: 'var(--text-2)', fontSize: 13 }}>
          1. Run <code>npx nx build-widget smart</code> to compile the widget
          <br />
          2. Serve <code>apps/smart/dist-widget/smart-popup.js</code> from any
          web server
          <br />
          3. Add the script tag above to any HTML page
        </p>
      </div>
    </div>
  )
}
