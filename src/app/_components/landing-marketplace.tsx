import Link from "next/link";

import { Poster, type PosterSlug } from "@/components/primitives";

/**
 * LandingMarketplacePreview — 3-column grid of festival cards with
 * procedural posters, dates, prices, and sold-out badges.
 *
 * Ported from web-landing.jsx LandingMarketplacePreview. Each card has
 * a Poster header + Bebas title + city + gold price (or purple "Resale"
 * for sold-out). Click-through goes to the app's event detail page.
 */

interface PreviewEvent {
  id: string;
  slug: string;
  poster: PosterSlug;
  title: string;
  dateShort: string;
  city: string;
  primaryXlm: number;
  soldOut?: boolean;
}

const EVENTS: PreviewEvent[] = [
  {
    id: "lolla",
    slug: "lollapalooza-brasil-2026",
    poster: "lolla",
    title: "Lollapalooza Brasil",
    dateShort: "03 NOV",
    city: "São Paulo",
    primaryXlm: 500,
  },
  {
    id: "primavera",
    slug: "primavera-sound-sp-2026",
    poster: "primavera",
    title: "Primavera Sound SP",
    dateShort: "28 NOV",
    city: "São Paulo",
    primaryXlm: 450,
    soldOut: true,
  },
  {
    id: "rir",
    slug: "rock-in-rio-2026",
    poster: "rir",
    title: "Rock in Rio",
    dateShort: "12 SEP",
    city: "Rio de Janeiro",
    primaryXlm: 700,
  },
  {
    id: "town",
    slug: "the-town-2026",
    poster: "town",
    title: "The Town",
    dateShort: "18 SEP",
    city: "São Paulo",
    primaryXlm: 580,
  },
  {
    id: "amanhecer",
    slug: "festival-amanhecer-2026",
    poster: "amanhecer",
    title: "Festival Amanhecer",
    dateShort: "14 DEC",
    city: "Minas Gerais",
    primaryXlm: 320,
  },
  {
    id: "ultra",
    slug: "ultra-brasil-2027",
    poster: "ultra",
    title: "Ultra Brasil",
    dateShort: "24 JAN",
    city: "São Paulo",
    primaryXlm: 480,
  },
];

export function LandingMarketplacePreview() {
  return (
    <section
      className="bg-night overflow-hidden"
      style={{ padding: "120px 48px" }}
    >
      <div className="mx-auto" style={{ maxWidth: 1240 }}>
        <p className="eyebrow mb-4" style={{ color: "var(--gold)" }}>
          Marketplace
        </p>
        <h2
          className="display"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            lineHeight: 0.95,
            margin: "0 0 60px",
          }}
        >
          Every festival.{" "}
          <span style={{ color: "var(--gold)" }}>Your name.</span>
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((e) => (
            <Link
              key={e.id}
              href="/#waitlist"
              className="relative cursor-pointer overflow-hidden transition-all hover:translate-y-[-4px] hover:border-gold"
              style={{
                borderRadius: 12,
                background: "var(--night-card)",
                border: "1px solid var(--line)",
              }}
            >
              <Poster slug={e.poster} id={e.id} height={220} />
              {e.soldOut && (
                <div
                  className="absolute top-3.5 right-3.5 font-bold uppercase backdrop-blur-md"
                  style={{
                    padding: "6px 12px",
                    borderRadius: 999,
                    background: "rgba(8,8,16,0.85)",
                    color: "var(--ink-dim)",
                    fontSize: 10,
                    letterSpacing: "0.12em",
                  }}
                >
                  Sold out
                </div>
              )}
              <div className="px-5 py-5">
                <p className="eyebrow mb-1.5" style={{ color: "var(--gold)" }}>
                  {e.dateShort}
                </p>
                <p
                  className="display"
                  style={{ fontSize: 26, color: "var(--ink)" }}
                >
                  {e.title}
                </p>
                <div className="mt-3.5 flex items-center justify-between">
                  <span
                    style={{ fontSize: 12, color: "var(--ink-muted)" }}
                  >
                    {e.city}
                  </span>
                  <span
                    className="display tabular-nums whitespace-nowrap"
                    style={{
                      fontSize: 20,
                      color: e.soldOut ? "var(--purple)" : "var(--gold)",
                    }}
                  >
                    {e.soldOut ? "Resale" : `${e.primaryXlm} XLM`}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
