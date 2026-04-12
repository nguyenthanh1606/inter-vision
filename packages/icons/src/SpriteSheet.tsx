import { SPRITE_CONTENT } from './generated-sprite'

/**
 * Inject once in your root layout <body>.
 * Inlines the SVG sprite — zero HTTP requests, SSR-safe (no 'use client' needed).
 *
 * @example
 * // apps/website/src/app/layout.tsx
 * import { SpriteSheet } from '@repo/icons'
 * <body>
 *   <SpriteSheet />
 *   ...
 * </body>
 */
export function SpriteSheet() {
  if (!SPRITE_CONTENT) return null
  return (
    <div
      aria-hidden="true"
      style={{ display: 'none' }}
      // Content is static, build-time generated — no user input, no XSS vector
      // biome-ignore lint/security/noDangerouslySetInnerHtml: static build-time SVG sprite
      dangerouslySetInnerHTML={{ __html: SPRITE_CONTENT }}
    />
  )
}
