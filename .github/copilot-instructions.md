# Copilot Instructions for nextjs-tickets-app

## Project Overview

- **Framework:** Next.js (App Router)
- **Database:** Prisma ORM with SQLite (see `prisma/schema.prisma`)
- **UI:** shadcn/ui components (see `components/ui/`)
- **Purpose:** Ticket management (create, view, update tickets)

## Key Architecture & Patterns

- **API Routes:**
  - Located in `app/api/tickets/` and `app/api/tickets/[id]/`.
  - Use RESTful conventions: POST, GET, PATCH for tickets.
- **Frontend Pages:**
  - Main UI in `app/` and `app/tickets/[id]/`.
  - Forms and dialogs in `components/` (e.g., `CreateTicketForm.tsx`, `ErrorDialog.tsx`).
- **Prisma Integration:**
  - DB access via `lib/prisma.ts`.
  - Migrations and schema in `prisma/`.
- **UI Conventions:**
  - Use shadcn/ui primitives for all new UI (see `components/ui/`).
  - Status badges and buttons have dedicated components (`StatusBadge.tsx`, `UpdatedTicketstatusbutton.tsx`).

## Developer Workflows

- **Install:** `npm install`
- **DB Migrate:** `npx prisma migrate dev --name <desc>`
- **DB Seed:** `npx prisma db seed`
- **Dev Server:** `npm run dev`
- **.env:** Requires `DATABASE_URL` and `NEXT_PUBLIC_BASE_URL`.

## Project-Specific Conventions

- **API:** Always use Next.js App Router conventions for API endpoints.
- **State:** Prefer server actions and API routes over client state for ticket updates.
- **UI:** Use modal dialogs for create/update flows.
- **Error Handling:** Use `ErrorDialog.tsx` for user-facing errors.
- **Validation:** Centralized in `lib/validations.ts`.

## Integration Points

- **Prisma:** All DB access via `lib/prisma.ts`.
- **shadcn/ui:** All UI components should extend or use primitives from `components/ui/`.

## Examples

- Creating a ticket: see `CreateTicketForm.tsx` and `app/api/tickets/route.ts`.
- Updating ticket status: see `UpdatedTicketstatusbutton.tsx` and `app/api/tickets/[id]/route.ts`.
- Error handling: see `ErrorDialog.tsx`.

## References

- [README.md](../README.md) for setup and workflow details.
- [prisma/schema.prisma](../prisma/schema.prisma) for DB structure.
- [components/ui/](../components/ui/) for UI patterns.

---

For any unclear or missing conventions, review the referenced files or ask for clarification.
