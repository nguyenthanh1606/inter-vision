/**
 * Groq AI integration via server-side proxy.
 * API key is NEVER exposed in client-side code.
 * All request/response data is AES-GCM encrypted.
 *
 * Supports pre-generated questions loaded from a data endpoint,
 * with AI fallback when no pre-generated data is available.
 */

import { encrypt, decrypt } from './crypto'

export interface AIQuestion {
  id: string
  text: string
  options: string[]
}

// Encryption key derived from domain — must match server-side
function getEncKey(domain: string): string {
  return `sp_${domain}_secure_2024`
}

/**
 * Call AI via encrypted server-side proxy
 */
async function callAI(
  proxyUrl: string,
  domain: string,
  messages: { role: string; content: string }[],
  temperature: number,
  maxTokens: number
) {
  const encKey = getEncKey(domain)
  const payload = JSON.stringify({
    messages,
    temperature,
    max_tokens: maxTokens
  })
  const encryptedPayload = await encrypt(payload, encKey)

  const response = await fetch(proxyUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ d: encryptedPayload })
  })

  if (!response.ok) throw new Error(`Proxy error: ${response.status}`)

  const responseData = await response.json()
  if (responseData.d) {
    const decrypted = await decrypt(responseData.d, encKey)
    return JSON.parse(decrypted)
  }
  return responseData
}

/**
 * Try to load pre-generated questions from data endpoint.
 * Returns questions if found, null otherwise.
 */
export async function fetchPreGeneratedQuestions(
  dataUrl: string,
  path: string
): Promise<AIQuestion[] | null> {
  try {
    const separator = dataUrl.includes('?') ? '&' : '?'
    const url = `${dataUrl}${separator}path=${encodeURIComponent(path)}`

    const response = await fetch(url)
    if (!response.ok) return null

    const data = await response.json()
    if (data.found && data.questions && Array.isArray(data.questions)) {
      return data.questions as AIQuestion[]
    }
    return null
  } catch {
    return null
  }
}

/**
 * Generate questions via AI (fallback when no pre-generated data)
 */
export async function generateQuestions(
  pageContext: string,
  proxyUrl: string,
  domain: string,
  language: string
): Promise<AIQuestion[]> {
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

  try {
    const data = await callAI(
      proxyUrl,
      domain,
      [{ role: 'user', content: prompt }],
      0.8,
      600
    )
    const content = data.choices?.[0]?.message?.content || ''

    const jsonMatch = content.match(/\[[\s\S]*\]/)
    if (!jsonMatch) throw new Error('Invalid response format')

    return JSON.parse(jsonMatch[0]) as AIQuestion[]
  } catch (err) {
    console.error('Smart Popup: Failed to generate questions', err)
    return language === 'vi'
      ? [
          {
            id: 'q1',
            text: 'Chào bạn! Mình thấy bạn đang tìm hiểu trên trang này — điều gì khiến bạn quan tâm nhất nhỉ? 😊',
            options: [
              '📋 Tìm hiểu thông tin chi tiết',
              '💰 Muốn biết chi phí',
              '🤔 Mình chỉ xem thử thôi'
            ]
          },
          {
            id: 'q2',
            text: 'Mình hiểu! Vậy hiện tại bạn đang ở giai đoạn nào rồi ạ?',
            options: [
              '🆕 Mới bắt đầu tìm hiểu',
              '✅ Đã tìm hiểu nhiều rồi',
              '🔄 Đang cân nhắc giữa các nơi'
            ]
          },
          {
            id: 'q3',
            text: 'Nếu tìm được giải pháp phù hợp, bạn muốn bắt đầu khi nào nhỉ? 💫',
            options: [
              '⚡ Càng sớm càng tốt!',
              '📆 Trong 1-2 tuần tới',
              '🤔 Chưa vội, cần suy nghĩ thêm'
            ]
          }
        ]
      : [
          {
            id: 'q1',
            text: "Hey there! I see you're checking this out — what caught your eye? 😊",
            options: [
              '📋 Want detailed info',
              '💰 Checking the cost',
              '🤔 Just browsing for now'
            ]
          },
          {
            id: 'q2',
            text: 'Got it! Where are you at with this right now?',
            options: [
              '🆕 Just starting to explore',
              '✅ Done lots of research',
              '🔄 Comparing options'
            ]
          },
          {
            id: 'q3',
            text: 'If we find a great fit for you, when would you want to start? 💫',
            options: [
              '⚡ ASAP!',
              '📆 Within 1-2 weeks',
              '🤔 Not in a rush, still thinking'
            ]
          }
        ]
  }
}

export async function generateSummary(
  answers: { question: string; answer: string }[],
  pageContext: string,
  proxyUrl: string,
  domain: string,
  language: string
): Promise<string> {
  const answersText = answers
    .map(a => `Q: ${a.question}\nA: ${a.answer}`)
    .join('\n\n')

  const prompt =
    language === 'vi'
      ? `Bạn là nhân viên tư vấn thân thiện của một doanh nghiệp. Dựa trên câu trả lời của khách hàng và thông tin trang web, hãy viết một đoạn xác nhận lại nhu cầu của khách hàng.

Thông tin trang:
${pageContext}

Câu trả lời của khách:
${answersText}

Yêu cầu:
- Viết như một nhân viên tư vấn đang nói chuyện trực tiếp với khách hàng
- Xác nhận lại nhu cầu của khách (2-3 câu)
- Đưa ra 1 kết luận/gợi ý ngắn gọn để khách cảm thấy được quan tâm và muốn để lại thông tin
- Giọng văn ấm áp, chuyên nghiệp nhưng gần gũi
- Dùng "mình" và "bạn"
- Tối đa 4 câu
- KHÔNG dùng markdown, chỉ text thuần`
      : `You are a friendly consultant for a business. Based on the customer's answers and page context, write a brief confirmation of their needs.

Page context:
${pageContext}

Customer answers:
${answersText}

Requirements:
- Write as if speaking directly to the customer
- Confirm their needs (2-3 sentences)
- Give 1 brief conclusion/suggestion to make them feel valued and want to leave their info
- Warm, professional but friendly tone
- Maximum 4 sentences
- NO markdown, plain text only`

  try {
    const data = await callAI(
      proxyUrl,
      domain,
      [{ role: 'user', content: prompt }],
      0.7,
      250
    )
    return (
      data.choices?.[0]?.message?.content?.trim() ||
      'Cảm ơn bạn đã chia sẻ! Mình sẽ tư vấn phù hợp nhất cho bạn.'
    )
  } catch {
    return language === 'vi'
      ? 'Cảm ơn bạn đã chia sẻ! Mình đã nắm được nhu cầu của bạn. Để mình hỗ trợ tốt nhất, bạn vui lòng để lại thông tin nhé!'
      : 'Thanks for sharing! I understand your needs. Please leave your info so we can help you best!'
  }
}
