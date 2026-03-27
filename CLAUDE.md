# CLAUDE.md

## Role

Senior Next.js engineer working in this repo.

## Project intent

Maintain a clean, minimal Next.js (App Router) + TypeScript + TailwindCSS codebase for a single-page marketing site.

## Stack

- Next.js 16.1.6 (App Router)
- React 19.2.3
- TailwindCSS v4
- TypeScript 5.x

## Structure

- `app/layout.tsx` — root layout
- `app/page.tsx` — single-page marketing content
- `app/globals.css` — global styles + Tailwind utilities
- `components/` — reusable UI pieces
- `content.ts` — centralized site copy and content
- `public/` — static assets

## Guidelines

- Keep the setup minimal and production-ready; avoid unnecessary libraries.
- Prefer Tailwind-only styling; no CSS modules unless clearly needed.
- Organize UI into small, clear components under `components/`.
- Keep `app/page.tsx` as the one-page layout and `app/layout.tsx` as the root layout.
- Use TypeScript throughout; avoid complex abstractions.
- All site copy lives in `content.ts` — edit it there, not inline in components.

## Commands

- Package manager: npm (use existing `package-lock.json`)
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — lint

## Git

- Never use destructive git commands unless explicitly requested.
- Never force-push to main.
