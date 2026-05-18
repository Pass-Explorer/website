"use client";

import Link from "next/link";

import { Icon, LangSelector, Wordmark } from "@/components/primitives";
import { commonDict } from "@/lib/i18n/dicts/common";
import { useT } from "@/lib/i18n";

/**
 * LandingHeader - sticky top nav for the marketing site.
 *
 * Wordmark on the left, nav links + Sign in ghost + Join waitlist CTA +
 * language selector on the right. All copy + lang state lives in the
 * shared i18n context so the toggle flips the whole site.
 */

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://app.passexplorer.com";

export function LandingHeader() {
  const t = useT(commonDict);

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
            { label: t("nav_festivals"),    href: "/festivals" },
            { label: t("nav_docs"),         href: "/docs"      },
            { label: t("nav_how_it_works"), href: "#how"       },
            { label: t("nav_faq"),          href: "/faq"       },
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

        {/* Sign in ghost — fan entry (most common). Opens the app
            where Privy/DevWallet handle auth. */}
        <a
          href={APP_URL}
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
          {t("cta_sign_in")}
        </a>

        {/* Host events ghost — organizer entry. Drops the visitor at
            the KYC apply flow with a faint gold border so it reads
            as a related-but-distinct path from fan sign-in. Admin
            stays unlinked from the public site (internal-only). */}
        <a
          href={`${APP_URL}/organizer/apply`}
          className="tap hidden items-center font-semibold uppercase md:inline-flex"
          style={{
            height: 38,
            padding: "0 16px",
            background: "transparent",
            color: "var(--gold)",
            border: "1px solid rgba(232,184,75,0.4)",
            borderRadius: 6,
            fontSize: 12,
            letterSpacing: "0.04em",
          }}
        >
          {t("cta_host")}
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
          {t("cta_join_waitlist")}
          <Icon name="arrow" size={14} />
        </a>

        <LangSelector />
      </div>
    </header>
  );
}
