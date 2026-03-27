# CLAUDE.md

## Project

Sew Zarah — a single-page static marketing site for a clothing repair and alterations service. Built with Next.js (App Router), React, TypeScript, and Tailwind CSS v4. Deployed as a static export.

## Stack

- **Next.js 16.1.6** (App Router, `output: "export"`)
- **React 19.2.3** with React Compiler enabled
- **TypeScript 5.x** — strict mode
- **Tailwind CSS v4** — configured via PostCSS (`@tailwindcss/postcss`), no `tailwind.config.ts`
- **Netlify Forms** — contact form uses `data-netlify="true"` with a honeypot field; no separate API needed

## Commands

Use `npm` (there is a `package-lock.json`).

```
npm run dev        # start dev server
npm run build      # production build
npm run lint       # ESLint (zero warnings allowed)
```

The pre-commit hook runs `lint-staged`, which auto-fixes ESLint issues and formats with Prettier on staged `.ts`/`.tsx` files.

## Project structure

```
app/
  layout.tsx          root layout, metadata, Inter font, Header
  page.tsx            single page — composes all sections via Section wrapper
  globals.css         Tailwind import + jade color palette (@theme)
components/
  Header.tsx          sticky nav, scroll-spy with IntersectionObserver
  Footer.tsx          footer links and branding
  Section.tsx         reusable section wrapper (id, spacing, className)
  HeroSection.tsx     "Who we are" section
  ProcessOverview.tsx "How it works" section
  ExpectationSetting.tsx  "Pricing" section
  ContactAndPhotoSubmission.tsx  "Get in touch" section + Netlify form
  ContactSuccessBanner.tsx  shown after successful form submission (?sent=1)
  illustrations/      SVG illustration components
content.ts            all user-facing copy — edit text here, not in components
public/               static assets
```

## Editing copy

All user-facing text is centralised in **`content.ts`** at the project root, exported as `hero`, `process`, `pricing`, and `contact`. Edit copy there; the components just reference the values.

## Design system

The jade colour palette is defined in `app/globals.css` under `@theme`:

| Token        | Hex       |
|--------------|-----------|
| `jade-950`   | `#062822` |
| `jade-900`   | `#0c3f2f` |
| `jade-800`   | `#0f553b` |
| `jade-700`   | `#116b48` |
| `jade-600`   | `#14865a` |
| `jade-500`   | `#1ea971` |

Sections use a descending shade: 900 → 800 → 700 → 600 → 500 (footer/body).

Styling is Tailwind-only. No CSS modules. Glass-morphism effects use `bg-white/[opacity]` and `ring-white/[opacity]` utilities.

## Path alias

`@/` maps to the project root (configured in `tsconfig.json`). Use it for all internal imports.

## Key constraints

- **No unnecessary dependencies** — keep the setup minimal.
- **ESLint is zero-tolerance** (`--max-warnings=0`). All lint issues must be fixed before committing.
- **Static export only** — no server-side features (API routes, server actions, etc.).
- **Tailwind only** — no CSS modules unless clearly necessary.
- **Avoid complex abstractions** — small, clear components; straightforward TypeScript.
