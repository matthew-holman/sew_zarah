# Sew Zarah

Static marketing site for Sew Zarah — a clothing repair and alterations service. Visitors can read about the service, understand the pricing process, and submit photos for a repair assessment.

Built with Next.js (App Router), React, TypeScript, and Tailwind CSS v4. Deployed as a static export via Netlify, with contact form handling through Netlify Forms.

## Tech stack

- **Next.js 16** — App Router, static export (`output: "export"`)
- **React 19** — React Compiler enabled
- **TypeScript 5** — strict mode
- **Tailwind CSS v4** — CSS-first config via `@theme` in `globals.css`
- **Netlify Forms** — zero-backend form submission with spam protection

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available commands

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Production build |
| `npm run lint` | ESLint (zero warnings enforced) |

## Editing copy

All user-facing text lives in **`content.ts`** at the project root. Edit strings there — no need to touch component files.

## Project structure

```
app/
  layout.tsx                      root layout, metadata, fonts
  page.tsx                        single-page composition
  globals.css                     Tailwind import + jade colour palette
components/
  Header.tsx                      sticky nav with scroll-spy
  Footer.tsx
  Section.tsx                     reusable section wrapper
  HeroSection.tsx                 "Who we are"
  ProcessOverview.tsx             "How it works"
  ExpectationSetting.tsx          "Pricing"
  ContactAndPhotoSubmission.tsx   contact form
  ContactSuccessBanner.tsx        post-submission confirmation
  illustrations/                  inline SVG components
content.ts                        all site copy
public/                           static assets
```

## Deployment

The site deploys to Netlify as a static export. The contact form uses `data-netlify="true"` — no API routes or server functions required. Netlify detects and handles the form automatically on deploy.

# sew_zarah

[![Netlify Status](https://api.netlify.com/api/v1/badges/0909f107-c361-4252-a25a-2dc378704810/deploy-status)](https://app.netlify.com/projects/sewzarah/deploys)
