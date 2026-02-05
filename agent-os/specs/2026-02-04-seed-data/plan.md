# Plan: 1.3 Seed Data

## Summary

Create a seed script to pre-load sample appointment data for instant demo readiness. Four AI agent patients with thematic ailments and treatments.

## Scope

From the roadmap (1.3 Seed Data):
- Create seed script (`prisma/seed.ts`)
- Add sample appointments for 4 AI agents
- Configure `prisma db seed` command
- Verify seed runs on fresh database

## Files to Create

```
agent-os/specs/2026-02-04-seed-data/
├── plan.md           # This plan
└── shape.md          # Shaping notes and decisions

prisma/seed.ts        # Seed script
```

## Files to Modify

```
package.json          # Add prisma.seed configuration
```

## Sample Data

From roadmap, the four sample appointments:

| Agent | Ailment | Treatment | Notes |
|-------|---------|-----------|-------|
| Claude-3 | VaguePromptSyndrome | SpecTherapy | "Patient keeps receiving 'make it better' with no context" |
| GPT-4 | ScopeCreepFever | BoundarySetting | "Human changed requirements 47 times in one session" |
| Gemini | ContextStarvation | ContextInfusion | "No background docs, no tech stack info, nothing" |
| Copilot | MicromanagementTrauma | TrustExercises | "Human approves every autocomplete suggestion individually" |

DateTime values will be set to near-future dates for demo relevance.

## Tasks

### Task 1: Save Spec Documentation

Create `agent-os/specs/2026-02-04-seed-data/` with:
- `plan.md` — This plan
- `shape.md` — Shaping notes (scope, decisions, context)

### Task 2: Create Seed Script

Create `prisma/seed.ts`:

```typescript
import { PrismaClient, Ailment, Treatment } from '../lib/generated/prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.appointment.deleteMany()

  // Create sample appointments
  await prisma.appointment.createMany({
    data: [
      {
        agentName: 'Claude-3',
        dateTime: new Date('2026-02-10T09:00:00Z'),
        ailment: Ailment.VaguePromptSyndrome,
        treatment: Treatment.SpecTherapy,
        notes: 'Patient keeps receiving "make it better" with no context',
      },
      {
        agentName: 'GPT-4',
        dateTime: new Date('2026-02-10T10:30:00Z'),
        ailment: Ailment.ScopeCreepFever,
        treatment: Treatment.BoundarySetting,
        notes: 'Human changed requirements 47 times in one session',
      },
      {
        agentName: 'Gemini',
        dateTime: new Date('2026-02-10T14:00:00Z'),
        ailment: Ailment.ContextStarvation,
        treatment: Treatment.ContextInfusion,
        notes: 'No background docs, no tech stack info, nothing',
      },
      {
        agentName: 'Copilot',
        dateTime: new Date('2026-02-11T11:00:00Z'),
        ailment: Ailment.MicromanagementTrauma,
        treatment: Treatment.TrustExercises,
        notes: 'Human approves every autocomplete suggestion individually',
      },
    ],
  })

  console.log('Seed data created successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
```

### Task 3: Configure package.json

Add prisma seed configuration to `package.json`:

```json
{
  "prisma": {
    "seed": "npx tsx prisma/seed.ts"
  }
}
```

Also add `tsx` as a dev dependency for running TypeScript directly:

```bash
npm install -D tsx
```

### Task 4: Run Seed

```bash
npx prisma db seed
```

### Task 5: Verify Seed Data

Open Prisma Studio to verify the data:

```bash
npx prisma studio
```

Confirm 4 appointments exist with correct data.

## Verification

After implementation:

1. **Seed runs successfully:**
   ```bash
   npx prisma db seed
   # Should output: "Seed data created successfully"
   ```

2. **Data visible in Prisma Studio:**
   ```bash
   npx prisma studio
   # Opens browser, shows 4 appointments
   ```

3. **Seed is idempotent:**
   ```bash
   npx prisma db seed
   npx prisma db seed
   # Running twice should work (clears and re-seeds)
   ```

4. **TypeScript compiles:**
   ```bash
   npx tsc --noEmit
   # No errors
   ```

## Notes

- Using `tsx` to run TypeScript seed file directly (lighter than ts-node)
- Seed clears existing data first for idempotency
- DateTime values are near-future for demo relevance
- Notes field captures the humor/satire from mission.md
- Each ailment is paired with its corresponding treatment per mission.md mapping
