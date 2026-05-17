import Link from "next/link";

import { Icon, Wordmark } from "@/components/primitives";

import { LandingForOrganizers } from "./_components/landing-for-organizers";
import { LandingHeader } from "./_components/landing-header";
import { LandingHero } from "./_components/landing-hero";
import { LandingMarketplacePreview } from "./_components/landing-marketplace";
import { LandingSplitFlow } from "./_components/landing-split-flow";
import { WaitlistForm } from "./_components/waitlist-form";

/**
 * Marketing landing page — passexplorer.com.
 *
 * Visual treatment ported from temp/PassExplorer (1) web-landing.jsx, adapted
 * for production: smaller sections, no Privy/Stellar deps so the bundle stays
 * lean for SEO + first-paint. The hero is a client component (mouse-tilt holo
 * ticket + video bg); everything below is pure RSC.
 *
 * Structure: Header → Hero → Pillars → How it works → Stats → Waitlist → Footer.
 */

export default function HomePage() {
  return (
    <div className="bg-night text-ink min-h-dvh font-body">
      <LandingHeader />
      <LandingHero />
      <Pillars />
      <LandingSplitFlow />
      <HowItWorks />
      <LandingMarketplacePreview />
      <LandingForOrganizers />
      <Stats />
      <WaitlistSection />
      <Footer />
    </div>
  );
}

// ─── Pillars ────────────────────────────────────────────────────────────

