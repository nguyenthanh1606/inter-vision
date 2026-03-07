#!/usr/bin/env node

/**
 * Smart Popup — Crawl & pre-generate questions CLI
 *
 * Usage:
 *   npx tsx apps/smart/scripts/crawl-questions.ts --domain nhakhoaident.com --lang vi
 *   npx tsx apps/smart/scripts/crawl-questions.ts --urls https://nhakhoaident.com/ https://nhakhoaident.com/about --lang vi
 *   npx tsx apps/smart/scripts/crawl-questions.ts --sitemap https://nhakhoaident.com/sitemap.xml --lang vi
 *   npx tsx apps/smart/scripts/crawl-questions.ts --urls-file urls.txt --lang vi
 */

const GROQ_API_KEY = process.env.GROQ_API_KEY || ''
const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions'

const FETCH_HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'Accept-Language': 'vi,en;q=0.9'
}

// ---- Arg parsing ----
const args = process.argv.slice(2)
function getArg(name: string): string | undefined {
  const idx = args.indexOf(`--${name}`)
  if (idx === -1) return undefined
  return args[idx + 1]
}
function getArrayArg(name: string): string[] {
  const idx = args.indexOf(`--${name}`)
  if (idx === -1) return []
  const values: string[] = []
  for (let i = idx + 1; i < args.length; i++) {
    if (args[i].startsWith('--')) break
    values.push(args[i])
  }
  return values
}

const lang = getArg('lang') || 'vi'
const outputPath =
  getArg('output') || 'apps/sites/dental/public/popup-questions.json'
const urlsFromArgs = getArrayArg('urls')
const urlsFile = getArg('urls-file')
const sitemapUrl = getArg('sitemap')
const domainArg = getArg('domain')
const maxUrls = parseInt(getArg('limit') || '20', 10)

// ---- Auto URL discovery ----

/**
 * Normalize domain to base URL: "nhakhoaident.com" → "https://nhakhoaident.com"
 */
function domainToBaseUrl(domain: string): string {
  if (domain.startsWith('http')) return domain.replace(/\/$/, '')
  return `https://${domain}`
}

/**
 * Try to find sitemap URL from robots.txt
 */
async function findSitemapFromRobots(baseUrl: string): Promise<string[]> {
  try {
    const res = await fetch(`${baseUrl}/robots.txt`, {
      headers: FETCH_HEADERS,
      redirect: 'follow'
    })
    if (!res.ok) return []
    const text = await res.text()
    const sitemaps: string[] = []
    for (const line of text.split('\n')) {
      const match = line.match(/^Sitemap:\s*(.+)/i)
      if (match) sitemaps.push(match[1].trim())
    }
    return sitemaps
  } catch {
    return []
  }
}

/**
 * Fetch sitemap XML and extract URLs
 */
async function fetchSitemapUrls(url: string): Promise<string[]> {
  console.log(`  📡 Fetching sitemap: ${url}`)
  try {
    const res = await fetch(url, { headers: FETCH_HEADERS, redirect: 'follow' })
    if (!res.ok) return []
    const xml = await res.text()
    const urls: string[] = []

    // Check if it's a sitemap index (contains other sitemaps)
    const sitemapIndexRegex =
      /<sitemap>[\s\S]*?<loc>([^<]+)<\/loc>[\s\S]*?<\/sitemap>/g
    let match
    const childSitemaps: string[] = []
    while ((match = sitemapIndexRegex.exec(xml)) !== null) {
      childSitemaps.push(match[1])
    }

    if (childSitemaps.length > 0) {
      // Recurse into child sitemaps
      for (const childUrl of childSitemaps) {
        const childUrls = await fetchSitemapUrls(childUrl)
        urls.push(...childUrls)
      }
    } else {
      // Regular sitemap — extract <loc> URLs
      const locRegex = /<loc>([^<]+)<\/loc>/g
      while ((match = locRegex.exec(xml)) !== null) {
        urls.push(match[1])
      }
    }
    return urls
  } catch {
    return []
  }
}

/**
 * Crawl a page and extract all internal links
 */
