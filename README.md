# Learn GraphQL: Bookshelf & Review Management

A full-stack application built to explore and master GraphQL connectivity using **Next.js** for the frontend and **Supabase** with a **Yoga/Pothos/Prisma** backend.

## 📚 Project Overview

The core objective is to create a web application where users can:
- **Manage a Bookshelf:** Add, edit, and organize books they've read or want to read.
- **Write Reviews:** Share thoughts and ratings on specific books.
- **GraphQL Integration:** Learn how to bridge the frontend and backend using a modern GraphQL stack.

## 🛠️ Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/) (App Router, TypeScript)
- **Backend (GraphQL Server):** [GraphQL Yoga](https://the-guild.dev/graphql/yoga-server) + [Pothos](https://pothos-graphql.dev/) (Code-first schema)
- **Database / Infrastructure:** [Supabase](https://supabase.com/) (PostgreSQL)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js installed (pnpm/npm/yarn)
- A Supabase project created with a PostgreSQL database URL.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/learn-graphql.git
    cd learn-graphql
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Environment Setup:**
    Create a `.env` file in the root and add your database connection string:
    ```env
    DATABASE_URL="your-supabase-postgres-url"
    ```

4.  **Database Migration:**
    Run Prisma migrations to set up your schema in Supabase:
    ```bash
    npx prisma migrate dev --name init
    ```

5.  **Run Development Server:**
    ```bash
    pnpm dev
    ```

Open [http://localhost:3000](http://localhost:3000) to see the application in action.

## 📁 Project Structure

- `app/`: Next.js App Router pages and API routes.
- `prisma/`: Prisma schema and migration files.
- `lib/`: Shared utilities and GraphQL schema definitions (Pothos).
- `components/`: Reusable React components.

## 📖 Learn More

Check out the `GEMINI.md` file for project-specific mandates and coding standards.
