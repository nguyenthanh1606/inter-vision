#!/usr/bin/env node
/**
 * Workaround for Next.js 16 bug:
 * Turbopack expects `server-external-packages.json` but the file ships as `.jsonc`.
 * This script strips comments/trailing-commas and writes a valid `.json` alongside it.
 */
const fs = require('node:fs')
const path = require('node:path')
const { globSync } = require('node:fs')

// Find all matching .jsonc files under pnpm store
const base = path.join(__dirname, '..', 'node_modules', '.pnpm')

if (!fs.existsSync(base)) {
  console.log('[fix-next-jsonc] node_modules/.pnpm not found, skipping.')
  process.exit(0)
}

const files = []

function walk(dir) {
  let entries
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return
  }
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) {
      // Only recurse into next@* folders
      if (dir === base ? e.name.startsWith('next@') : true) {
        walk(full)
      }
    } else if (e.name === 'server-external-packages.jsonc') {
      files.push(full)
    }
  }
}

walk(base)

if (files.length === 0) {
  console.log('[fix-next-jsonc] No server-external-packages.jsonc files found.')
  process.exit(0)
}

for (const src of files) {
  const dest = src.replace('.jsonc', '.json')
  if (fs.existsSync(dest) && !fs.lstatSync(dest).isSymbolicLink()) {
    // Already a real file, skip
    continue
  }
  let text = fs.readFileSync(src, 'utf8')
  // Strip single-line comments
  text = text.replace(/\/\/[^\n]*/g, '')
  // Strip multi-line comments
  text = text.replace(/\/\*[\s\S]*?\*\//g, '')
  // Remove trailing commas
  text = text.replace(/,(\s*[}\]])/g, '$1')
  try {
    JSON.parse(text)
  } catch (err) {
    console.error(`[fix-next-jsonc] Failed to parse ${src}: ${err.message}`)
    continue
  }
  // Remove symlink if it exists
  if (fs.existsSync(dest)) fs.unlinkSync(dest)
  fs.writeFileSync(dest, text)
  console.log(`[fix-next-jsonc] Written: ${dest}`)
}
