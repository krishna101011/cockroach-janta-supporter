# Cockroach Janta Supporter

An independent, volunteer-run initiative site providing food and drinking water to people at the protest. Built with [Astro](https://astro.build) and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:4321`.

## Scripts

- `npm run dev` — start the local dev server
- `npm run build` — build the production site into `dist/`
- `npm run preview` — preview the production build locally

## Before launch

Fill in the placeholder values in [src/data/config.ts](src/data/config.ts) (`PLACEHOLDERS`): UPI ID, QR code image, Telegram/WhatsApp/Instagram links, and contact email. Components render an honest "coming soon" state until these are set — never fill them with fake/example values.

## Project structure

```
src/
  components/   Reusable Astro components (Navbar, Hero, CTAButton, etc.)
  data/config.ts  Single source of truth for site copy, nav, and placeholders
  layouts/      BaseLayout.astro — shared page shell, meta tags, JSON-LD
  pages/        One file per route (index, mission, contribute, telegram, faq, contact, transparency)
  styles/       Tailwind entry + theme tokens
public/         Static assets served as-is (favicon, robots.txt, OG image)
```
