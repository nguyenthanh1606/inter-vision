# Inter-Vision

A monorepo built with Nx, Next.js 16, TypeScript, and Tailwind CSS — housing multiple sites and applications.

## Tech Stack

| Layer | Tool |
|---|---|
| Monorepo | [Nx](https://nx.dev) |
| Package Manager | [pnpm](https://pnpm.io) |
| Framework | [Next.js 16](https://nextjs.org) (Turbopack) |
| Language | [TypeScript](https://www.typescriptlang.org) |
| Styling | [Tailwind CSS](https://tailwindcss.com) |
| Code Quality | [Biome](https://biomejs.dev) |
| State / Tables | [TanStack Query](https://tanstack.com/query) · [TanStack Table](https://tanstack.com/table) |

## Project Structure

```
inter-vision/
├── apps/
│   ├── sites/
│   │   └── dental/          # Dental clinic site (Next.js 16, next-intl i18n)
│   ├── smart/               # Smart popup widget + dashboard (Vite + React)
│   └── website/             # Main marketing website (Next.js)
├── packages/                # Shared libraries (future use)
├── scripts/
│   └── fix-next-jsonc.js    # Postinstall fix for Next.js 16 / Turbopack bug
├── biome.json               # Biome formatter / linter config
├── nx.json                  # Nx workspace config
├── pnpm-workspace.yaml      # pnpm workspaces config
└── package.json             # Root scripts & dependencies
```

---

## Prerequisites

| Tool | Version |
|---|---|
| [Node.js](https://nodejs.org) | 20+ |
| [pnpm](https://pnpm.io/installation) | 9+ |

Install pnpm if you don't have it:

```bash
npm install -g pnpm
```

---

## Setup

```bash
# 1. Clone the repository
git clone <repo-url>
cd inter-vision

# 2. Install all dependencies (postinstall patch runs automatically)
pnpm install
```

> **Note:** `pnpm install` automatically runs `scripts/fix-next-jsonc.js` which patches a
> Next.js 16 / Turbopack bug where `server-external-packages.jsonc` is incorrectly
> expected as `.json`. No manual action needed.

---

## Running Apps

### Dental Site (`apps/sites/dental`)

```bash
pnpm dental:dev        # Dev server → http://localhost:3000
pnpm dental:build      # Production build
```

### Main Website (`apps/website`)

```bash
pnpm dev               # Dev server → http://localhost:3000
pnpm build             # Production build
pnpm start             # Start production server
```

### Smart Popup Widget (`apps/smart`)

```bash
pnpm smart:dev          # Dev server (Vite) → http://localhost:5173
pnpm smart:build        # Build dashboard
pnpm smart:build-widget # Build embeddable widget → apps/smart/dist-widget/
```

---

## All Available Scripts

```bash
# Development
pnpm dev                  # website dev server
pnpm dental:dev           # dental site dev server
pnpm smart:dev            # smart popup dev server

# Build
pnpm build                # build website
pnpm dental:build         # build dental site
pnpm smart:build          # build smart dashboard
pnpm smart:build-widget   # build embeddable smart-popup.js widget

# Code quality
pnpm format               # format all files with Biome
pnpm format:check         # check formatting without writing
pnpm lint                 # lint website project
```

### Nx commands (run any target directly)

```bash
pnpm nx dev dental         # same as pnpm dental:dev
pnpm nx build dental       # same as pnpm dental:build
pnpm nx graph              # visualize project dependency graph
```

---

## Apps Overview

### `apps/sites/dental`

Dental clinic website with:
- **Next.js 16** App Router + Turbopack
- **next-intl** for Vietnamese / English i18n (`/vi`, `/en` locales)
- **Tailwind CSS v4** for styling
- Routes: home, about, services, pricing, knowledge, patient stories, contact

### `apps/website`

Main marketing / landing website with:
- **Next.js** App Router
- Tailwind CSS, TanStack Query & Table
- Dark/light theme toggle

### `apps/smart`

Embeddable smart popup widget and management dashboard:
- **Vite** + React for the dashboard
- Standalone `smart-popup.js` widget built separately (no React dependency in output)
- AI-powered lead capture via Groq

---

## Code Quality

### Biome (formatter + linter)

```bash
pnpm format               # format
pnpm format:check         # check only
```

### TypeScript

```bash
pnpm nx typecheck dental   # type-check dental site
pnpm nx typecheck website  # type-check website
```

---

## Troubleshooting

### `TurbopackInternalError: Expected file content at …/server-external-packages.json`

This is a Next.js 16 bug — Turbopack looks for `server-external-packages.json` but the
package ships `server-external-packages.jsonc`. The `postinstall` script fixes this
automatically. If it recurs after a manual `node_modules` wipe:

```bash
pnpm install   # postinstall runs the fix automatically
```

### Port already in use / lock file error

```bash
pkill -f "next dev"
rm -f apps/sites/dental/.next/dev/lock
pnpm dental:dev
```

---

## Useful Resources

- [Nx Documentation](https://nx.dev)
- [Next.js Documentation](https://nextjs.org/docs)
- [next-intl Documentation](https://next-intl-docs.vercel.app)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Biome Documentation](https://biomejs.dev)
- [Vite Documentation](https://vite.dev)

---

## License

MIT
