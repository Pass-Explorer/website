"use client";

import Image from "next/image";
import Link from "next/link";

import { landingDict } from "@/lib/i18n/dicts/landing";
import { useT } from "@/lib/i18n";

/**
 * LandingMarketplacePreview. 3-column grid of festival cards with
 * royalty-free Unsplash crowd/stage photography, dates, prices, and
 * sold-out badges.
 *
 * Photos come from images.unsplash.com (Unsplash License: free for
 * commercial use, no attribution required). Each card has a photo
 * header + Bebas title + city + gold price (or purple "Resale" for
 * sold-out). Click-through goes to the app's event detail page.
 */

interface PreviewEvent {
  id: string;
  slug: string;
  photo: string;
  alt: string;
  title: string;
  dateShort: string;
  city: string;
  primaryXlm: number;
  soldOut?: boolean;
}

// Stable Unsplash photo IDs. URLs are built as:
// https://images.unsplash.com/photo-{id}?w=800&h=520&fit=crop&q=80&auto=format
const EVENTS: PreviewEvent[] = [
  {
    id: "lolla",
    slug: "lollapalooza-brasil-2026",
    photo: "1470225620780-dba8ba36b745", // Anthony DELANOIX. festival crowd
    alt: "Festival crowd at night with stage lights",
    title: "Lollapalooza Brasil",
    dateShort: "03 NOV",
    city: "São Paulo",
    primaryXlm: 500,
  },
  {
    id: "primavera",
    slug: "primavera-sound-sp-2026",
    photo: "1501281668745-f7f57925c3b4", // Aranxa Esteve. crowd silhouettes
    alt: "Crowd silhouettes at indie concert",
    title: "Primavera Sound SP",
    dateShort: "28 NOV",
    city: "São Paulo",
    primaryXlm: 450,
    soldOut: true,
  },
  {
    id: "rir",
    slug: "rock-in-rio-2026",
    photo: "1459749411175-04bf5292ceea", // Anthony DELANOIX. stage lights from above
    alt: "Stage lights and crowd from above",
    title: "Rock in Rio",
    dateShort: "12 SEP",
    city: "Rio de Janeiro",
    primaryXlm: 700,
  },
  {
    id: "town",
    slug: "the-town-2026",
    photo: "1506157786151-b8491531f063", // Hanny Naibaho. colorful festival
    alt: "Festival stage with colorful lights",
    title: "The Town",
    dateShort: "18 SEP",
    city: "São Paulo",
    primaryXlm: 580,
  },
  {
    id: "amanhecer",
    slug: "festival-amanhecer-2026",
    photo: "1493225457124-a3eb161ffa5f", // Andre Benz. concert silhouette with stage lights
    alt: "Concert crowd silhouettes against warm stage lights",
    title: "Festival Amanhecer",
    dateShort: "14 DEC",
    city: "Minas Gerais",
    primaryXlm: 320,
  },
  {
    id: "ultra",
    slug: "ultra-brasil-2027",
    photo: "1429962714451-bb934ecdc4ec", // Vishnu R Nair. concert with stage
    alt: "Electronic music stage with lasers",
    title: "Ultra Brasil",
    dateShort: "24 JAN",
    city: "São Paulo",
    primaryXlm: 480,
  },
];

function unsplashUrl(id: string, w = 800, h = 520) {
  return `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`;
}

export function LandingMarketplacePreview() {
  const t = useT(landingDict);
  return (
    <section
      className="bg-night overflow-hidden"
      style={{ padding: "120px 48px" }}
    >
      <div className="mx-auto" style={{ maxWidth: 1240 }}>
        <p
          className="eyebrow mb-3 text-center"
          style={{ color: "var(--gold)" }}
        >
          {t("market_eyebrow")}
        </p>
        <h2
          className="display text-center"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            lineHeight: 1,
            letterSpacing: "0.04em",
            margin: 0,
          }}
        >
          {t("market_title")}
        </h2>
        <p
          className="mx-auto text-center font-light"
          style={{
            fontSize: "0.95rem",
            color: "var(--ink-dim)",
            maxWidth: 480,
            lineHeight: 1.7,
            marginTop: 12,
            marginBottom: 60,
          }}
        >
          {t("market_subtitle")}
        </p>
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
              <div
                className="relative overflow-hidden"
                style={{ width: "100%", height: 220 }}
              >
                <Image
                  src={unsplashUrl(e.photo)}
                  alt={e.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  unoptimized
                />
                {/* Soft bottom fade for visual rhythm with the card body */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0"
                  style={{
                    height: 60,
                    background:
                      "linear-gradient(to bottom, transparent, var(--night-card))",
                  }}
                />
              </div>
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
                  {t("market_sold_out")}
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
                    {e.soldOut ? t("market_resale") : `${e.primaryXlm} XLM`}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Honest pre-launch disclaimer */}
        <p
          className="mt-8 text-center"
          style={{
            fontSize: 11,
            color: "var(--ink-quiet)",
            letterSpacing: "0.06em",
            marginTop: 32,
          }}
        >
          {t("market_disclaimer")}
        </p>
      </div>
    </section>
  );
}