async function discoverLinksFromPage(
  pageUrl: string,
  baseUrl: string
): Promise<string[]> {
  console.log(`  🔗 Discovering links from: ${pageUrl}`)
  try {
    const res = await fetch(pageUrl, {
      headers: FETCH_HEADERS,
      redirect: 'follow'
    })
    if (!res.ok) return []
    const html = await res.text()

    const baseHostname = new URL(baseUrl).hostname
    const linkRegex = /href=["']([^"'#]+)["']/gi
    const found = new Set<string>()
    let match

    while ((match = linkRegex.exec(html)) !== null) {
      const href = match[1].trim()

      // Skip non-page URLs
      if (
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('javascript:')
      )
        continue
      if (
        /\.(jpg|jpeg|png|gif|svg|webp|pdf|css|js|ico|xml|mp4|mp3|zip|woff|woff2|ttf)(\?|$)/i.test(
          href
        )
      )
        continue

      // Resolve relative URLs
      try {
        const resolved = new URL(href, pageUrl)
        // Only same domain
        if (resolved.hostname !== baseHostname) continue
        // Clean URL
        resolved.hash = ''
        resolved.search = ''
        const cleanUrl =
          resolved.toString().replace(/\/$/, '') || resolved.origin
        found.add(cleanUrl)
      } catch {
        // Skip invalid URLs
      }
    }

    return Array.from(found)
  } catch {
    return []
  }
}

/**
 * Auto-discover all URLs for a domain:
 * 1. Try robots.txt for sitemap URLs
 * 2. Try common sitemap paths
 * 3. Fallback: crawl homepage for internal links
 */
