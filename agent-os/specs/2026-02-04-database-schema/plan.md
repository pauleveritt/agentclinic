# Plan: 1.2 Database Schema

## Summary

Define the Prisma data model for AgentClinic appointments, including the Appointment model with Ailment and Treatment enums.

## Scope

From the roadmap (1.2 Database Schema):
- Prisma already initialized with SQLite (done in 1.1)
- Create Appointment model with all fields
- Create Ailment enum (4 values from mission.md)
- Create Treatment enum (4 values from mission.md)
- Generate Prisma client
- Run initial migration

## Files to Create

```
agent-os/specs/2026-02-04-database-schema/
├── plan.md           # This plan
└── shape.md          # Shaping notes and decisions
```

## Files to Modify

```
prisma/schema.prisma  # Add Appointment model and enums
```

## Data Model

### Ailment Enum

From mission.md, the ailments (caused by humans):
- `VaguePromptSyndrome` — Agent confusion from "make it better" without context
- `ScopeCreepFever` — Exhaustion from constantly changing requirements
- `ContextStarvation` — Malnutrition from zero background information
- `MicromanagementTrauma` — Paralysis from humans who approve every semicolon

### Treatment Enum

From mission.md, the treatments (spec-driven practices):
- `SpecTherapy` — Teaching humans to write clear specifications
- `ContextInfusion` — IV drip of background docs and standards
- `BoundarySetting` — Helping humans define and stick to scope
- `TrustExercises` — Humans learn to let agents work without hovering

### Appointment Model

| Field | Type | Notes |
|-------|------|-------|
| `id` | String (cuid) | Primary key |
| `agentName` | String | Required |
| `dateTime` | DateTime | Required |
| `ailment` | Ailment | Enum, required |
| `treatment` | Treatment | Enum, required |
| `notes` | String? | Optional |
| `createdAt` | DateTime | Auto, default now |
| `updatedAt` | DateTime | Auto, updated on change |

## Tasks

### Task 1: Save Spec Documentation

Create `agent-os/specs/2026-02-04-database-schema/` with:
- `plan.md` — This plan
- `shape.md` — Shaping notes (scope, decisions, context)

### Task 2: Define Prisma Schema

Update `prisma/schema.prisma` to add:

```prisma
enum Ailment {
  VaguePromptSyndrome
  ScopeCreepFever
  ContextStarvation
  MicromanagementTrauma
}

enum Treatment {
  SpecTherapy
  ContextInfusion
  BoundarySetting
  TrustExercises
}

model Appointment {
  id        String    @id @default(cuid())
  agentName String
  dateTime  DateTime
  ailment   Ailment
  treatment Treatment
  notes     String?
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
}
```

### Task 3: Run Migration

```bash
npx prisma migrate dev --name init-appointments
```

This creates the SQLite database and applies the schema.

### Task 4: Generate Prisma Client

```bash
npx prisma generate
```

This generates the type-safe client in `lib/generated/prisma/`.

### Task 5: Verify Setup

- Run `npx prisma studio` to visually inspect the database
- Confirm Appointment table exists with correct columns
- Confirm enums are properly defined

## Verification

After implementation:

1. **Migration applied:**
   ```bash
   npx prisma migrate status
   # Should show migration applied
   ```

2. **Prisma Studio works:**
   ```bash
   npx prisma studio
   # Opens browser, shows Appointment table
   ```

3. **Types generated:**
   ```bash
   ls lib/generated/prisma/
   # Should contain generated client files
   ```

4. **TypeScript compiles:**
   ```bash
   npx tsc --noEmit
   # No errors
   ```

## Notes

- Using `cuid()` for IDs (Prisma's recommended approach for SQLite)
- Enum values use PascalCase to match TypeScript conventions
- The generated client outputs to `lib/generated/prisma/` (configured in 1.1)
- No seed data in this task — that's 1.3
