"use client";

import * as React from "react";
import Link from "next/link";

import { Icon, LangSelector, Wordmark } from "@/components/primitives";
import { commonDict } from "@/lib/i18n/dicts/common";
import { useT } from "@/lib/i18n";

/**
 * LandingHeader - sticky top nav for the marketing site.
 *
 * Layout:
 *   Wordmark · [Festivais · Como funciona · FAQ] · [Entrar ⌄] · [Lista de espera] · [Lang]
 *
 * `Docs` lives in the footer — too B2B/technical for the front door.
 *
 * Entrar is a small dropdown with the two real personas the app
 * supports publicly (fan + organizer). Admin is internal-only and
 * never gets a public link.
 */

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://app.passexplorer.com";

export function LandingHeader() {
  const t = useT(commonDict);

  return (
    <header
      className="sticky top-0 z-30 flex items-center justify-between gap-3 border-b px-5 py-4 backdrop-blur-md sm:gap-6 sm:px-8 md:gap-8 md:px-12 md:py-5"
      style={{
        background: "rgba(8,8,16,0.6)",
        borderColor: "var(--line)",
      }}
    >
      <Link href="/" aria-label="Pass Explorer home" className="shrink-0">
        <Wordmark size={16} />
      </Link>

      <div className="flex shrink-0 items-center gap-3 sm:gap-5 md:gap-8">
        <nav className="hidden items-center gap-8 md:flex">
          {[
            { label: t("nav_festivals"),    href: "/festivals" },
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

        <EntrarMenu
          label={t("cta_sign_in")}
          fanLabel={t("cta_sign_in_fan")}
          fanSub={t("cta_sign_in_fan_sub")}
          hostLabel={t("cta_host")}
          hostSub={t("cta_host_sub")}
        />

        {/* Join waitlist gold — primary CTA, pre-launch focus.
            Mobile shows compact "Lista" (PT) / "Waitlist" (EN), desktop shows full label. */}
        <a
          href="#waitlist"
          className="tap inline-flex h-9 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-md px-3 text-[11px] font-semibold uppercase tracking-wider md:h-9 md:gap-2 md:px-4 md:text-xs"
          style={{
            background: "var(--gold)",
            color: "var(--night)",
          }}
        >
          <span className="hidden sm:inline">{t("cta_join_waitlist")}</span>
          <span className="sm:hidden">{t("cta_waitlist_short")}</span>
          <Icon name="arrow" size={12} />
        </a>

        <LangSelector />
      </div>
    </header>
  );
}

interface EntrarMenuProps {
  label: string;
  fanLabel: string;
  fanSub: string;
  hostLabel: string;
  hostSub: string;
}

/**
 * Small custom dropdown — no library, just useState + click-outside.
 * Two options corresponding to the only public personas the app has:
 * fan (default mass-market entry) and organizer (KYC apply flow).
 */
function EntrarMenu({
  label,
  fanLabel,
  fanSub,
  hostLabel,
  hostSub,
}: EntrarMenuProps) {
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative hidden md:block">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="tap inline-flex items-center gap-1.5 font-semibold uppercase"
        style={{
          height: 38,
          padding: "0 14px",
          background: "transparent",
          color: "var(--ink)",
          border: "1px solid var(--line-strong)",
          borderRadius: 6,
          fontSize: 12,
          letterSpacing: "0.04em",
        }}
      >
        {label}
        <Icon name="chevD" size={12} />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-[calc(100%+8px)] z-40 w-[280px] overflow-hidden"
          style={{
            background: "rgba(20,20,30,0.96)",
            border: "1px solid var(--line-strong)",
            borderRadius: 10,
            boxShadow: "0 14px 40px rgba(0,0,0,0.55)",
            backdropFilter: "blur(16px)",
          }}
        >
          <a
            href={APP_URL}
            role="menuitem"
            className="block transition-colors hover:bg-white/5"
            style={{ padding: "14px 16px" }}
            onClick={() => setOpen(false)}
          >
            <div
              className="font-semibold"
              style={{ fontSize: 13, color: "var(--ink)" }}
            >
              {fanLabel}
            </div>
            <div
              className="mt-0.5"
              style={{ fontSize: 11, color: "var(--ink-muted)" }}
            >
              {fanSub}
            </div>
          </a>
          <a
            href={`${APP_URL}/organizer/apply`}
            role="menuitem"
            className="block border-t transition-colors hover:bg-white/5"
            style={{ padding: "14px 16px", borderColor: "var(--line)" }}
            onClick={() => setOpen(false)}
          >
            <div
              className="font-semibold"
              style={{ fontSize: 13, color: "var(--gold)" }}
            >
              {hostLabel}
            </div>
            <div
              className="mt-0.5"
              style={{ fontSize: 11, color: "var(--ink-muted)" }}
            >
              {hostSub}
            </div>
          </a>
        </div>
      )}
    </div>
  );
}
