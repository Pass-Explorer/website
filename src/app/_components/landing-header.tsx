"use client";

import * as React from "react";
import Link from "next/link";

import { Icon, Wordmark } from "@/components/primitives";

/**
 * LandingHeader — sticky top nav for the marketing site.
 *
 * Ported from temp/PassExplorer (1) LandingHeader: Wordmark on the left,
 * nav links + Sign in ghost button + Join waitlist gold CTA + language
 * selector (en/pt with flag pills) on the right.
 *
 * Lang persistence in localStorage under 'px-lang' (same key as the
 * prototype) — visual-only in v1, real i18n routing lands when we wire
 * Pages-router PT translations.
 */

type Lang = "en" | "pt";

export function LandingHeader() {
  const [lang, setLang] = React.useState<Lang>("en");

  // Hydrate from localStorage after mount to avoid SSR mismatch.
  React.useEffect(() => {
    try {
      const stored = localStorage.getItem("px-lang");
      if (stored === "en" || stored === "pt") setLang(stored);
    } catch {
      // localStorage may be blocked in iframes — fine, default stays 'en'.
    }
  }, []);

  function pick(l: Lang) {
    setLang(l);
    try {
      localStorage.setItem("px-lang", l);
    } catch {
      // silent
    }
  }

  return (
    <header
      className="sticky top-0 z-30 flex items-center justify-between border-b backdrop-blur-md"
      style={{
        padding: "20px 48px",
        background: "rgba(8,8,16,0.6)",
        borderColor: "var(--line)",
      }}
    >
      <Link href="/" aria-label="Pass Explorer home">
        <Wordmark size={16} />
      </Link>

      <div className="flex items-center gap-8">
        <nav className="hidden items-center gap-8 md:flex">
          {[
            { label: "Festivals", href: "#" },
            { label: "Organizers", href: "/organizers" },
            { label: "How it works", href: "#how" },
            { label: "FAQ", href: "/faq" },
          ].map((l) => (
            <Link
              key={l.label}
              href={l.href}
              style={{ fontSize: 13, color: "var(--ink-dim)" }}
              className="hover:text-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Sign in ghost */}
        <a
          href="#waitlist"
          className="tap hidden items-center font-semibold uppercase md:inline-flex"
          style={{
            height: 38,
            padding: "0 16px",
            background: "transparent",
            color: "var(--ink)",
            border: "1px solid var(--line-strong)",
            borderRadius: 6,
            fontSize: 12,
            letterSpacing: "0.04em",
          }}
        >
          Sign in
        </a>

        {/* Join waitlist gold */}
        <a
          href="#waitlist"
          className="tap inline-flex items-center gap-2 font-semibold uppercase"
          style={{
            height: 38,
            padding: "0 18px",
            background: "var(--gold)",
            color: "var(--night)",
            borderRadius: 6,
            fontSize: 12,
            letterSpacing: "0.04em",
          }}
        >
          Join waitlist
          <Icon name="arrow" size={14} />
        </a>

        {/* Language selector — flag pill */}
        <div
          className="hidden md:inline-flex"
          style={{
            gap: 4,
            padding: 3,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid var(--line)",
            borderRadius: 6,
          }}
        >
          {[
            { id: "en" as const, flag: "🇺🇸", title: "English" },
            { id: "pt" as const, flag: "🇧🇷", title: "Português" },
          ].map((o) => (
            <button
              key={o.id}
              onClick={() => pick(o.id)}
              title={o.title}
              aria-label={o.title}
              aria-pressed={lang === o.id}
              className="cursor-pointer transition-all"
              style={{
                padding: "4px 8px",
                borderRadius: 4,
                background:
                  lang === o.id ? "rgba(232,184,75,0.14)" : "transparent",
                opacity: lang === o.id ? 1 : 0.5,
                filter: lang === o.id ? "none" : "grayscale(60%)",
                fontSize: 16,
                lineHeight: 1,
              }}
            >
              {o.flag}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
