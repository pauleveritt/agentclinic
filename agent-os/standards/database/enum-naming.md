# Enum Naming

Use PascalCase for Prisma enum values.

**Good:**
```prisma
enum Ailment {
  VaguePromptSyndrome
  ScopeCreepFever
  ContextStarvation
}
```

**Bad:**
```prisma
enum Ailment {
  vague_prompt_syndrome
  scope_creep_fever
  context_starvation
}
```

- Matches TypeScript enum conventions
- Generated types are idiomatic TypeScript
- More readable in application code
