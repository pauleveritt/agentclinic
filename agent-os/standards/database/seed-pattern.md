# Seed Script Pattern

Create idempotent seed scripts with `deleteMany` + `createMany`.

```typescript
import { PrismaClient, Ailment } from '../lib/generated/prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.appointment.deleteMany()

  // Create sample data
  await prisma.appointment.createMany({
    data: [
      { agentName: 'Claude', ailment: Ailment.VaguePromptSyndrome },
      // ...
    ]
  })
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
```

**package.json:**
```json
{
  "prisma": {
    "seed": "npx tsx prisma/seed.ts"
  }
}
```

- Simplest approach for demos and development
- Import enums from generated client for type safety
- Always disconnect Prisma in finally block
- **Never use in production** - would delete real data
