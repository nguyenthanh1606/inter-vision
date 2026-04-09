# @repo/icons

Shared SVG icon library for the monorepo. Uses **SVG Sprite** technique — all icons are compiled into a single sprite, injected into the HTML once, zero HTTP requests.

---

## Adding a new icon

1. Drop your `.svg` file into [`src/svg/`](./src/svg/)
2. Run the build script:
   ```bash
   pnpm nx run icons:build-sprite
   ```
3. Use it immediately — TypeScript auto-updates the icon name list

> **Note:** SVGs should use `fill="currentColor"` instead of hardcoded hex colors to support Tailwind color classes.

---

## Setup in a new app

### 1. Add dependency

```json
// app's package.json
{
  "dependencies": {
    "@repo/icons": "workspace:*"
  }
}
```

### 2. Add path alias to tsconfig

```json
// app's tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@repo/icons": ["../../packages/icons/src/index.ts"]
    }
  }
}
```

> Adjust the number of `../` based on the app's location in the monorepo.

### 3. Inject SpriteSheet into the root layout (once only)

**Next.js** (`layout.tsx`):
```tsx
import { SpriteSheet } from '@repo/icons'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <SpriteSheet />
        {children}
      </body>
    </html>
  )
}
```

**Vite/React** (`App.tsx`):
```tsx
import { SpriteSheet } from '@repo/icons'

export default function App() {
  return (
    <>
      <SpriteSheet />
      {/* app content */}
    </>
  )
}
```

**Vite only** — also add an alias in `vite.config.ts`:
```ts
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@repo/icons': path.resolve(__dirname, '../../packages/icons/src/index.ts')
    }
  }
})
```

---

## Usage

### `<Icon />`

```tsx
import { Icon } from '@repo/icons'

// Basic
<Icon name="logo" />

// Custom size (number = px, string = any CSS unit)
<Icon name="logo" size={40} />
<Icon name="logo" size="2rem" />

// Color via Tailwind (SVG must use fill="currentColor")
<Icon name="logo" size={24} className="text-primary" />
<Icon name="logo" size={24} className="text-blue-500 dark:text-blue-300" />

// Accessible icon (adds aria label)
<Icon name="logo" size={24} title="Metatus logo" />
```

### `IconName` type

```ts
import type { IconName } from '@repo/icons'

interface Props {
  icon: IconName // 'logo' | 'tooth' | ...
}
```

### `ICON_NAMES` constant

```ts
import { ICON_NAMES } from '@repo/icons'

console.log(ICON_NAMES) // ['logo', 'tooth', ...]
```

---

## Dev mode

Run in a separate terminal alongside the dev server — rebuilds automatically when you add or change SVG files:

```bash
pnpm nx run icons:watch-sprite
```

---

## Directory structure

```
packages/icons/
├── src/
│   ├── svg/                  ← Place your .svg files here
│   │   └── logo.svg
│   ├── generated-sprite.ts   ← AUTO-GENERATED (do not edit)
│   ├── types.ts              ← AUTO-GENERATED (do not edit)
│   ├── Icon.tsx              ← <Icon /> component
│   ├── SpriteSheet.tsx       ← Sprite injection component
│   └── index.ts              ← Public API
└── scripts/
    └── build-sprite.mjs      ← Sprite build script
```

---

## Nx targets

| Command | Description |
|---|---|
| `pnpm nx run icons:build-sprite` | Build sprite from SVG files |
| `pnpm nx run icons:build` | build-sprite + compile TypeScript to `dist/` |
| `pnpm nx run icons:watch-sprite` | Watch mode — auto-rebuild on SVG changes |
