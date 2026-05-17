import type { Metadata } from "next";

import { PageShell } from "../_components/page-shell";

export const metadata: Metadata = {
  title: "Changelog",
  description: "What's new in Pass Explorer.",
};

type ItemType = "feat" | "fix" | "chore";

interface Entry {
  v: string;
  d: string;
  tag: string;
  items: { type: ItemType; t: string }[];
}

const ENTRIES: Entry[] = [
  {
    v: "v0.4.0",
    d: "17 May 2026",
    tag: "WEB LAUNCH",
    items: [
      { type: "feat", t: "Web version of Pass Explorer (Landing + Admin + Organizer)" },
      { type: "feat", t: "Admin persona with global dashboard and platform fee governance" },
      { type: "feat", t: "Gate persona with QR scanner at the festival gate" },
    ],
  },
  {
    v: "v0.3.0",
    d: "16 May 2026",
    tag: "PROTOTYPE",
    items: [
      { type: "feat", t: "Organizer Event Detail with Sales/Resales/Holders/Check-in sub-tabs" },
      { type: "feat", t: "Resale flow with animated atomic split" },
      { type: "feat", t: "Fullscreen QR reveal with hologram + shimmer" },
      { type: "fix",  t: "R$NaN in cap when capMult was undefined" },
    ],
  },
  {
    v: "v0.2.0",
    d: "15 May 2026",
    tag: "WALLETS",
    items: [
      { type: "feat", t: "Privy embedded wallets — sign in with Google/Apple/email" },
      { type: "feat", t: "Stellar wallet provisioned via TEE + Shamir SSS, no seed phrases" },
    ],
  },
  {
    v: "v0.1.0",
    d: "14 May 2026",
    tag: "CONTRACTS",
    items: [
      { type: "feat", t: "Factory, EventNFT (SEP-41) and Marketplace deployed · 34 tests" },
      { type: "feat", t: "Automatic 5% royalty · atomic split in a single Stellar tx" },
      { type: "feat", t: "Gated transfer · only Marketplace can move tokens" },
    ],
  },
  {
    v: "v0.0.1",
    d: "28 Apr 2026",
    tag: "LANDING",
    items: [
      { type: "feat", t: "Bilingual landing EN/PT-BR via toggle" },
      { type: "feat", t: "Waitlist capture via Formspree" },
      { type: "feat", t: "Brand identity: night/gold/sage/purple + Bebas Neue + DM Sans" },
    ],
  },
];

const COLORS: Record<ItemType, string> = {
  feat:  "var(--sage)",
  fix:   "var(--gold)",
  chore: "var(--ink-muted)",
};

const LABELS: Record<ItemType, string> = {
  feat:  "FEAT",
  fix:   "FIX",
  chore: "CHORE",
};

export default function ChangelogPage() {
  return (
    <PageShell>
      <section
        className="mx-auto"
        style={{ padding: "100px 48px 80px", maxWidth: 800 }}
      >
        <p
          className="eyebrow"
          style={{ color: "var(--gold)", marginBottom: 20 }}
        >
          Build in public
        </p>
        <h1
          className="display"
          style={{
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            lineHeight: 0.92,
            margin: 0,
          }}
        >
          Changelog
        </h1>
        <p
          style={{
            fontSize: 15,
            color: "var(--ink-dim)",
            lineHeight: 1.6,
            marginTop: 24,
          }}
        >
          What changed, when, and why. Updated whenever a deploy lands in
          production.
        </p>

        <div
          className="flex flex-col"
          style={{ marginTop: 60, gap: 32 }}
        >
          {ENTRIES.map((e) => (
            <article
              key={e.v}
              style={{
                padding: 24,
                borderRadius: 10,
                background: "var(--night-card)",
                border: "1px solid var(--line)",
              }}
            >
              <header
                className="flex items-baseline justify-between"
                style={{ marginBottom: 16 }}
              >
                <div className="flex items-baseline" style={{ gap: 14 }}>
                  <span
                    className="display"
                    style={{ fontSize: 32, color: "var(--gold)" }}
                  >
                    {e.v}
                  </span>
                  <span
                    className="uppercase"
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "var(--ink-muted)",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {e.tag}
                  </span>
                </div>
                <span
                  className="font-mono"
                  style={{ fontSize: 11, color: "var(--ink-muted)" }}
                >
                  {e.d}
                </span>
              </header>
              <ul
                className="flex flex-col"
                style={{ gap: 10, listStyle: "none", margin: 0, padding: 0 }}
              >
                {e.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-baseline"
                    style={{ gap: 12 }}
                  >
                    <span
                      className="uppercase"
                      style={{
                        fontSize: 9,
                        fontWeight: 700,
                        color: COLORS[item.type],
                        width: 42,
                        letterSpacing: "0.1em",
                      }}
                    >
                      {LABELS[item.type]}
                    </span>
                    <span
                      style={{
                        fontSize: 14,
                        color: "var(--ink-dim)",
                        lineHeight: 1.5,
                      }}
                    >
                      {item.t}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
