# @unimart/db

The database layer for the Unimart project, built with [Prisma](https://www.prisma.io/) and [PostgreSQL](https://www.postgresql.org/).

## Features

- **Prisma ORM**: Type-safe database access and migrations.
- **Shared Client**: A singleton Prisma client used across the monorepo.
- **PostgreSQL**: Robust, relational data storage.

## Getting Started

### 1. Environment Setup

Create a `.env` file in this directory and add your database connection string:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/unimart"
```

### 2. Install Dependencies

From the project root:

```bash
pnpm install
```

### 3. Synchronize Schema

To push the schema to your local database:

```bash
pnpm db:push
```

To generate the Prisma client:

```bash
pnpm db:generate
```

## Available Scripts

- `pnpm db:push`: Synchronizes the Prisma schema with the database without migrations (ideal for development).
- `pnpm db:generate`: Generates the Prisma Client.
- `pnpm db:studio`: Opens a GUI to explore and edit your data.

## Project Structure

- `prisma/schema.prisma`: The database schema definition.
- `src/`: Contains the Prisma client instance and any database utilities.
- `prisma.config.ts`: Configuration for Prisma.
