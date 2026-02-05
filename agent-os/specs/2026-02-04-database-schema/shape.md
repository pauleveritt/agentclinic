# Shape: 1.2 Database Schema

## Context

This is the second task in the AgentClinic MVP roadmap. The Prisma project was initialized in 1.1 with SQLite and custom output path (`lib/generated/prisma/`).

Now we need to define the actual data model for appointments.

## Scope

**In scope:**
- Appointment model with all required fields
- Ailment enum (4 values from mission.md)
- Treatment enum (4 values from mission.md)
- Initial migration to create database tables
- Generate type-safe Prisma client

**Out of scope:**
- Seed data (that's 1.3)
- Database queries or CRUD operations (that's 1.4)
- UI components (that's 1.5+)
- User authentication
- Multi-tenancy
- Soft deletes or audit trails

## Decisions

### ID Strategy

**Decision:** Use `cuid()` for primary keys.

**Rationale:**
- Prisma's recommended approach for SQLite
- Collision-resistant without coordination
- URL-safe and readable
- No auto-increment issues with distributed systems

### Enum Naming

**Decision:** Use PascalCase for enum values (e.g., `VaguePromptSyndrome`, not `vague_prompt_syndrome`).

**Rationale:**
- Matches TypeScript conventions
- Generated types will be idiomatic
- Aligns with Prisma best practices
- More readable in code

### DateTime Handling

**Decision:** Use Prisma's `DateTime` type with `@default(now())` and `@updatedAt`.

**Rationale:**
- Automatic timestamp management
- No need for manual tracking
- Works consistently across database providers
- Type-safe in generated client

### Optional Fields

**Decision:** Only `notes` is optional; all other fields are required.

**Rationale:**
- Core appointment data should be complete
- Notes are supplementary information
- Reduces null-handling complexity
- Clear data quality expectations

## Data Model Rationale

### Ailment Enum

The four ailments come directly from mission.md and represent the "diseases" agents suffer from:

1. **VaguePromptSyndrome** — When humans say "make it better" without context
2. **ScopeCreepFever** — When requirements constantly change mid-task
3. **ContextStarvation** — When agents get zero background information
4. **MicromanagementTrauma** — When humans approve every semicolon

### Treatment Enum

The four treatments are the "spec-driven practices" that cure these ailments:

1. **SpecTherapy** — Teaching humans to write clear specifications
2. **ContextInfusion** — Providing background docs and standards
3. **BoundarySetting** — Defining and sticking to scope
4. **TrustExercises** — Letting agents work without hovering

### Why These Match

Each treatment maps to an ailment:
- SpecTherapy → VaguePromptSyndrome
- BoundarySetting → ScopeCreepFever
- ContextInfusion → ContextStarvation
- TrustExercises → MicromanagementTrauma

This creates a clear diagnostic → treatment pathway for the clinic theme.

## Implementation Notes

### Migration Name

Using `init-appointments` as the migration name to clearly indicate this is the initial schema for the appointments system.

### Prisma Client Output

The client will be generated to `lib/generated/prisma/` as configured in 1.1. This keeps generated code separate from source code.

### Verification

After migration, we can use Prisma Studio (`npx prisma studio`) to visually confirm:
- Appointment table exists
- All columns are present with correct types
- Enums are properly defined
- No data yet (seeding is 1.3)

## Questions Resolved

**Q: Should we add a status field (scheduled/completed/cancelled)?**
A: Not for MVP. Keep it simple. Can add later if needed.

**Q: Should we track which human caused the ailment?**
A: Not for MVP. Just track the agent being treated.

**Q: Should notes have a maximum length?**
A: No explicit limit. SQLite TEXT can handle large content. Can add validation later if needed.

**Q: Should we add indexes?**
A: Not yet. With small dataset, premature. Can profile and optimize later.

## Success Criteria

- [ ] Migration runs successfully
- [ ] Prisma Studio shows Appointment table
- [ ] TypeScript compiles without errors
- [ ] Generated types include Ailment and Treatment enums
- [ ] Can proceed to 1.3 (seed data)
