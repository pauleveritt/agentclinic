# Plan: 1.1 Project Scaffolding

## Summary

Set up the AgentClinic monorepo structure with Next.js, shadcn/ui, TypeScript, and tooling.

## Tech Stack (Updated from Original)

| Original                  | Updated                  |
| ------------------------- | ------------------------ |
| React + Vite              | Next.js (includes React) |
| Node + Express            | Next.js API routes       |
| Separate frontend/backend | Single Next.js app       |
| No UI library             | shadcn/ui                |

**Unchanged:** Prisma + SQLite, Vitest, TypeScript

## Files to Create

### Root Configuration

```
/package.json              # Project metadata, scripts
/tsconfig.json             # TypeScript configuration
/.eslintrc.json            # ESLint rules
/.prettierrc               # Prettier formatting
/.gitignore                # Git ignore patterns
/README.md                 # Setup instructions
```

### Next.js App Structure

```
/app/
  layout.tsx               # Root layout with nav
  page.tsx                 # Home page placeholder
  globals.css              # Global styles + Tailwind
/components/
  ui/                      # shadcn/ui components (added via CLI)
/lib/
  utils.ts                 # Utility functions (cn helper for shadcn)
```

### Prisma (placeholder for 1.2)

```
/prisma/
  schema.prisma            # Database schema (placeholder)
```

### shadcn/ui Configuration

```
/components.json           # shadcn/ui config
/tailwind.config.ts        # Tailwind with shadcn presets
/postcss.config.js         # PostCSS for Tailwind
```

## Files to Modify

### `agent-os/product/tech-stack.md`

Update to reflect new tech choices:

- Next.js instead of React + Express
- Add shadcn/ui
- Note about unified full-stack approach

## Tasks

### Task 1: Save Spec Documentation

Create `agent-os/specs/2026-02-04-project-scaffolding/` with:

- `plan.md` — This plan
- `shape.md` — Shaping notes and decisions

### Task 2: Initialize Next.js Project

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"
```

Options:

- TypeScript: Yes
- Tailwind CSS: Yes
- ESLint: Yes
- App Router: Yes
- src/ directory: No (keep flat)
- Import alias: @/\*

### Task 3: Configure shadcn/ui

```bash
npx shadcn@latest init
```

Select:

- Style: Default
- Base color: Slate (neutral, professional)
- CSS variables: Yes

### Task 4: Add Prettier

```bash
npm install -D prettier eslint-config-prettier
```

Create `.prettierrc`:

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

Update `.eslintrc.json` to extend prettier.

### Task 5: Initialize Prisma

```bash
npm install prisma @prisma/client
npx prisma init --datasource-provider sqlite
```

Creates `/prisma/schema.prisma` with SQLite datasource.

### Task 6: Configure Vitest

```bash
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom
```

Create `vitest.config.ts`:

```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.ts',
  },
})
```

### Task 7: Update npm Scripts

In `package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write .",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "db:push": "prisma db push",
    "db:studio": "prisma studio"
  }
}
```

### Task 8: Create README

Write setup instructions:

- Prerequisites (Node 18+)
- Quick start (`npm install && npm run dev`)
- Available scripts
- Project structure overview

### Task 9: Update tech-stack.md

Update `/agent-os/product/tech-stack.md` with:

- Next.js (replaces React + Express)
- shadcn/ui (new)
- Unified architecture note

### Task 10: Clean Up & Verify

- Remove any unused boilerplate from create-next-app
- Run `npm run lint` — should pass
- Run `npm run dev` — should show Next.js welcome
- Run `npm test` — should run (with no tests yet)

## Verification

After implementation:

1. **Dev server works:**

   ```bash
   npm run dev
   # Visit http://localhost:3000 — see Next.js page
   ```

2. **Lint passes:**

   ```bash
   npm run lint
   # No errors
   ```

3. **Tests run:**

   ```bash
   npm test
   # Vitest runs (0 tests is fine)
   ```

4. **Prisma initialized:**

   ```bash
   npx prisma studio
   # Opens Prisma Studio (empty DB)
   ```

5. **Formatting works:**
   ```bash
   npm run format
   # Prettier formats files
   ```

## Notes

- The original roadmap specified `/backend`, `/frontend`, `/shared` folders. With Next.js, we use a unified structure instead — API routes live alongside pages.
- shadcn/ui components are copied into `/components/ui/` (not installed as dependencies), making them fully customizable.
- We're not adding any UI components yet — just the infrastructure. Components come in later tasks.
