# Shape: 1.1 Project Scaffolding

## Problem

AgentClinic needs a solid foundation before building features. The original roadmap specified separate frontend/backend folders with React + Express, but modern Next.js provides a simpler unified approach.

## Appetite

Small batch — a few hours of setup work. This is foundational infrastructure, not feature development.

## Solution

Use Next.js as a unified full-stack framework instead of separate React frontend and Express backend. Add shadcn/ui for professional-looking UI components with full customization.

### Key Decisions

1. **Next.js over React + Express**
   - Single codebase, no CORS issues
   - API routes colocated with pages
   - Built-in TypeScript and Tailwind support
   - Easier deployment (single app)

2. **shadcn/ui for components**
   - Not a dependency — components are copied into the project
   - Full control over styling and behavior
   - Professional appearance out of the box
   - Works seamlessly with Tailwind

3. **Flat directory structure**
   - No `src/` folder — keeps paths shorter
   - `app/` for pages and layouts (Next.js convention)
   - `components/` for React components
   - `lib/` for utilities and shared code
   - `prisma/` for database schema

4. **Vitest over Jest**
   - Faster execution
   - Better ESM support
   - Vite-native (even though we're using Next.js, Vitest works fine)
   - Familiar API for Jest users

## Rabbit Holes

- **Don't customize Tailwind theme yet** — use shadcn defaults for now
- **Don't add UI components yet** — just the infrastructure
- **Don't set up deployment** — local development only for now
- **Don't create database models** — that's task 1.2

## No-Gos

- No Bun (stick with Node for broader compatibility)
- No monorepo tools (Turborepo, Nx) — single package is enough
- No Storybook yet — can add later if needed
- No CI/CD setup — manual for now

## Questions Resolved

- **Why not Vite?** Next.js provides more out of the box (routing, API routes, SSR if needed)
- **Why SQLite?** Perfect for demos, no database server needed, easy to reset
- **Why Prisma?** Type-safe database access, great developer experience, visual studio tool
