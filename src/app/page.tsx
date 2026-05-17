"use client";

import Link from "next/link";

import { Icon, Wordmark } from "@/components/primitives";
import { commonDict } from "@/lib/i18n/dicts/common";
import { landingDict } from "@/lib/i18n/dicts/landing";
import { useT } from "@/lib/i18n";

import { LandingForOrganizers } from "./_components/landing-for-organizers";
import { LandingHeader } from "./_components/landing-header";
import { LandingHero } from "./_components/landing-hero";
import { LandingMarketplacePreview } from "./_components/landing-marketplace";
import { LandingSplitFlow } from "./_components/landing-split-flow";
import { WaitlistForm } from "./_components/waitlist-form";

/**
 * Marketing landing page — passexplorer.com.
 *
 * Client component because every section consumes the i18n context for
 * PT/EN switching. Metadata stays in the root layout. Structure:
 * Header → Hero → Pillars → SplitFlow → HowItWorks → Marketplace →
 * ForOrganizers → Stats → Waitlist → Footer.
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
  const t = useT(landingDict);
  const pillars = [
    {
      icon: "search" as const,
      label: t("pillars_buy_label"),
      title: t("pillars_buy_title"),
      body:  t("pillars_buy_body"),
      tone:  "gold" as const,
    },
    {
      icon: "sell" as const,
      label: t("pillars_sell_label"),
      title: t("pillars_sell_title"),
      body:  t("pillars_sell_body"),
      tone:  "sage" as const,
    },
    {
      icon: "sparkle" as const,
      label: t("pillars_org_label"),
      title: t("pillars_org_title"),
      body:  t("pillars_org_body"),
      tone:  "purple" as const,
    },
  ];

  const colors = {
    gold:   "var(--gold)",
    sage:   "var(--sage)",
    purple: "var(--purple)",
  } as const;

  return (
    <section className="bg-night" style={{ padding: "96px 32px" }}>
      <div className="mx-auto" style={{ maxWidth: 1100 }}>
        <p
          className="eyebrow text-center"
          style={{
            color: "var(--gold)",
            fontSize: "0.68rem",
            letterSpacing: "0.22em",
            marginBottom: "0.75rem",
          }}
        >
          {t("pillars_eyebrow")}
        </p>
        <h2
          className="display text-center"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            letterSpacing: "0.04em",
            lineHeight: 1,
            margin: "0 0 1rem",
          }}
        >
          {t("pillars_title_a")}{" "}
          <span style={{ color: "var(--gold)" }}>{t("pillars_title_b")}</span>
        </h2>
        <p
          className="mx-auto text-center font-light"
          style={{
            fontSize: "0.95rem",
            color: "var(--ink-dim)",
            lineHeight: 1.7,
            maxWidth: 480,
          }}
        >
          {t("pillars_lede")}
        </p>
        <div
          className="grid gap-6 md:grid-cols-3"
          style={{ marginTop: 64 }}
        >
          {pillars.map((p) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How it works ──────────────────────────────────────────────────────

function HowItWorks() {
  const t = useT(landingDict);
  const steps = [
    { n: "01", title: t("how_01_title"), body: t("how_01_body"), opacity: 0.2 },
    { n: "02", title: t("how_02_title"), body: t("how_02_body"), opacity: 0.4 },
    { n: "03", title: t("how_03_title"), body: t("how_03_body"), opacity: 0.6 },
    { n: "04", title: t("how_04_title"), body: t("how_04_body"), opacity: 0.8 },
    { n: "05", title: t("how_05_title"), body: t("how_05_body"), opacity: 1   },
  ];
  return (
    <section
      id="how"
      className="bg-night-mid"
      style={{
        padding: "96px 32px",
        borderTop: "0.5px solid var(--line)",
        borderBottom: "0.5px solid var(--line)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 1000 }}>
        <p
          className="eyebrow text-center"
          style={{
            color: "var(--gold)",
            fontSize: "0.68rem",
            letterSpacing: "0.22em",
            marginBottom: "0.75rem",
          }}
        >
          {t("how_eyebrow")}
        </p>
        <h2
          className="display text-center"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            letterSpacing: "0.04em",
            lineHeight: 1,
            margin: "0 0 64px",
          }}
        >
          {t("how_title")}
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
  const t = useT(landingDict);
  const items: { v: string; l: string; c: string }[] = [
    { v: "2,400+", l: t("stat_festivals"), c: "var(--gold)"   },
    { v: "180+",   l: t("stat_countries"), c: "var(--purple)" },
    { v: "50K+",   l: t("stat_passes"),    c: "var(--sage)"   },
    { v: "100%",   l: t("stat_verified"),  c: "var(--ink)"    },
    { v: "0%",     l: t("stat_zero"),      c: "var(--gold)"   },
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
  const t = useT(landingDict);
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
          {t("waitlist_eyebrow")}
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
          {t("waitlist_title_a")}{" "}
          <span style={{ color: "var(--gold)" }}>{t("waitlist_title_b")}</span>
        </h2>
        <p
          className="mx-auto mt-4 max-w-xl"
          style={{
            fontSize: 17,
            color: "var(--ink-dim)",
            lineHeight: 1.55,
          }}
        >
          {t("waitlist_body")}
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
          {t("waitlist_footnote")}
        </p>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────

function Footer() {
  const c = useT(commonDict);
  const l = useT(landingDict);

  const cols: { title: string; links: { label: string; href: string; external?: boolean }[] }[] = [
    {
      title: c("footer_product"),
      links: [
        { label: c("nav_festivals"),    href: "/festivals" },
        { label: c("nav_docs"),         href: "/docs"      },
        { label: c("nav_how_it_works"), href: "/#how"      },
        { label: c("nav_faq"),          href: "/faq"       },
      ],
    },
    {
      title: c("footer_company"),
      links: [
        { label: c("footer_about"),   href: "/about"   },
        { label: c("footer_blog"),    href: "/blog"    },
        { label: c("footer_press"),   href: "/press"   },
        { label: c("footer_careers"), href: "/careers" },
      ],
    },
    {
      title: c("footer_legal"),
      links: [
        { label: c("footer_terms"),   href: "/terms"   },
        { label: c("footer_privacy"), href: "/privacy" },
        { label: c("footer_cookies"), href: "/privacy" },
        { label: c("footer_lgpd"),    href: "/privacy" },
      ],
    },
    {
      title: c("footer_system"),
      links: [
        { label: c("footer_x"),       href: "https://x.com/passexplorer",     external: true },
        { label: c("footer_discord"), href: "/#" },
        { label: c("footer_github"),  href: "https://github.com/passexplorer", external: true },
        { label: c("nav_status"),     href: "/status" },
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
              {c("footer_blurb")}
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
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: 13, color: "var(--ink-dim)" }}
                        className="hover:text-gold transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        style={{ fontSize: 13, color: "var(--ink-dim)" }}
                        className="hover:text-gold transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex items-center justify-between pt-6"
          style={{
            borderTop: "1px solid var(--line)",
            color: "var(--ink-quiet)",
            fontSize: 11,
            marginTop: 60,
          }}
        >
          <span>{c("footer_copy")}</span>
          <span className="font-mono">{l("build_tag")}</span>
        </div>
      </div>
    </footer>
  );
}
