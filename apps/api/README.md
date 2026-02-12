# Unimart - Core API

The centralized backend service handling heavy-duty logic, image processing, and external integrations.

## Tech Stack
- **Runtime:** Node.js / Bun
- **Framework:** Hono or Express
- **Database:** Supabase (via `@unimart/db`)
- **Validation:** `@unimart/validators` (Zod)

## Responsibilities
- **Image Uploads:** Processing student ID photos and product images.
- **Webhooks:** Handling Stripe payments or Supabase Auth triggers.
- **Search:** Indexing products for faster search results.

## Development
```bash
pnpm dev --filter api