// packages/icons/scripts/build-sprite.mjs
// Reads SVG files from src/svg/, optimizes with SVGO, builds sprite + TypeScript types.
// Run: node scripts/build-sprite.mjs
// Watch: node scripts/build-sprite.mjs --watch

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import fg from 'fast-glob'
import { optimize } from 'svgo'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SVG_DIR = path.join(__dirname, '../src/svg')
const OUT_SPRITE = path.join(__dirname, '../src/generated-sprite.ts')
const OUT_TYPES = path.join(__dirname, '../src/types.ts')

const SVGO_CONFIG = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false, // keep viewBox — required for <symbol> scaling
          removeUselessDefs: false
        }
      }
    },
    'removeDimensions' // removes width/height so <symbol> inherits size from <use> container
  ]
}

function buildSprite() {
  if (!fs.existsSync(SVG_DIR)) {
    fs.mkdirSync(SVG_DIR, { recursive: true })
  }

  const svgFiles = fg.sync('**/*.svg', { cwd: SVG_DIR, absolute: true })

  if (svgFiles.length === 0) {
    console.warn(
      '[icons] No SVG files found in src/svg/ — creating empty sprite'
    )
    fs.writeFileSync(
      OUT_SPRITE,
      [
        '// AUTO-GENERATED — do not edit by hand.',
        '// Add .svg files to packages/icons/src/svg/ and run: pnpm nx run icons:build-sprite',
        "export const SPRITE_CONTENT = ''",
        ''
      ].join('\n')
    )
    fs.writeFileSync(
      OUT_TYPES,
      [
        '// AUTO-GENERATED — do not edit by hand.',
        '// Add .svg files to packages/icons/src/svg/ and run: pnpm nx run icons:build-sprite',
        'export type IconName = never',
        'export const ICON_NAMES: readonly string[] = []',
        ''
      ].join('\n')
    )
    return
  }

  const names = []
  const symbols = []

  for (const file of svgFiles.sort()) {
    const rel = path.relative(SVG_DIR, file)
    const name = rel.replace(/\.svg$/, '').replace(/[\\/]/g, '-')
    const raw = fs.readFileSync(file, 'utf-8')

    let optimized
    try {
      const result = optimize(raw, { ...SVGO_CONFIG, path: file })
      optimized = result.data
    } catch (err) {
      console.error(`[icons] Failed to optimize ${name}.svg:`, err.message)
      optimized = raw
    }

    // Extract viewBox from optimized SVG
    const viewBoxMatch = optimized.match(/viewBox="([^"]+)"/)
    const viewBox = viewBoxMatch ? ` viewBox="${viewBoxMatch[1]}"` : ''

    // Strip outer <svg ...>...</svg> wrapper, keep inner content
    const inner = optimized
      .replace(/<svg[^>]*>/, '')
      .replace(/<\/svg>\s*$/, '')
      .trim()

    symbols.push(`  <symbol id="icon-${name}"${viewBox}>${inner}</symbol>`)
    names.push(name)
  }

  const spriteContent = [
    '<svg xmlns="http://www.w3.org/2000/svg" style="display:none">',
    ...symbols,
    '</svg>'
  ].join('\n')

  fs.writeFileSync(
    OUT_SPRITE,
    [
      '// AUTO-GENERATED — do not edit by hand.',
      '// Add .svg files to packages/icons/src/svg/ and run: pnpm nx run icons:build-sprite',
      `export const SPRITE_CONTENT = ${JSON.stringify(spriteContent)}`,
      ''
    ].join('\n')
  )

  const nameUnion = names.map(n => `'${n}'`).join(' | ')
  const namesList = names.map(n => `'${n}'`).join(', ')
  fs.writeFileSync(
    OUT_TYPES,
    [
      '// AUTO-GENERATED — do not edit by hand.',
      '// Add .svg files to packages/icons/src/svg/ and run: pnpm nx run icons:build-sprite',
      `export type IconName = ${nameUnion}`,
      `export const ICON_NAMES = [${namesList}] as const`,
      ''
    ].join('\n')
  )

  console.log(
    `[icons] Built sprite with ${names.length} icon(s): ${names.join(', ')}`
  )
}

if (process.argv.includes('--watch')) {
  const { default: chokidar } = await import('chokidar')
  buildSprite()
  chokidar
    .watch(SVG_DIR, { ignoreInitial: true })
    .on('add', f => {
      if (!f.endsWith('.svg')) return
      console.log(`[icons] Added ${path.relative(SVG_DIR, f)}`)
      buildSprite()
    })
    .on('change', f => {
      if (!f.endsWith('.svg')) return
      console.log(`[icons] Changed ${path.relative(SVG_DIR, f)}`)
      buildSprite()
    })
    .on('unlink', f => {
      if (!f.endsWith('.svg')) return
      console.log(`[icons] Removed ${path.relative(SVG_DIR, f)}`)
      buildSprite()
    })
} else {
  buildSprite()
}
