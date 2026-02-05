# Shape: 1.3 Seed Data

## Context

From the roadmap, we need a seed script to populate the database with sample appointment data. This enables instant demo readiness without manual data entry.

## Decisions

### Seed Approach

**Chose:** Create idempotent seed script that clears and re-seeds data.

**Why:** Simplest approach for demos. Allows running seed multiple times without duplicate data issues.

**Trade-offs:**
- Pro: Easy to reset to known state
- Pro: No duplicate data concerns
- Con: Not suitable for production (would delete real data)
- Con: Doesn't demonstrate upsert patterns

**Alternatives considered:**
- Upsert by unique fields — more complex, not needed for demos
- Append-only seeding — creates duplicates on re-run
- Check-then-create — race conditions, unnecessary complexity

### Sample Data

**Chose:** Four AI agents with humorous ailments from mission.md.

**Rationale:**
- Demonstrates the satire/humor aspect of the product
- Each agent has a different ailment/treatment pair
- Near-future dates (Feb 10-11, 2026) keep demo feeling fresh
- Notes field adds personality and context

**Data:**
1. Claude-3: VaguePromptSyndrome → SpecTherapy
2. GPT-4: ScopeCreepFever → BoundarySetting
3. Gemini: ContextStarvation → ContextInfusion
4. Copilot: MicromanagementTrauma → TrustExercises

### TypeScript Execution

**Chose:** Use `tsx` for running TypeScript seed file.

**Why:**
- Lightweight (vs ts-node)
- Fast startup
- No compilation step needed
- Modern, actively maintained

**Trade-offs:**
- Pro: Simple, fast
- Pro: No build step
- Con: Another dependency (but dev-only)

### Prisma Configuration

**Chose:** Use `package.json` prisma.seed config pointing to tsx.

**Why:** Standard Prisma approach, works with `npx prisma db seed`.

**Format:**
```json
{
  "prisma": {
    "seed": "npx tsx prisma/seed.ts"
  }
}
```

## Scope Boundaries

### In Scope
- Create seed script with 4 sample appointments
- Configure package.json for prisma seed
- Install tsx dependency
- Clear existing data before seeding (idempotent)

### Out of Scope
- Production-safe seeding (upserts, migrations)
- Multiple seed scenarios
- Seed data validation
- CLI flags for different seed sets
- Factory/faker patterns for randomized data

## Implementation Notes

### File Structure
```
prisma/seed.ts                              # Seed script
agent-os/specs/2026-02-04-seed-data/        # Spec docs
  ├── plan.md
  └── shape.md
```

### Import Path
Using `../lib/generated/prisma/client` to import Prisma Client and enums, as configured in prisma/schema.prisma.

### Error Handling
Simple error handling in seed script:
- Log errors
- Exit with code 1 on failure
- Always disconnect from Prisma

### Verification
After implementation:
1. Run seed: `npx prisma db seed`
2. Open Studio: `npx prisma studio`
3. Verify 4 appointments with correct data
4. Re-run seed to test idempotency

## Open Questions

None — scope is well-defined from roadmap.
