# Vitest Setup

Configure Vitest for React component testing with explicit imports.

**vitest.config.ts:**
```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, './') },
  },
})
```

**vitest.setup.ts:**
```typescript
import '@testing-library/jest-dom'
```

**In test files, explicitly import:**
```typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
```

- Use jsdom environment for React/DOM testing
- No globals — explicit imports reduce magic
- Setup file loads jest-dom matchers for all tests
