import { readFile } from 'fs/promises'
import { type NextRequest, NextResponse } from 'next/server'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'public', 'popup-questions.json')

interface StoredPageData {
  questions: { id: string; text: string; options: string[] }[]
  pageTitle: string
  pageDescription: string
  generatedAt: string
  language: string
}

/**
 * GET /api/popup-data?path=/services/implant
 * Returns pre-generated popup questions for a given URL path.
 */
export async function GET(request: NextRequest) {
  const urlPath = request.nextUrl.searchParams.get('path') || '/'
  const normalizedPath = urlPath.replace(/\/$/, '') || '/'

  try {
    const content = await readFile(DATA_FILE, 'utf-8')
    const allData: Record<string, StoredPageData> = JSON.parse(content)

    // Exact match
    if (allData[normalizedPath]) {
      return NextResponse.json({
        found: true,
        path: normalizedPath,
        ...allData[normalizedPath]
      })
    }

    // Try fuzzy match — find closest parent path
    const pathParts = normalizedPath.split('/').filter(Boolean)
    while (pathParts.length > 0) {
      pathParts.pop()
      const parentPath = '/' + pathParts.join('/')
      const checkPath = parentPath === '/' ? '/' : parentPath
      if (allData[checkPath]) {
        return NextResponse.json({
          found: true,
          path: checkPath,
          fallback: true,
          ...allData[checkPath]
        })
      }
    }

    return NextResponse.json({ found: false, path: normalizedPath })
  } catch {
    return NextResponse.json({
      found: false,
      path: normalizedPath,
      error: 'No data file'
    })
  }
}
