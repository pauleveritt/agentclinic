# ID Strategy

Use `cuid()` for primary keys.

```prisma
model Appointment {
  id String @id @default(cuid())
  // other fields
}
```

- Collision-resistant without database coordination
- URL-safe and more readable than UUIDs
- No auto-increment issues with distributed systems
- Prisma's recommended approach for SQLite
