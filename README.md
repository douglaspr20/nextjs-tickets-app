# Ticket Management App

A simple ticket management system built with **Next.js (App Router)**, **Prisma + SQLite**, and **shadcn/ui** for the frontend. It allows creating, viewing, and updating tickets with a clean, modern interface.

## How to run the app locally

- **Clone the repository**
  ```bash
  git clone https://github.com/douglaspr20/nextjs-tickets-app
  cd nextjs-tickets-app

  ```
- **Install dependencies**
  ```bash
  npm install
  ```
- **- Create env file in the root of the project**
  ```bash
  DATABASE_URL="file:./dev.db"
  NEXT_PUBLIC_BASE_URL="http://yoururl"
  ```
- **- Set up the database Run Prisma migrations to generate your local SQLite database:**
  ```bash
    npx prisma migrate dev --name init
  ```
  - **- Gentera prisma client:**
  ```bash
    npx prisma generate
  ```
- **- - **Seed the database (optional):\*\*
  ```bash
    npx prisma db seed
  ```
- **- - **Start the development server\*\*
  ```bash
    npm run dev
  ```

## What was completed

- **Backend**
- POST /Tickets
- GET /Tickets
- GET tickets/:id
- PATCH /tickets/:id
- **Frontend**
- List tickets Screen
- Creating ticket Modal
- Ticket Screen
- Updating Ticket Status

## What was skipped

Nothing

## If I had another 2 hours, I would…

Probably i would added some animations, i would improve the responsive design, added a dark mode and surely implement optmisticx ui updates, also maybe is goo idea add some filters to the tickets and add de edit and delete funcionality.

## Brief note on agentic tools

    ## What you delegated to tools

- Create ui components
- Create api interface

      ## What you delegated to tools

- database setup
- prisma config
- backend validations