function Pillars() {
  const pillars = [
    {
      icon: "search" as const,
      label: "For fans",
      title: "Explore & buy",
      body: "Discover thousands of festivals and secure your pass — on the official drop or the secondary market.",
      tone: "gold",
    },
    {
      icon: "sell" as const,
      label: "For sellers",
      title: "List & resell",
      body: "Not going? Resell safely. You set the price within the organizer's cap, the contract handles the rest.",
      tone: "sage",
    },
    {
      icon: "sparkle" as const,
      label: "For organizers",
      title: "Earn on resales",
      body: "Unlike other marketplaces — you get a cut of every resale, plus total visibility on who holds your passes.",
      tone: "purple",
    },
  ] as const;

  return (
    <section className="bg-night" style={{ padding: "120px 48px" }}>
      <div className="mx-auto" style={{ maxWidth: 1240 }}>
        <p className="eyebrow mb-4" style={{ color: "var(--gold)" }}>
          What Pass Explorer does
        </p>
        <h2
          className="display"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            lineHeight: 0.95,
            maxWidth: 900,
            margin: 0,
          }}
        >
          One platform.{" "}
          <span style={{ color: "var(--gold)" }}>Three sides.</span>
        </h2>
        <p
          className="mt-4"
          style={{
            fontSize: 17,
            color: "var(--ink-dim)",
            lineHeight: 1.55,
            maxWidth: 540,
          }}
        >
          Built for fans who want in, fans who need out, and organizers who
          deserve more.
        </p>
        <div
          className="grid gap-6 md:grid-cols-3"
          style={{ marginTop: 80 }}
        >
          {pillars.map((p) => {
            const colors = {
              gold:   "var(--gold)",
              sage:   "var(--sage)",
              purple: "var(--purple)",
            };
            return (
              <div
                key={p.title}
                className="relative overflow-hidden transition-transform hover:translate-y-[-2px]"
                style={{
                  padding: 32,
                  borderRadius: 16,
                  background: "var(--night-card)",
                  border: "1px solid var(--line)",
                }}
              >
                <div
                  className="mb-6 grid place-items-center"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 10,
                    background: "rgba(232,184,75,0.1)",
                    color: colors[p.tone],
                  }}
                >
                  <Icon name={p.icon} size={24} />
                </div>
                <p
                  className="mb-2 font-bold uppercase"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.18em",
                    color: colors[p.tone],
                  }}
                >
                  {p.label}
                </p>
                <p
                  className="display"
                  style={{ fontSize: 28, color: "var(--ink)" }}
                >
                  {p.title}
                </p>
                <p
                  className="mt-3"
                  style={{
                    fontSize: 14,
                    lineHeight: 1.55,
                    color: "var(--ink-dim)",
                  }}
                >
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── How it works ──────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    { n: "01", title: "Explore",         body: "Browse thousands of festivals. Filter by genre, location, budget.", opacity: 0.2 },
    { n: "02", title: "Find your pass",  body: "Official drops and resales — one feed, all verified on-chain.", opacity: 0.4 },
    { n: "03", title: "Buy or sell",     body: "Secure checkout for buyers. Instant listing tools for sellers.", opacity: 0.6 },
    { n: "04", title: "Everyone wins",   body: "Sellers get paid. Organizers earn royalty. Buyers keep the pass.", opacity: 0.8 },
    { n: "05", title: "Live it",         body: "Show up, scan, in. That's it.", opacity: 1 },
  ];
  return (
    <section
      id="how"
      className="bg-night-mid"
      style={{ padding: "120px 48px" }}
    >
      <div className="mx-auto" style={{ maxWidth: 1240 }}>
        <p
          className="eyebrow mb-4 text-center"
          style={{ color: "var(--gold)" }}
        >
          The experience
        </p>
        <h2
          className="display text-center"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            lineHeight: 0.95,
            margin: "0 0 80px",
          }}
        >
          How it works
        </h2>
        <div className="grid gap-0 md:grid-cols-5">
          {steps.map((s, i, arr) => (
            <div
              key={s.n}
              className="px-7 py-7"
              style={{
                borderRight:
                  i < arr.length - 1
                    ? "1px solid var(--line)"
                    : "none",
              }}
            >
              <p
                className="display"
                style={{
                  fontSize: 52,
                  lineHeight: 1,
                  marginBottom: 14,
                  color: "var(--gold)",
                  opacity: s.opacity,
                }}
              >
                {s.n}
              </p>
              <p
                className="font-semibold"
                style={{
                  fontSize: 14,
                  color: "var(--ink)",
                  marginBottom: 6,
                }}
              >
                {s.title}
              </p>
              <p
                style={{
                  fontSize: 12,
                  color: "var(--ink-muted)",
                  lineHeight: 1.5,
                }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Stats — trust strip (5 marketing-scale numbers) ───────────────────

function Stats() {
  const items: { v: string; l: string; c: string }[] = [
    { v: "2,400+", l: "Festivals listed",       c: "var(--gold)"   },
    { v: "180+",   l: "Countries",               c: "var(--purple)" },
    { v: "50K+",   l: "Passes available",        c: "var(--sage)"   },
    { v: "100%",   l: "Verified sellers",        c: "var(--ink)"    },
    { v: "0%",     l: "Tolerance for scalping",  c: "var(--gold)"   },
  ];
  return (
    <section
      className="bg-night"
      style={{
        padding: "80px 48px",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        className="mx-auto grid gap-8 md:grid-cols-3 lg:grid-cols-5"
        style={{ maxWidth: 1240 }}
      >
        {items.map((s) => (
          <div key={s.l} className="text-left">
            <p
              className="display tabular-nums whitespace-nowrap"
              style={{
                fontSize: 56,
                lineHeight: 1,
                color: s.c,
              }}
            >
              {s.v}
            </p>
            <p
              className="mt-2 font-semibold uppercase"
              style={{
                fontSize: 12,
                color: "var(--ink-muted)",
                letterSpacing: "0.06em",
              }}
            >
              {s.l}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Waitlist ──────────────────────────────────────────────────────────

function WaitlistSection() {
  return (
    <section
      id="waitlist"
      className="relative overflow-hidden"
      style={{ padding: "140px 48px" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(232,184,75,0.12), transparent 60%)",
        }}
      />
      <div
        className="relative mx-auto text-center"
        style={{ maxWidth: 720 }}
      >
        <p className="eyebrow mb-5" style={{ color: "var(--gold)" }}>
          The waitlist
        </p>
        <h2
          className="display mx-auto"
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            lineHeight: 0.92,
            maxWidth: 720,
            margin: 0,
          }}
        >
          Sold out?{" "}
          <span style={{ color: "var(--gold)" }}>Not for you.</span>
        </h2>
        <p
          className="mx-auto mt-4 max-w-xl"
          style={{
            fontSize: 17,
            color: "var(--ink-dim)",
            lineHeight: 1.55,
          }}
        >
          The first secondary marketplace that works for organizers, not against
          them. Drop your email — we'll let you know when it goes live.
        </p>
        <WaitlistForm />
        <p
          className="mt-6 font-mono"
          style={{
            fontSize: 11,
            color: "var(--ink-quiet)",
            letterSpacing: "0.06em",
          }}
        >
          Stellar testnet now · mainnet 2026
        </p>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────

function Footer() {
  const cols: { title: string; links: { label: string; href: string; external?: boolean }[] }[] = [
    {
      title: "Product",
      links: [
        { label: "Festivals",    href: "/#" },
        { label: "Organizers",   href: "/docs" },
        { label: "How it works", href: "/#how" },
        { label: "FAQ",          href: "/faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About",     href: "/about" },
        { label: "Blog",      href: "/#" },
        { label: "Press",     href: "/#" },
        { label: "Careers",   href: "/#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms",     href: "/terms" },
        { label: "Privacy",   href: "/privacy" },
        { label: "Cookies",   href: "/privacy" },
        { label: "LGPD",      href: "/privacy" },
      ],
    },
    {
      title: "Community",
      links: [
        { label: "X / Twitter", href: "https://x.com/passexplorer", external: true },
        { label: "Discord",     href: "/#" },
        { label: "GitHub",      href: "https://github.com/passexplorer", external: true },
        { label: "Status",      href: "/status" },
      ],
    },
  ];

  return (
    <footer
      className="border-t"
      style={{
        background: "var(--night)",
        borderColor: "var(--line)",
        padding: "60px 48px 40px",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 1240 }}>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          <div>
            <Wordmark size={18} />
            <p
              className="mt-4 max-w-xs"
              style={{
                fontSize: 12,
                color: "var(--ink-muted)",
                lineHeight: 1.5,
              }}
            >
              Festival ticket marketplace on Stellar. Built in Brazil — open to organizers worldwide.
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <p
                className="mb-3.5 font-bold uppercase"
                style={{
                  fontSize: 11,
                  color: "var(--gold)",
                  letterSpacing: "0.12em",
                }}
              >
                {col.title}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.external ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: 13, color: "var(--ink-dim)" }}
                        className="hover:text-gold transition-colors"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        href={l.href}
                        style={{ fontSize: 13, color: "var(--ink-dim)" }}
                        className="hover:text-gold transition-colors"
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-15 flex items-center justify-between pt-6"
          style={{
            borderTop: "1px solid var(--line)",
            color: "var(--ink-quiet)",
            fontSize: 11,
            marginTop: 60,
          }}
        >
          <span>© 2026 Pass Explorer · Built on Stellar</span>
          <span className="font-mono">v0.1.0 · build 5eb83e</span>
        </div>
      </div>
    </footer>
  );
}
