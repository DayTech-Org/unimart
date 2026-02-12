# Contributing to Unimart

Welcome to the Unimart monorepo! We are building a marketplace for students. This guide is designed to help you go from `git clone` to your first Pull Request without needing to ask for help.

## Table of Contents

- [Codebase Mapping](#codebase-mapping)
- [Environment Setup](#environment-setup)
- [The Turbo Pipeline](#the-turbo-pipeline)
- [Code Quality Standards](#code-quality-standards)
- [Marketplace Specifics](#marketplace-specifics)
- [Git Workflow](#git-workflow)

---

## Codebase Mapping

This project is a monorepo managed with **pnpm workspaces**.

### Apps (`apps/`)

- **`web`**: The main student-facing marketplace application (Next.js).
- **`admin`**: The administrative dashboard and vendors portal for managing the platform.
- **`api`**: The backend API services.

### Packages (`packages/`)

Shared libraries connected to the apps:

- **`ui`**: Shared React UI components and design system.
- **`db`**: Database configuration, schema, and client.
- **`auth`**: Authentication logic and utilities.
- **`types`**: Shared TypeScript definitions.
- **`common`**: Common utility functions and constants.

### Linking Local Packages

Since we use pnpm workspaces, local packages are linked automatically. You do **not** need `npm link`.

To use a package (e.g., `@unimart/ui`) in an app:

1. Add it to the app's `package.json`:
   ```json
   "dependencies": {
     "@unimart/ui": "workspace:*"
   }
   ```
2. Run `pnpm install`.
3. Import it directly: `import { Button } from '@unimart/ui';`

---

## Environment Setup

Every application requires its own environment configuration.

1. **Root Example**: Check `.env.example` at the root (if available) for a global reference.
2. **App-Specific**: Go to the specific app (e.g., `apps/web`) and copy its example file:
   ```bash
   cp .env.example .env
   ```
3. **Configure**: Fill in the required sensitive values (API keys, Database URLs).

**Note**: Never commit `.env` files to the repository.

---

## The Turbo Pipeline

We use **[Turbo](https://turbo.build/)** for efficient task orchestration and caching.

### Primary Commands

Run these from the root directory:

- **`pnpm dev`**: Starts development servers for all apps and packages in parallel.
- **`pnpm build`**: Builds the entire project. Turbo caches the output of previously built packages.
- **`pnpm lint`**: Runs Biome linting across the workspace.
- **`pnpm test`**: Runs unit tests.

### Running Specific Tasks

To run a command for a single app, use the convenience scripts in the root `package.json` or Turbo filters:

- **Web Dev**: `pnpm web:dev` (or `pnpm --filter @unimart/web dev`)
- **Admin Dev**: `pnpm admin:dev`
- **API Dev**: `pnpm api:dev`

---

## Code Quality Standards

We enforce strict standards to keep the codebase clean and maintainable.

### Linting & Formatting (Biome)

We use **[Biome.js](https://biomejs.dev/)** for both linting and formatting (replacing ESLint and Prettier).

- **Check code**: `pnpm lint`
- **Fix issues**: `pnpm format` (or `biome check --write .`)

### Dead Code Analysis (Knip)

We use **[Knip](https://knip.dev/)** to ensure we don't accumulate unused files or dependencies.

- **Run analysis**: `pnpm knip`
- **Process**: If Knip reports unused exports or files, remove them or add them to the `knip.jsonc` ignore list if they are false positives.

### TypeScript

**TypeScript is mandatory.**

- usage of `any` is strictly prohibited.
- All props and API responses must have explicit interfaces in `packages/types` or within the component file.

---

## Marketplace Specifics

### Database Migrations (Supabase)

We use **Supabase** for our database infrastructure. Schema changes are managed via code.

If you need to modify the database schema:

1. **Edit Schema**: Modify the Drizzle schema files in `packages/db/src/schema`.
2. **Generate Migration**:
   ```bash
   pnpm db:generate
   ```
   This creates a SQL file in the migrations folder.
3. **Push/Apply**:
   ```bash
   pnpm db:push
   ```
   _Note: Check with the team before pushing schema changes to shared development databases._

**Important**: Do not modify the database schema directly in the Supabase dashboard.

---

## Git Workflow

### Branch Naming

Use strictly descriptive branch names:

- **`feat/`**: New feature (e.g., `feat/cart-checkout`)
- **`fix/`**: Bug fix (e.g., `fix/mobile-nav-overlap`)
- **`chore/`**: Tooling, dependencies, or cleanup (e.g., `chore/upgrade-nextjs`)
- **`docs/`**: Documentation updates (e.g., `docs/update-readme`)

### Conventional Commits

We require [Conventional Commits](https://www.conventionalcommits.org/):

- `feat(auth): add google oauth provider`
- `fix(ui): correct padding on button component`

### Pull Request Process

1. **Self-Check**: Ensure your code passes quality checks locally.
   ```bash
   pnpm lint && pnpm build
   ```
2. **Open PR**: Create a Pull Request against `main`.
3. **Description**: Clearly explain the "Why" and "How" of your changes.
4. **Review**: Wait for at least one approval before merging.

---

Happy Coding!
