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
    <section className="bg-night" style={{ padding: "96px 24px" }}>
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow mb-4" style={{ color: "var(--gold)" }}>
          What Pass Explorer does
        </p>
        <h2
          className="display"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            lineHeight: 0.95,
            maxWidth: 900,
          }}
        >
          One platform.{" "}
          <span style={{ color: "var(--gold)" }}>Three sides.</span>
        </h2>
        <p
          className="mt-4 max-w-xl"
          style={{
            fontSize: 17,
            color: "var(--ink-dim)",
            lineHeight: 1.55,
          }}
        >
          Built for fans who want in, fans who need out, and organizers who
          deserve more.
        </p>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
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
      style={{ padding: "96px 24px" }}
    >
      <div className="mx-auto max-w-7xl">
        <p
          className="eyebrow mb-4 text-center"
          style={{ color: "var(--gold)" }}
        >
          The experience
        </p>
        <h2
          className="display mb-16 text-center"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            lineHeight: 0.95,
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

// ─── Stats ─────────────────────────────────────────────────────────────

function Stats() {
  const items = [
    { v: "0", l: "Tx fees hidden", sub: "Atomic splits on Stellar — every cent visible" },
    { v: "5%", l: "Royalty per resale", sub: "Set by the organizer, enforced on-chain" },
    { v: "1.5x", l: "Default resale cap", sub: "No more 10x scalping. Ever." },
    { v: "~3s", l: "Settlement", sub: "From sign to settle. Stellar testnet." },
  ];
  return (
    <section
      className="bg-night relative overflow-hidden"
      style={{ padding: "96px 24px" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 40% 50% at 50% 50%, rgba(232,184,75,0.06), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <p className="eyebrow mb-4" style={{ color: "var(--gold)" }}>
          Built on math, not vibes
        </p>
        <h2
          className="display"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            lineHeight: 0.95,
            maxWidth: 900,
          }}
        >
          Math that <span style={{ color: "var(--gold)" }}>can't lie.</span>
        </h2>
        <div className="mt-12 grid gap-2 md:grid-cols-4">
          {items.map((s) => (
            <div
              key={s.l}
              style={{
                padding: 24,
                borderRadius: 12,
                background: "var(--night-card)",
                border: "1px solid var(--line)",
              }}
            >
              <p
                className="display tabular-nums"
                style={{
                  fontSize: 64,
                  color: "var(--gold)",
                  lineHeight: 1,
                }}
              >
                {s.v}
              </p>
              <p
                className="mt-3 font-bold uppercase"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  color: "var(--ink)",
                }}
              >
                {s.l}
              </p>
              <p
                className="mt-1"
                style={{
                  fontSize: 11,
                  color: "var(--ink-muted)",
                  lineHeight: 1.4,
                }}
              >
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Waitlist ──────────────────────────────────────────────────────────

function WaitlistSection() {
  return (
    <section
      id="waitlist"
      className="bg-night-mid relative overflow-hidden"
      style={{ padding: "120px 24px" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(232,184,75,0.08), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="eyebrow mb-4" style={{ color: "var(--gold)" }}>
          The waitlist
        </p>
        <h2
          className="display mx-auto"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            lineHeight: 0.95,
            maxWidth: 720,
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
  return (
    <footer
      className="border-t"
      style={{
        background: "var(--night)",
        borderColor: "var(--line)",
        padding: "48px 24px 32px",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <Wordmark size={14} />
        <nav className="flex flex-wrap items-center gap-6">
          {[
            { label: "About", href: "/about" },
            { label: "FAQ", href: "/faq" },
            { label: "Terms", href: "/terms" },
            { label: "Privacy", href: "/privacy" },
            { label: "Status", href: "/status" },
            { label: "Changelog", href: "/changelog" },
          ].map((l) => (
            <Link
              key={l.label}
              href={l.href}
              style={{ fontSize: 12, color: "var(--ink-muted)" }}
              className="hover:text-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href="https://x.com/passexplorer"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono"
          style={{
            fontSize: 11,
            color: "var(--ink-muted)",
            letterSpacing: "0.06em",
          }}
        >
          @passexplorer ↗
        </a>
      </div>
      <p
        className="mt-8 text-center font-mono"
        style={{
          fontSize: 10,
          color: "var(--ink-quiet)",
          letterSpacing: "0.08em",
        }}
      >
        © 2026 Pass Explorer · Built on Stellar
      </p>
    </footer>
  );
}
