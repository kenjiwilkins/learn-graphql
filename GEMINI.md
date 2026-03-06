# GEMINI.md

This file defines project-specific mandates and standards for the `learn-graphql` repository. These instructions take precedence over general defaults.

## Project Context
A full-stack application designed to learn GraphQL connectivity between a Next.js frontend and a Supabase-backed GraphQL backend.

- **Domain:** Bookshelf Management & User Reviews.
- **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS.
- **Backend:** GraphQL Yoga, Pothos (Code-first GraphQL), Prisma ORM.
- **Database:** Supabase (PostgreSQL).

## Technical Mandates

### GraphQL Implementation
- **Schema:** Use Pothos for a code-first schema approach.
- **Server:** GraphQL Yoga integrated within Next.js Route Handlers (e.g., `app/api/graphql/route.ts`).
- **ORM:** Use Prisma for database interactions. Ensure `schema.prisma` is kept up-to-date with Supabase migrations if applicable.

### Database & Supabase
- **Environment:** Use `.env` or `.env.local` for `DATABASE_URL` and Supabase credentials. **NEVER** commit these secrets.
- **Auth:** Consider using Supabase Auth for user management.

### Coding Standards
- **React:** Follow Next.js best practices for Server and Client Components.
- **Types:** Leverage TypeScript strictly. Ensure GraphQL types and Prisma types are well-integrated.
- **Validation:** Use Zod for input validation where necessary.

## Workflow Mandates
- **Research first:** Before adding new GraphQL queries or mutations, verify the Prisma schema and Pothos types.
- **Testing:** Add tests for GraphQL resolvers and critical frontend components.
- **Documentation:** Keep the README and codebase comments updated with new features or architectural changes.
