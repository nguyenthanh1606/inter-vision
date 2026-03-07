import { useState } from 'react'
import ScriptGenerator from '@/components/ScriptGenerator'
import type { WidgetConfig } from '@/types'

const DEFAULT_CONFIG: WidgetConfig = {
  domain: '',
  groqApiKey: '',
  primaryColor: '#6c5ce7',
  greeting: 'Xin chào! Tôi có thể giúp gì cho bạn?',
  language: 'vi'
}

interface CrawlResult {
  path: string
  status: string
  questionsCount?: number
}

export default function Dashboard() {
  const [config, setConfig] = useState<WidgetConfig>(() => {
    const saved = localStorage.getItem('smart-popup-config')
    return saved ? JSON.parse(saved) : DEFAULT_CONFIG
  })
  const [generated, setGenerated] = useState(false)

  // Crawl state
  const [crawlUrls, setCrawlUrls] = useState('')
  const [crawlBaseUrl, setCrawlBaseUrl] = useState('')
  const [crawling, setCrawling] = useState(false)
  const [crawlResults, setCrawlResults] = useState<CrawlResult[] | null>(null)
  const [crawlError, setCrawlError] = useState('')

  const updateConfig = (key: keyof WidgetConfig, value: string) => {
    setConfig(prev => ({ ...prev, [key]: value }))
  }

  const handleGenerate = () => {
    localStorage.setItem('smart-popup-config', JSON.stringify(config))
    setGenerated(true)
  }

  const handleCrawl = async () => {
    const urls = crawlUrls
      .split('\n')
      .map(u => u.trim())
      .filter(Boolean)

    if (urls.length === 0 || !crawlBaseUrl.trim()) return

    setCrawling(true)
    setCrawlError('')
    setCrawlResults(null)

    try {
      const apiUrl = `${crawlBaseUrl.replace(/\/$/, '')}/api/crawl-questions`

      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          urls,
          language: config.language || 'vi',
          baseUrl: crawlBaseUrl.replace(/\/$/, '')
        })
      })

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`)
      }

      const data = await res.json()
      setCrawlResults(data.results || [])
    } catch (err) {
      setCrawlError(err instanceof Error ? err.message : 'Crawl failed')
    } finally {
      setCrawling(false)
    }
  }

  return (
    <div className="dashboard">
      {/* Hero */}
      <div className="hero-card">
        <h1 className="hero-title">⚡ Smart Popup</h1>
        <p className="hero-sub">
          AI-powered lead qualification widget. Detect user intent from page
          content and ask the right questions.
        </p>
      </div>

      {/* Configuration */}
      <div className="config-section">
        <h2 className="section-title">🔧 Widget Configuration</h2>
        <div className="form-grid">
          <div className="form-group">
            <label>Website Domain</label>
            <input
              type="text"
              className="form-input"
              placeholder="example.com"
              value={config.domain}
              onChange={e => updateConfig('domain', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Groq API Key</label>
            <input
              type="password"
              className="form-input"
              placeholder="gsk_..."
              value={config.groqApiKey}
              onChange={e => updateConfig('groqApiKey', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Primary Color</label>
            <div className="color-picker-wrap">
              <input
                type="color"
                value={config.primaryColor}
                onChange={e => updateConfig('primaryColor', e.target.value)}
              />
              <input
                type="text"
                className="form-input"
                value={config.primaryColor}
                onChange={e => updateConfig('primaryColor', e.target.value)}
                style={{ flex: 1 }}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Greeting Message</label>
            <input
              type="text"
              className="form-input"
              placeholder="Hello! How can I help?"
              value={config.greeting}
              onChange={e => updateConfig('greeting', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Language</label>
            <select
              className="form-input"
              value={config.language}
              onChange={e => updateConfig('language', e.target.value)}
            >
              <option value="vi">Tiếng Việt</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
        <div className="btn-group">
          <button
            className="btn btn-primary"
            onClick={handleGenerate}
            disabled={!config.domain || !config.groqApiKey}
          >
            ⚡ Generate Embed Script
          </button>
        </div>
      </div>

      {/* Generated Script */}
      {generated && <ScriptGenerator config={config} />}

      {/* Crawl & Pre-generate Section */}
      <div className="config-section">
        <h2 className="section-title">🕷️ Crawl & Pre-generate Questions</h2>
        <p style={{ color: 'var(--text-2)', fontSize: 14, marginBottom: 16 }}>
          Pre-generate AI questions for each page so the popup loads instantly —
          no waiting for AI each time.
        </p>

        {/* CLI Instructions */}
        <div
          style={{
            padding: 16,
            background: 'var(--surface-2)',
            borderRadius: 'var(--radius-sm)',
            marginBottom: 20
          }}
        >
          <h4 style={{ marginBottom: 8, color: 'var(--text-1)' }}>
            📟 CLI (Recommended)
          </h4>
          <p style={{ color: 'var(--text-2)', fontSize: 13, marginBottom: 10 }}>
            Run the crawl script directly from terminal. Set GROQ_API_KEY first.
          </p>
          <pre
            style={{
              background: '#1a1a2e',
              color: '#e0e0e0',
              padding: 14,
              borderRadius: 8,
              fontSize: 12,
              overflowX: 'auto',
              lineHeight: 1.7
            }}
          >
            {`# Set your API key
export GROQ_API_KEY=gsk_your_key_here

# Crawl specific URLs
npx tsx apps/smart/scripts/crawl-questions.ts \\
  --urls https://nhakhoaident.com/ \\
         https://nhakhoaident.com/dich-vu/cay-ghep-implant \\
  --lang vi

