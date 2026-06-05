# DevStudio — Company Profile Website

A dark, editorial company profile site for a freelance development studio. Built with Next.js, TypeScript, and Tailwind CSS, styled from your `design.md` reference (midnight observatory aesthetic with electric cobalt accents).

## Quick start

```bash
cd "C:\Users\Dark Energy\Projects\devstudio-website"
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customize everything in one file

Edit [`lib/site-config.ts`](lib/site-config.ts) to update:

- **Company name** — change `name` from `DevStudio` to your real brand
- **Tagline & description** — used in hero, footer, and SEO metadata
- **Email** — contact form and mailto links
- **Social links** — TikTok and Instagram URLs for your marketing pages
- **Services, portfolio, team, testimonials** — swap placeholder content with real data

No need to hunt through components — all copy lives in `site-config.ts`.

## Dark / light mode

A **Light / Dark** toggle sits in the header (top right). The choice is saved in the browser and defaults to dark mode. Theme tokens live in `app/globals.css` under `:root` (dark) and `.light`.

## Design system

Visual tokens from `design.md` are in [`app/globals.css`](app/globals.css):

| Token | Value | Usage |
|-------|-------|-------|
| Abyss Black | `#070708` | Page background |
| Pure White | `#ffffff` | Headlines, borders |
| Steel Gray | `#8f8f93` | Body copy |
| Electric Cobalt | `#1954ec` | Accent (one word per hero, circle stats) |

**Fonts:** Cormorant Garamond (serif headlines, weight 300) + Inter (body/UI) as substitutes for Darius and Graphik.

## Project structure

```
app/
  layout.tsx      # Fonts, SEO metadata, Open Graph
  page.tsx        # Landing page composing all sections
  globals.css     # Design tokens
components/
  Header.tsx      # Corner navigation
  Hero.tsx        # Full-viewport opening
  Services.tsx    # Web, Flutter, UI/UX, Support
  HowWeWork.tsx   # Consult → Design → Build → Launch
  Portfolio.tsx   # Placeholder project cards
  Team.tsx        # Team members + stats
  Testimonials.tsx
  Contact.tsx     # Mailto contact form
  Footer.tsx
lib/
  site-config.ts  # ← Edit this first
```

## Contact form

The form opens the user's email client via `mailto:` — no backend required on day one.

To use a form service later (e.g. Formspree):

1. Add your endpoint URL to `site-config.ts`
2. Update the `handleSubmit` function in `components/Contact.tsx` to POST to that URL

## Deploy to Vercel

1. Push the project to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Next.js — click Deploy
4. Update `siteConfig.url` in `lib/site-config.ts` to your live domain

## Build for production

```bash
npm run build
npm start
```

## Design reference

Your original design spec is at:

`C:\Users\Dark Energy\Downloads\design.md`

Copy it into the project root if you want it versioned alongside the code.
