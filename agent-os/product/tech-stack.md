# Tech Stack

## Framework

- **Next.js** with **TypeScript** for unified full-stack development
  - App Router for file-based routing
  - API routes for backend endpoints (no separate Express server)
  - Server components for optimal performance

## UI Components

- **shadcn/ui** for professional, customizable components
  - Components are copied into the project (not installed as dependencies)
  - Full control over styling and behavior
  - Built on Radix UI primitives

## Styling

- **Tailwind CSS** for utility-first styling
  - CSS variables for theming
  - Dark mode support

## Database

- **SQLite** for simple, file-based data persistence (ideal for demos and local development)
- **Prisma** ORM for type-safe database access and migrations
- **Seed data** pre-loaded for instant demo readiness — no setup friction, boots ready to show

## Testing

- **Vitest** for fast, Vite-native test runner
- **React Testing Library** for component testing

## Architecture Note

This project uses a unified Next.js architecture instead of separate frontend and backend folders. API routes live alongside pages in the `/app` directory, eliminating CORS issues and simplifying deployment.
