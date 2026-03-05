# Inter-Vision

A modern monorepo project built with Nx, Next.js, TypeScript, and Tailwind CSS.

## Overview

Inter-Vision is a monorepo workspace that uses Nx for managing multiple projects efficiently. It includes a Next.js website application built with TypeScript, styled with Tailwind CSS, linted with Biome, and enhanced with TanStack libraries for state management and data tables.

## Tech Stack

- **Monorepo**: [Nx](https://nx.dev)
- **Runtime**: [Node.js](https://nodejs.org)
- **Framework**: [Next.js 16](https://nextjs.org)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Code Quality**: [Biome](https://biomejs.dev)
- **State Management**: [TanStack React Query](https://tanstack.com/query)
- **Data Tables**: [TanStack React Table](https://tanstack.com/table)
- **Package Manager**: npm

## Project Structure

```
inter-vision/
├── apps/
│   └── website/              # Next.js website application
├── packages/                 # Shared libraries (future use)
├── biome.json                # Biome configuration
├── nx.json                   # Nx configuration
├── package.json              # Root dependencies
└── README.md                 # This file
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Development

Start the development server for the website app:

```bash
npm run dev
```

Or using Nx directly:

```bash
npx nx dev website
```

The website will be available at `http://localhost:3000`

### Building

Build the website for production:

```bash
npx nx build website
```

The build output will be in `apps/website/.next`

## Available Commands

### Quick Commands (npm scripts)

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm start                # Start production server
npm run format           # Format code with Biome
npm run format:check     # Check code formatting
npm run lint             # Lint website project
```

### Nx Commands (direct)

### Dev
```bash
npx nx dev website         # Start development server
```

### Build
```bash
npx nx build website       # Build for production
```

### Format
```bash
npx nx format:check        # Check formatting with Biome
npx nx format:write        # Format code with Biome
```

### Lint
```bash
npx nx lint website        # Lint website project
```

### Run Graph
```bash
npx nx graph               # Visualize project dependencies
```

## Code Quality

### Formatting with Biome

This project uses Biome for code formatting and linting. Configuration is in `biome.json`.

Format all code:
```bash
npx biome format . --write
```

Check formatting:
```bash
npx biome check .
```

### TypeScript

TypeScript is configured for strict type checking. Check for type errors:
```bash
npx nx check:types
```

## Styling with Tailwind CSS

Tailwind CSS is pre-configured for the website app. Customize the theme in `apps/website/tailwind.config.js`.

### Tailwind Configuration
- Content: `apps/website/src/**/*.{js,jsx,ts,tsx}`
- Theme: Extendable in `tailwind.config.js`
- Plugins: Can be added in `tailwind.config.js`

## TanStack Libraries

### React Query
Used for managing server state and synchronization with APIs.

Documentation: [TanStack Query](https://tanstack.com/query)

### React Table
Used for building and managing complex data tables.

Documentation: [TanStack Table](https://tanstack.com/table)

## Project Walkthrough

### Website App (`apps/website`)

The main Next.js application with:
- App Router with TypeScript
- Tailwind CSS for styling
- Global styles in `src/app/global.css`
- API routes in `src/app/api/`
- Pages in `src/app/`

### Configuration Files

- `next.config.js` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `.swcrc` - SWC compiler configuration
- `biome.json` - Biome formatter/linter configuration

## Useful Resources

- [Nx Documentation](https://nx.dev)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Biome Documentation](https://biomejs.dev)

## License

MIT
