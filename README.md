# Pass Explorer · website

The marketing site for `passexplorer.com` — landing, festivals, docs, press, blog, status, legal. All the public-facing content that lives in front of the marketplace itself.

Sister repos:

- [`webapp`](https://github.com/Pass-Explorer/webapp) — the marketplace app at `app.passexplorer.com` (fan + organizer + admin).
- [`stellar-smart-contracts`](https://github.com/Pass-Explorer/stellar-smart-contracts) — Soroban contracts.

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 + Turbopack |
| Runtime | React 19 |
| Styling | Tailwind v4, dark-only |
| i18n | Custom `LangProvider` context (EN / PT-BR) — see `src/lib/i18n/` |
| Deploy | Vercel (gru1 region) |

The site is **static-first** — every page in `app/` pre-renders. No server runtime, no DB, no backend. Waitlist signups go through Formspree (`mbdwzndo` endpoint).

---

## Quickstart

```bash
pnpm install
pnpm dev          # http://localhost:3002
```

No env vars required for local dev. The Entrar dropdown defaults to `https://app.passexplorer.com`; override locally with:

```bash
echo "NEXT_PUBLIC_APP_URL=http://localhost:3001" > .env.local
pnpm dev
```

---

## Routes

```
/                  → landing
/festivals         → "first festivals" placeholder grid (pre-launch)
/docs              → docs home (linked to from footer)
/faq               → FAQ accordion
/about             → company / mission
/press             → press kit + contact
/blog              → blog index
/careers           → open roles
/changelog         → product changelog
/terms · /privacy  → legal
/status            → ops status board
/maintenance       → planned downtime page
```

All routes are bilingual via the in-context `LangProvider` — toggle flips the active language without a navigation event.

---

## Project structure

```
src/
├── app/
│   ├── _components/        → LandingHeader, LandingHero, LandingPillars, etc.
│   ├── {route}/            → one folder per page (page.tsx + _components when needed)
│   ├── docs/_components/   → docs app shell
│   ├── globals.css         → mirrors tokens from repos/webapp/src/app/globals.css
│   ├── layout.tsx          → wraps every page in <LangProvider>
│   └── page.tsx            → landing
├── components/primitives/  → Wordmark, Icon, LangSelector, AmbientFestival
├── lib/i18n/
│   ├── context.tsx         → LangProvider + useLang + useT
│   ├── dicts/              → one .ts per route — typed dicts (EN/PT in same file)
│   └── types.ts            → Lang, Dict, isLang
```

### i18n model

Each page imports its own dict and reads via the `useT(dict)` hook:

```tsx
import { useT } from "@/lib/i18n";
import { faqDict } from "@/lib/i18n/dicts/faq";

export default function FaqPage() {
  const t = useT(faqDict);
  return <h1>{t("title")}</h1>;
}
```

Dicts are typed — adding a key in EN that's missing in PT (or vice-versa) is a compile error. The full set lives in `src/lib/i18n/dicts/`.

### Adding a page

1. Create `src/app/{route}/page.tsx` (and optional `_components/` next to it).
2. Add a dict at `src/lib/i18n/dicts/{route}.ts` with EN + PT objects.
3. Wire navigation from `LandingHeader` (main nav) or `PageShell` (footer).

---

## Deploy

The site is set up for auto-deploy on Vercel — push to `main` ships to `passexplorer.com`.

`vercel.json` ships sensible defaults:

- `gru1` region (São Paulo — closest to most BR fans + organizers).
- `www.passexplorer.com/*` → 301 redirect to `passexplorer.com/*`.
- Strict security headers (X-Frame-Options DENY, nosniff, strict referrer).

---

## Status

Pre-launch. Waitlist is live (Formspree). Mainnet ship date tracked in the umbrella's `docs/ROADMAP.md`.

The previous single-file static site lives at `index.legacy.html` for reference — kept until the Next rewrite finishes propagating.