# Or crawl from a sitemap
npx tsx apps/smart/scripts/crawl-questions.ts \\
  --sitemap https://nhakhoaident.com/sitemap.xml \\
  --lang vi`}
          </pre>
        </div>

        {/* API Crawl (requires dental site running) */}
        <div
          style={{
            padding: 16,
            background: 'var(--surface-2)',
            borderRadius: 'var(--radius-sm)',
            marginBottom: 16
          }}
        >
          <h4 style={{ marginBottom: 8, color: 'var(--text-1)' }}>
            🌐 API Crawl (requires dental site running)
          </h4>
          <p style={{ color: 'var(--text-2)', fontSize: 13, marginBottom: 10 }}>
            If the dental site is running locally, you can crawl via its API
            endpoint.
          </p>
        </div>

        <div className="form-grid">
          <div className="form-group" style={{ gridColumn: '1 / -1' }}>
            <label>Dental Site URL (where crawl API runs)</label>
            <input
              type="text"
              className="form-input"
              placeholder="http://localhost:3000"
              value={crawlBaseUrl}
              onChange={e => setCrawlBaseUrl(e.target.value)}
            />
          </div>
          <div className="form-group" style={{ gridColumn: '1 / -1' }}>
            <label>URLs to crawl (full URLs, one per line)</label>
            <textarea
              className="form-input"
              rows={8}
              placeholder={`https://nhakhoaident.com/\nhttps://nhakhoaident.com/dich-vu/cay-ghep-implant\nhttps://nhakhoaident.com/dich-vu/nieng-rang\nhttps://nhakhoaident.com/bang-gia\nhttps://nhakhoaident.com/gioi-thieu\nhttps://nhakhoaident.com/lien-he`}
              value={crawlUrls}
              onChange={e => setCrawlUrls(e.target.value)}
              style={{
                resize: 'vertical',
                fontFamily: 'monospace',
                fontSize: 13
              }}
            />
          </div>
        </div>
        <div className="btn-group">
          <button
            className="btn btn-primary"
            onClick={handleCrawl}
            disabled={crawling || !crawlUrls.trim() || !crawlBaseUrl.trim()}
          >
            {crawling ? '⏳ Đang crawl...' : '🕷️ Crawl via API'}
          </button>
        </div>

        {/* Crawl Progress/Results */}
        {crawling && (
          <div
            style={{
              marginTop: 16,
              padding: 16,
              background: 'var(--surface-2)',
              borderRadius: 'var(--radius-sm)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div
                style={{
                  width: 20,
                  height: 20,
                  border: '2px solid rgba(255,255,255,0.2)',
                  borderTopColor: 'var(--primary)',
                  borderRadius: '50%',
                  animation: 'spin 0.8s linear infinite'
                }}
              />
              <span style={{ color: 'var(--text-2)' }}>
                Đang crawl và tạo câu hỏi AI cho từng trang...
              </span>
            </div>
          </div>
        )}

        {crawlError && (
          <div
            style={{
              marginTop: 16,
              padding: 16,
              background: '#ff4d4f22',
              border: '1px solid #ff4d4f44',
              borderRadius: 'var(--radius-sm)',
              color: '#ff4d4f'
            }}
          >
            ❌ {crawlError}
          </div>
        )}

        {crawlResults && (
          <div style={{ marginTop: 16 }}>
            <h4 style={{ marginBottom: 10, color: 'var(--text-1)' }}>
              ✅ Crawl Complete —{' '}
              {crawlResults.filter(r => r.status === 'success').length}/
              {crawlResults.length} pages
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {crawlResults.map((r, i) => (
                <div
                  key={i}
                  style={{
                    padding: '10px 14px',
                    background: 'var(--surface-2)',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: 13
                  }}
                >
                  <code style={{ color: 'var(--text-1)' }}>{r.path}</code>
                  {r.status === 'success' ? (
                    <span style={{ color: '#52c41a' }}>
                      ✅ {r.questionsCount} questions
                    </span>
                  ) : (
                    <span style={{ color: '#ff4d4f' }}>❌ {r.status}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* How it works */}
      <div className="config-section">
        <h2 className="section-title">📋 How It Works</h2>
        <div className="form-grid" style={{ gap: 24 }}>
          <div
            style={{
              padding: 20,
              background: 'var(--surface-2)',
              borderRadius: 'var(--radius-sm)'
            }}
          >
            <div style={{ fontSize: 32, marginBottom: 8 }}>1️⃣</div>
            <h4 style={{ marginBottom: 6 }}>Crawl & Pre-generate</h4>
            <p style={{ color: 'var(--text-2)', fontSize: 14 }}>
              Crawl your website pages to pre-generate AI questions. The popup
              will load instantly with cached data.
            </p>
          </div>
          <div
            style={{
              padding: 20,
              background: 'var(--surface-2)',
              borderRadius: 'var(--radius-sm)'
            }}
          >
            <div style={{ fontSize: 32, marginBottom: 8 }}>2️⃣</div>
            <h4 style={{ marginBottom: 6 }}>Smart Fallback</h4>
            <p style={{ color: 'var(--text-2)', fontSize: 14 }}>
              If no pre-generated data exists for a page, the widget falls back
              to real-time AI generation.
            </p>
          </div>
          <div
            style={{
              padding: 20,
              background: 'var(--surface-2)',
              borderRadius: 'var(--radius-sm)'
            }}
          >
            <div style={{ fontSize: 32, marginBottom: 8 }}>3️⃣</div>
            <h4 style={{ marginBottom: 6 }}>Psychology-first Questions</h4>
            <p style={{ color: 'var(--text-2)', fontSize: 14 }}>
              Questions use empathy-driven psychology: ice-breaker → deep need
              discovery → soft commitment.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
