import { NextRequest, NextResponse } from 'next/server'
import { writeFile, readFile, mkdir } from 'fs/promises'
import path from 'path'

const GROQ_API_KEY = process.env.GROQ_API_KEY || ''
const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions'
const DATA_DIR = path.join(process.cwd(), 'public')
const DATA_FILE = path.join(DATA_DIR, 'popup-questions.json')

interface CrawlRequest {
  urls: string[]
  language?: string
  baseUrl?: string
}

interface PageData {
  title: string
  description: string
  headings: string[]
  bodyExcerpt: string
}

/**
 * Fetch a page and extract its context (title, meta, headings, body text).
 */
async function fetchPageContext(url: string): Promise<PageData> {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'SmartPopupCrawler/1.0' }
  })
  const html = await res.text()

  // Extract title
  const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i)
  const title = titleMatch?.[1]?.trim() || ''

  // Extract meta description
  const descMatch =
    html.match(
      /<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i
    ) ||
    html.match(
      /<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["'][^>]*>/i
    )
  const description = descMatch?.[1]?.trim() || ''

  // Extract headings (h1, h2, h3)
  const headingRegex = /<h[123][^>]*>([\s\S]*?)<\/h[123]>/gi
  const headings: string[] = []
  let match
  while ((match = headingRegex.exec(html)) !== null && headings.length < 10) {
    const text = match[1].replace(/<[^>]*>/g, '').trim()
    if (text) headings.push(text)
  }

  // Extract body text (strip tags)
  const bodyMatch =
    html.match(/<main[^>]*>([\s\S]*?)<\/main>/i) ||
    html.match(/<article[^>]*>([\s\S]*?)<\/article>/i) ||
    html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
  const bodyHtml = bodyMatch?.[1] || ''
  const bodyText = bodyHtml
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .substring(0, 2000)

  return { title, description, headings, bodyExcerpt: bodyText }
}

/**
 * Build context string from page data
 */
function buildContext(url: string, data: PageData): string {
  const parts = [`URL: ${url}`, `Page Title: ${data.title}`]
  if (data.description) parts.push(`Description: ${data.description}`)
  if (data.headings.length > 0)
    parts.push(`Headings: ${data.headings.join(' | ')}`)
  if (data.bodyExcerpt)
    parts.push(`Content excerpt: ${data.bodyExcerpt.substring(0, 800)}`)
  return parts.join('\n')
}

/**
 * Call Groq AI to generate questions for a specific page
 */
async function generateQuestionsForPage(
  pageContext: string,
  language: string
): Promise<{ id: string; text: string; options: string[] }[]> {
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
- QUESTION 1 — "Empathy ice-breaker": Show you KNOW what they're browsing, ask gently. E.g.: "Hey! I see you're looking at [topic from page] — what caught your eye? 😊"
- QUESTION 2 — "Deep need discovery": Ask about their personal situation/experience, make them feel heard. E.g.: "What's your biggest challenge with this right now?"
- QUESTION 3 — "Soft commitment": Ask about readiness, NO pressure. E.g.: "If we found the right solution for you, when would you want to get started?"

Option rules:
- Each option should carry EMOTION, have context, max 10 words
- Add fitting emoji to each option
- Options must be SPECIFIC to the PAGE CONTENT (not generic)
- Always include 1 "soft" option for undecided visitors: "🤔 Just browsing for now"
- Tone like friendly chat between friends`

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
    throw new Error(`Groq API error: ${response.status}`)
  }

  const data = await response.json()
  const content = data.choices?.[0]?.message?.content || ''
  const jsonMatch = content.match(/\[[\s\S]*\]/)
  if (!jsonMatch) throw new Error('Invalid AI response format')

  return JSON.parse(jsonMatch[0])
}

/**
 * Extract URL path from full URL
 */
function getPathFromUrl(url: string): string {
  try {
    const parsed = new URL(url)
    return parsed.pathname.replace(/\/$/, '') || '/'
  } catch {
    return url
  }
}

/**
 * Load existing data file
 */
async function loadExistingData(): Promise<Record<string, unknown>> {
  try {
    const content = await readFile(DATA_FILE, 'utf-8')
    return JSON.parse(content)
  } catch {
    return {}
  }
}

/**
 * POST /api/crawl-questions
 * Body: { urls: string[], language?: string, baseUrl?: string }
 * Crawl each URL, generate AI questions, and save to popup-questions.json
 */
export async function POST(request: NextRequest) {
  if (!GROQ_API_KEY) {
    return NextResponse.json(
      { error: 'GROQ_API_KEY not configured' },
      { status: 500 }
    )
  }

  try {
    const body: CrawlRequest = await request.json()
    const { urls, language = 'vi', baseUrl = '' } = body

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: 'urls array is required' },
        { status: 400 }
      )
    }

    // Load existing data
    const existingData = await loadExistingData()
    const results: { path: string; status: string; questionsCount?: number }[] =
      []

    for (const rawUrl of urls) {
      // Build full URL if relative path provided
      const fullUrl = rawUrl.startsWith('http') ? rawUrl : `${baseUrl}${rawUrl}`
      const urlPath = getPathFromUrl(fullUrl)

      try {
        // Fetch and extract page context
        const pageData = await fetchPageContext(fullUrl)
        const contextSummary = buildContext(fullUrl, pageData)

        // Generate questions via AI
        const questions = await generateQuestionsForPage(
          contextSummary,
          language
        )

        // Store in data object
        ;(existingData as Record<string, unknown>)[urlPath] = {
          questions,
          pageTitle: pageData.title,
          pageDescription: pageData.description,
          generatedAt: new Date().toISOString(),
          language
        }

        results.push({
          path: urlPath,
          status: 'success',
          questionsCount: questions.length
        })

        // Brief pause between API calls to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 500))
      } catch (err) {
        const errMsg = err instanceof Error ? err.message : 'Unknown error'
        results.push({ path: urlPath, status: `error: ${errMsg}` })
      }
    }

    // Save to file
    await mkdir(DATA_DIR, { recursive: true })
    await writeFile(DATA_FILE, JSON.stringify(existingData, null, 2), 'utf-8')

    return NextResponse.json({
      success: true,
      totalUrls: urls.length,
      results
    })
  } catch (error) {
    console.error('Crawl error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
