/**
 * Page content detector — analyzes the current page to determine context.
 */

export interface PageContext {
  url: string
  path: string
  title: string
  description: string
  headings: string[]
  bodyText: string
  language: string
}

export function detectPageContext(): PageContext {
  const url = window.location.href
  const path = window.location.pathname
  const title = document.title || ''

  // Get meta description
  const metaDesc = document.querySelector('meta[name="description"]')
  const description = metaDesc?.getAttribute('content') || ''

  // Get all headings
  const headingEls = document.querySelectorAll('h1, h2, h3')
  const headings: string[] = []
  headingEls.forEach(el => {
    const text = (el as HTMLElement).innerText?.trim()
    if (text) headings.push(text)
  })

  // Get main text content (limited to avoid token overflow)
  const mainEl =
    document.querySelector('main') ||
    document.querySelector('article') ||
    document.body
  const bodyText = (mainEl as HTMLElement).innerText?.substring(0, 2000) || ''

  // Detect language
  const lang = document.documentElement.lang || 'vi'

  return { url, path, title, description, headings, bodyText, language: lang }
}

/**
 * Build a context summary string for the AI prompt
 */
export function buildContextSummary(ctx: PageContext): string {
  const parts = [`URL: ${ctx.url}`, `Page Title: ${ctx.title}`]
  if (ctx.description) parts.push(`Description: ${ctx.description}`)
  if (ctx.headings.length > 0)
    parts.push(`Headings: ${ctx.headings.slice(0, 8).join(' | ')}`)
  if (ctx.bodyText)
    parts.push(`Content excerpt: ${ctx.bodyText.substring(0, 800)}`)

  return parts.join('\n')
}