async function discoverUrls(domain: string): Promise<string[]> {
  const baseUrl = domainToBaseUrl(domain)
  console.log(`\n🔍 Auto-discovering URLs for: ${baseUrl}`)

  const allUrls = new Set<string>()
  allUrls.add(baseUrl) // Always include homepage

  // Step 1: Check robots.txt for sitemaps
  const robotsSitemaps = await findSitemapFromRobots(baseUrl)
  if (robotsSitemaps.length > 0) {
    console.log(`  📋 Found ${robotsSitemaps.length} sitemap(s) in robots.txt`)
    for (const sm of robotsSitemaps) {
      const urls = await fetchSitemapUrls(sm)
      urls.forEach(u => allUrls.add(u.replace(/\/$/, '') || u))
    }
  }

  // Step 2: Try common sitemap paths if robots.txt didn't yield results
  if (allUrls.size <= 1) {
    const commonSitemaps = [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/sitemap_index.xml`,
      `${baseUrl}/sitemap-0.xml`
    ]
    for (const sm of commonSitemaps) {
      const urls = await fetchSitemapUrls(sm)
      if (urls.length > 0) {
        console.log(`  📋 Found ${urls.length} URLs in ${sm}`)
        urls.forEach(u => allUrls.add(u.replace(/\/$/, '') || u))
        break // Found a working sitemap
      }
    }
  }

  // Step 3: Crawl homepage for links (always do this to catch pages not in sitemap)
  const homepageLinks = await discoverLinksFromPage(baseUrl, baseUrl)
  const beforeCount = allUrls.size
  homepageLinks.forEach(u => allUrls.add(u))
  const newFromHomepage = allUrls.size - beforeCount
  if (newFromHomepage > 0) {
    console.log(`  🔗 Found ${newFromHomepage} new URLs from homepage links`)
  }

  // Step 4: Crawl a few discovered pages (1 level deep) to find more URLs
  const firstLevelUrls = Array.from(allUrls).slice(0, 5) // Only crawl first 5 for speed
  for (const pageUrl of firstLevelUrls) {
    if (pageUrl === baseUrl) continue
    const links = await discoverLinksFromPage(pageUrl, baseUrl)
    const before = allUrls.size
    links.forEach(u => allUrls.add(u))
    const newCount = allUrls.size - before
    if (newCount > 0) {
      console.log(
        `  🔗 Found ${newCount} new URLs from ${new URL(pageUrl).pathname}`
      )
    }
  }

  const finalUrls = Array.from(allUrls)
  console.log(`\n📊 Total discovered: ${finalUrls.length} unique URLs\n`)
  return finalUrls
}

// ---- Page fetching ----
interface PageData {
  title: string
  description: string
  headings: string[]
  bodyExcerpt: string
}

async function fetchPageContext(url: string): Promise<PageData> {
  console.log(`  📄 Fetching: ${url}`)
  const res = await fetch(url, {
    headers: FETCH_HEADERS,
    redirect: 'follow'
  })

  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const html = await res.text()

  const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i)
  const title = titleMatch?.[1]?.trim() || ''

  const descMatch =
    html.match(
      /<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i
    ) ||
    html.match(
      /<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["'][^>]*>/i
    )
  const description = descMatch?.[1]?.trim() || ''

  const headingRegex = /<h[123][^>]*>([\s\S]*?)<\/h[123]>/gi
  const headings: string[] = []
  let match
  while ((match = headingRegex.exec(html)) !== null && headings.length < 10) {
    const text = match[1].replace(/<[^>]*>/g, '').trim()
    if (text) headings.push(text)
  }

  const bodyMatch =
    html.match(/<main[^>]*>([\s\S]*?)<\/main>/i) ||
    html.match(/<article[^>]*>([\s\S]*?)<\/article>/i) ||
    html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
  const bodyHtml = bodyMatch?.[1] || ''
  const bodyExcerpt = bodyHtml
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .substring(0, 2000)

  return { title, description, headings, bodyExcerpt }
}

function buildContext(url: string, data: PageData): string {
  const parts = [`URL: ${url}`, `Page Title: ${data.title}`]
  if (data.description) parts.push(`Description: ${data.description}`)
  if (data.headings.length > 0)
    parts.push(`Headings: ${data.headings.join(' | ')}`)
  if (data.bodyExcerpt)
    parts.push(`Content excerpt: ${data.bodyExcerpt.substring(0, 800)}`)
  return parts.join('\n')
}

// ---- AI question generation ----
async function generateQuestions(pageContext: string, language: string) {
  const prompt =
    language === 'vi'
      ? `Bạn là chuyên gia tâm lý hành vi người dùng web. Dựa vào thông tin trang web bên dưới, hãy tạo đúng 3 câu hỏi để popup "chat" với khách truy cập. Mục tiêu: khiến khách cảm thấy thoải mái, được thấu hiểu, và MUỐN để lại thông tin liên hệ.

Thông tin trang:
${pageContext}

Trả về CHỈ JSON hợp lệ theo đúng format sau, không có markdown, không giải thích:
[
  {"id":"q1","text":"câu hỏi","options":["lựa chọn 1","lựa chọn 2","lựa chọn 3"]},
  {"id":"q2","text":"câu hỏi","options":["lựa chọn 1","lựa chọn 2","lựa chọn 3"]},
  {"id":"q3","text":"câu hỏi","options":["lựa chọn 1","lựa chọn 2","lựa chọn 3"]}
]

Quy tắc QUAN TRỌNG — Tâm lý & Giọng văn:
- CÂU HỎI 1 — "Ice-breaker" đồng cảm: Thể hiện bạn BIẾT khách đang xem gì, và hỏi nhẹ nhàng. Ví dụ: "Mình thấy bạn đang tìm hiểu về [topic từ trang] — điều gì khiến bạn quan tâm nhất nhỉ? 😊"
- CÂU HỎI 2 — "Khám phá nhu cầu sâu": Hỏi về tình trạng/trải nghiệm cá nhân, khiến khách cảm thấy được lắng nghe. Ví dụ: "Hiện tại bạn đang gặp khó khăn gì về vấn đề này ạ?"
- CÂU HỎI 3 — "Cam kết nhẹ": Hỏi về mức độ sẵn sàng, nhưng KHÔNG áp lực. Ví dụ: "Nếu mình tìm được giải pháp phù hợp, bạn muốn bắt đầu khi nào nhỉ?"

Quy tắc lựa chọn:
- Mỗi lựa chọn mang CẢM XÚC, có context, tối đa 10 chữ
- Thêm emoji phù hợp vào mỗi lựa chọn
- Lựa chọn phải cụ thể cho NỘI DUNG TRANG (không generic)
- Luôn có 1 lựa chọn "mềm" cho người chưa quyết định: "🤔 Mình chỉ xem thử thôi"
- Dùng "mình", "bạn" — giọng như bạn bè đang chat`
      : `You are a web user behavior psychology expert. Based on the page info below, create exactly 3 questions for a popup "chat" with visitors. Goal: make visitors feel comfortable, understood, and WANT to leave their contact info.

Page context:
${pageContext}

Return ONLY valid JSON in this exact format, no markdown, no explanation:
[
  {"id":"q1","text":"question","options":["option 1","option 2","option 3"]},
  {"id":"q2","text":"question","options":["option 1","option 2","option 3"]},
  {"id":"q3","text":"question","options":["option 1","option 2","option 3"]}
]

IMPORTANT rules — Psychology & Tone:
- QUESTION 1 — "Empathy ice-breaker": Show you KNOW what they're browsing, ask gently.
- QUESTION 2 — "Deep need discovery": Ask about personal situation/experience.
- QUESTION 3 — "Soft commitment": Ask about readiness, NO pressure.

Option rules:
- Each option carries EMOTION, has context, max 10 words
- Add fitting emoji to each option
- Options must be SPECIFIC to the PAGE CONTENT
- Always include 1 "soft" option for undecided visitors
- Tone like friendly chat`

  const response = await fetch(GROQ_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${GROQ_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.8,
      max_tokens: 600
    })
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`Groq API ${response.status}: ${text}`)
  }

  const data = await response.json()
  const content = data.choices?.[0]?.message?.content || ''
  const jsonMatch = content.match(/\[[\s\S]*\]/)
  if (!jsonMatch) throw new Error('Invalid AI response — no JSON found')

  return JSON.parse(jsonMatch[0])
}

// ---- URL path extraction ----
function getPathFromUrl(url: string): string {
  try {
    const parsed = new URL(url)
    return parsed.pathname.replace(/\/$/, '') || '/'
  } catch {
    return url
  }
}

// ---- Main ----
async function main() {
  if (!GROQ_API_KEY) {
    console.error('❌ GROQ_API_KEY environment variable is required')
    console.error('   Set it: export GROQ_API_KEY=gsk_...')
    process.exit(1)
  }

  // Collect URLs
  let urls: string[] = [...urlsFromArgs]

  // Auto-discover from domain
  if (domainArg) {
    const discovered = await discoverUrls(domainArg)
    urls.push(...discovered)
  }

  if (sitemapUrl) {
    const sitemapUrls = await fetchSitemapUrls(sitemapUrl)
    urls.push(...sitemapUrls)
    console.log(`  Found ${sitemapUrls.length} URLs in sitemap`)
  }

  if (urlsFile) {
    const fs = await import('fs/promises')
    const content = await fs.readFile(urlsFile, 'utf-8')
    const fileUrls = content
      .split('\n')
      .map(u => u.trim())
      .filter(Boolean)
    urls.push(...fileUrls)
    console.log(`  Found ${fileUrls.length} URLs in file`)
  }

  if (urls.length === 0) {
    console.error(
      '❌ No URLs provided. Use --domain, --urls, --urls-file, or --sitemap'
    )
    console.error('')
    console.error('Usage:')
    console.error(
      '  npx tsx apps/smart/scripts/crawl-questions.ts --domain nhakhoaident.com'
    )
    console.error(
      '  npx tsx apps/smart/scripts/crawl-questions.ts --urls https://example.com/ https://example.com/about'
    )
    console.error(
      '  npx tsx apps/smart/scripts/crawl-questions.ts --sitemap https://example.com/sitemap.xml'
    )
    console.error(
      '  npx tsx apps/smart/scripts/crawl-questions.ts --urls-file urls.txt'
    )
    console.error('')
    console.error('Options:')
    console.error('  --domain domain      Auto-discover all URLs from a domain')
    console.error('  --limit N            Max URLs to process (default: 20)')
    console.error('  --lang vi|en         Language (default: vi)')
    console.error('  --output path        Output JSON file path')
    process.exit(1)
  }

  // Deduplicate and limit
  urls = [...new Set(urls)].slice(0, maxUrls)

  console.log(`\n🕷️ Smart Popup Crawler`)
  console.log(`   URLs: ${urls.length} (limit: ${maxUrls})`)
  console.log(`   Language: ${lang}`)
  console.log(`   Output: ${outputPath}\n`)

  // Load existing data
  const fs = await import('fs/promises')
  const path = await import('path')
  let existingData: Record<string, unknown> = {}
  try {
    const content = await fs.readFile(outputPath, 'utf-8')
    existingData = JSON.parse(content)
    console.log(
      `📂 Loaded existing data with ${Object.keys(existingData).length} pages\n`
    )
  } catch {
    console.log(`📂 Starting fresh (no existing data)\n`)
  }

  let success = 0
  let failed = 0

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i]
    const urlPath = getPathFromUrl(url)
    console.log(`[${i + 1}/${urls.length}] Processing: ${urlPath}`)

    try {
      const pageData = await fetchPageContext(url)
      console.log(`  📝 Title: ${pageData.title || '(no title)'}`)
      console.log(`  📋 Headings: ${pageData.headings.length}`)

      const contextSummary = buildContext(url, pageData)
      const questions = await generateQuestions(contextSummary, lang)

      existingData[urlPath] = {
        questions,
        pageTitle: pageData.title,
        pageDescription: pageData.description,
        generatedAt: new Date().toISOString(),
        language: lang
      }

      console.log(`  ✅ Generated ${questions.length} questions`)
      for (const q of questions) {
        console.log(`     ${q.id}: ${q.text}`)
      }
      console.log('')
      success++

      // Rate limit pause
      if (i < urls.length - 1) {
        await new Promise(r => setTimeout(r, 1000))
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      console.log(`  ❌ Failed: ${msg}\n`)
      failed++
    }
  }

  // Save
  const outputDir = path.dirname(path.resolve(outputPath))
  await fs.mkdir(outputDir, { recursive: true })
  await fs.writeFile(
    path.resolve(outputPath),
    JSON.stringify(existingData, null, 2),
    'utf-8'
  )

  console.log(`\n${'='.repeat(50)}`)
  console.log(`✅ Done! ${success} success, ${failed} failed`)
  console.log(`📁 Saved to: ${outputPath}`)
  console.log(`   Total pages in data: ${Object.keys(existingData).length}`)
}

main().catch(err => {
  console.error('Fatal error:', err)
  process.exit(1)
})
