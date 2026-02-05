# Prisma Client Output

Generate Prisma Client to `lib/generated/prisma/` instead of default `node_modules`.

**schema.prisma:**
```prisma
generator client {
  provider = "prisma-client"
  output   = "../lib/generated/prisma"
}
```

**Import from:**
```typescript
import { PrismaClient } from '../lib/generated/prisma/client'
```

- Keeps generated code visible and separate from dependencies
- Use relative imports (not @ alias) for generated code
