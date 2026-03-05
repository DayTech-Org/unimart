# @unimart/auth

Authentication layer for the Unimart project, built with [Auth.js](https://authjs.dev/) (NextAuth.js v5) and integrated with the Prisma adapter.

## Features

- **Google Provider**: Secure OAuth login via Google.
- **Credentials Provider**: Classic email/password authentication using `bcryptjs` for secure hashing.
- **Prisma Adapter**: Automatic session and account management in the database.
- **Type-Safe Middleware**: In-place middleware authorization logic for page protection.

## Setup Requirements

### 1. Environment Variables

To use this package, you'll need the following variables in your `.env` file (usually at the root or within the consuming app):

```env
# Generate a secret: npx auth secret
AUTH_SECRET="your-auth-secret"

# From Google Cloud Console
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

### 2. Google OAuth Configuration

In your [Google Cloud Console](https://console.cloud.google.com/):

- **Authorized Redirect URI**: `http://localhost:3000/api/auth/callback/google`

## Usage Guide

### Client-side & Server Component usage

In your Next.js application:

```typescript
import { auth, signIn, signOut } from "@unimart/auth";

// Server Side: Getting session data
const session = await auth();

// Triggering sign-in/out
await signIn("google");
await signOut();
```

### Middleware Integration

This package provides a `NextAuthConfig` shared object which you can use in your middleware:

```typescript
import { authConfig } from "@unimart/auth";
import NextAuth from "next-auth";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
```

## Internal Architecture

- `src/auth.config.ts`: Defines providers and basic configuration.
- `src/index.ts`: Exports main `auth` object and helper methods.
- `src/middleware.ts`: (If present) Specific middleware-compatible configuration.
