# AgentClinic

PetClinic for AI coding agent mental health. Coding agents are doing a lot of work. It's stressful! Hallucinations, context rot, memory issues, coworker subagent coordination. Let's build a clinic where they can get help with their issues.

## Prerequisites

- Node.js 18+
- npm

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the app.

## Available Scripts

| Script              | Description                    |
| ------------------- | ------------------------------ |
| `npm run dev`       | Start development server       |
| `npm run build`     | Build for production           |
| `npm start`         | Start production server        |
| `npm run lint`      | Run ESLint                     |
| `npm run format`    | Format code with Prettier      |
| `npm test`          | Run tests with Vitest          |
| `npm run test:ui`   | Run tests with Vitest UI       |
| `npm run db:push`   | Push Prisma schema to database |
| `npm run db:studio` | Open Prisma Studio             |

## Project Structure

```
agentclinic/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles + Tailwind
├── components/             # React components
│   └── ui/                 # shadcn/ui components
├── lib/                    # Utility functions
│   └── utils.ts            # cn() helper for classnames
├── prisma/                 # Prisma ORM
│   └── schema.prisma       # Database schema
├── public/                 # Static assets
└── agent-os/               # Project documentation
    ├── product/            # Product docs (mission, roadmap, tech stack)
    └── specs/              # Feature specifications
```

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **UI Components:** shadcn/ui
- **Styling:** Tailwind CSS
- **Database:** SQLite with Prisma ORM
- **Testing:** Vitest + React Testing Library
- **Language:** TypeScript

## License

ISC
