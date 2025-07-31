# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Architecture

This is a WebSocket practice project using a monorepo structure with pnpm workspaces:

- **apps/server/**: WebSocket server built with Node.js and the `ws` library
  - Entry point: `src/server.ts`
  - Simple echo server that runs on port 8080
  - Uses TypeScript with `tsx` for development

- **apps/client/**: Next.js 15 client application with React 19
  - Uses Tailwind CSS v4 for styling
  - Currently has a basic landing page
  - Will connect to the WebSocket server for real-time communication

## Development Commands

**Root level (run all apps in parallel):**
```bash
pnpm dev        # Start both client and server in development mode
pnpm build      # Build all applications
pnpm lint       # Run linting across all packages
```

**Server development:**
```bash
cd apps/server
pnpm dev        # Start server with tsx (hot reload)
pnpm build      # Compile TypeScript to dist/
pnpm start      # Run compiled server from dist/
```

**Client development:**
```bash
cd apps/client
pnpm dev        # Start Next.js dev server with Turbopack
pnpm build      # Build Next.js application
pnpm start      # Start production server
pnpm lint       # Run Next.js linter
```

## Key Technical Details

- Package manager: pnpm with workspaces
- TypeScript throughout both client and server
- WebSocket server listens on ws://localhost:8080
- Client uses Next.js 15 with App Router
- No tests currently configured (server package.json shows placeholder test script)