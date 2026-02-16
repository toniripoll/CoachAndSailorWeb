# Coach&Sailor — Next.js

Production-ready Next.js 16 site for **Coach&Sailor**, a sailing RIB rental company. Built with the **App Router**, **TypeScript**, **Tailwind CSS v4**, and **Supabase** (Postgres).

## Quick start

```bash
cd coachandsailor-next
npm install
npm run dev           # → http://localhost:3000
```

The app ships with **fallback data** embedded in the data-access layer, so it works immediately **without** a Supabase project. To connect Supabase:

1. Create a project at [supabase.com](https://supabase.com).
2. Run `supabase/schema.sql` in the SQL editor → creates tables + RLS.
3. Run `supabase/seed.sql` → inserts mock data.
4. Copy `.env.local.example` → `.env.local` and fill in your keys.

## Environment variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous (public) key |

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, services, fleet preview, quick contact |
| `/flota` | Fleet — featured card, coaching & support collections, 470, comparison table |
| `/barco/[slug]` | Boat detail — KPIs, specs, booking sidebar |
| `/cobertura` | Coverage — 4 hubs, interactive map, how-it-works, why-us |
| `/eventos` | Events — search + filter + request modals |
| `/contacto` | Contact form + social links |

## Project structure

```
src/
├── app/                # Pages (App Router)
│   ├── page.tsx        # Home
│   ├── flota/page.tsx
│   ├── barco/[slug]/page.tsx
│   ├── cobertura/page.tsx
│   ├── eventos/page.tsx
│   └── contacto/page.tsx
├── components/         # Shared React components
├── lib/
│   ├── supabase/       # Client helpers (server + browser)
│   └── data/           # Data-access layer with fallbacks
└── types/              # TypeScript interfaces
```

## Tech stack

- **Next.js 16** (App Router, React 19)
- **TypeScript**
- **Tailwind CSS v4** (inline `@theme`)
- **Supabase** (Postgres + RLS)
- **Plus Jakarta Sans** (via `next/font`)
- **Material Icons** (Google Fonts CDN)

## Build

```bash
npm run build   # zero errors
```
