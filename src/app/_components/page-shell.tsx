"use client";

import Link from "next/link";

import { Icon, LangSelector, Wordmark } from "@/components/primitives";
import { commonDict } from "@/lib/i18n/dicts/common";
import { useT } from "@/lib/i18n";

/**
 * PageShell - shared chrome for sub-pages (About / FAQ / Terms / Privacy
 * / Status / Changelog).
 *
 * Visual treatment ported from temp/PassExplorer (1) PageShell:
 *   - PageHeader: Wordmark + 4 nav links + sage Status pulse + gold
 *     Join waitlist CTA
 *   - PageFooter: 5-column layout (Wordmark+blurb / Product / Company /
 *     Legal / System) + copyright + mono version
 *
 * Two usage modes:
 *   1. Title + body. pass eyebrow/title/lede and PageShell renders the
 *      standard centered narrow column header above children.
 *   2. Custom layout. omit eyebrow/title and render your own hero block
 *      inside children (e.g. About has 2-column problem/thesis + timeline).
 */

type PageKey = "festivals" | "howitworks" | "faq" | "about" | "status";

interface PageShellProps {
  /** Active nav key. sets the gold highlight. */
  active?: PageKey;
  /** When set, renders a centered narrow-column hero with eyebrow + title + lede. */
  eyebrow?: string;
  title?: string;
  lede?: string;
  children: React.ReactNode;
}

export function PageShell({
  active,
  eyebrow,
  title,
  lede,
  children,
}: PageShellProps) {
  const hasHero = Boolean(eyebrow && title);

  return (
    <div className="bg-night text-ink font-body min-h-dvh">
      <PageHeader active={active} />
      {hasHero ? (
        <main
          className="mx-auto px-5 pt-16 pb-14 sm:px-8 sm:pt-20 sm:pb-16 md:px-12 md:pt-24 md:pb-20 lg:pt-[100px] lg:pb-20"
          style={{ maxWidth: 900 }}
        >
          {eyebrow && (
            <p
              className="eyebrow"
              style={{ color: "var(--gold)", marginBottom: 20 }}
            >
              {eyebrow}
            </p>
          )}
          {title && (
            <h1
              className="display"
              style={{
                fontSize: "clamp(2.25rem, 8vw, 5.5rem)",
                lineHeight: 0.92,
                margin: 0,
              }}
            >
              {title}
            </h1>
          )}
          {lede && (
            <p
              className="mt-6 max-w-xl"
              style={{
                fontSize: 17,
                color: "var(--ink-dim)",
                lineHeight: 1.6,
              }}
            >
              {lede}
            </p>
          )}
          <div className="mt-12">{children}</div>
        </main>
      ) : (
        children
      )}
      <PageFooter />
    </div>
  );
}

// ─── Header ─────────────────────────────────────────────────────────

function PageHeader({ active }: { active?: PageKey }) {
  const t = useT(commonDict);
  const nav: { key: PageKey; label: string; href: string }[] = [
    { key: "festivals",  label: t("nav_festivals"),    href: "/festivals" },
    { key: "howitworks", label: t("nav_how_it_works"), href: "/#how"      },
    { key: "faq",        label: t("nav_faq"),          href: "/faq"       },
    { key: "about",      label: t("nav_about"),        href: "/about"     },
  ];
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
          {nav.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              style={{
                fontSize: 13,
                color: active === l.key ? "var(--gold)" : "var(--ink-dim)",
                fontWeight: active === l.key ? 600 : 400,
              }}
              className="hover:text-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Sage status pulse. clickable to /status */}
        <Link
          href="/status"
          className="hidden items-center gap-1.5 md:inline-flex"
          style={{ fontSize: 11, color: "var(--sage)" }}
          aria-label="Status"
        >
          <span
            aria-hidden="true"
            className="pulse"
            style={{ color: "var(--sage)" }}
          />
          {t("nav_status")}
        </Link>

        <a
          href="/#waitlist"
          className="tap inline-flex h-9 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-md px-3 text-[11px] font-semibold uppercase tracking-wider md:gap-2 md:px-4 md:text-xs"
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

// ─── Footer ─────────────────────────────────────────────────────────

function PageFooter() {
  const t = useT(commonDict);
  const cols: {
    title: string;
    links: { label: string; href: string; external?: boolean }[];
  }[] = [
    {
      title: t("footer_product"),
      links: [
        { label: t("nav_festivals"),    href: "/festivals" },
        { label: t("nav_how_it_works"), href: "/#how"      },
        { label: t("nav_faq"),          href: "/faq"       },
        { label: t("footer_changelog"), href: "/changelog" },
      ],
    },
    {
      title: t("footer_company"),
      links: [
        { label: t("footer_about"),   href: "/about"   },
        { label: t("footer_blog"),    href: "/blog"    },
        { label: t("footer_press"),   href: "/press"   },
        { label: t("footer_careers"), href: "/careers" },
      ],
    },
    {
      title: t("footer_legal"),
      links: [
        { label: t("footer_terms"),   href: "/terms"   },
        { label: t("footer_privacy"), href: "/privacy" },
        { label: t("footer_cookies"), href: "/privacy" },
        { label: t("footer_lgpd"),    href: "/privacy" },
      ],
    },
    {
      title: t("footer_system"),
      links: [
        { label: t("nav_status"),       href: "/status"    },
        { label: t("footer_changelog"), href: "/changelog" },
        { label: t("footer_github"),    href: "https://github.com/passexplorer", external: true },
        { label: t("footer_x"),         href: "https://x.com/passexplorer",     external: true },
      ],
    },
  ];

  return (
    <footer
      className="px-5 pb-8 pt-12 sm:px-8 sm:pb-10 sm:pt-14 md:px-12 md:pb-10 md:pt-[60px]"
      style={{
        background: "var(--night)",
        borderTop: "1px solid var(--line)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 1240 }}>
        <div className="grid grid-cols-2 gap-8 sm:gap-10 md:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
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
              {t("footer_blurb")}
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
          className="mt-10 flex flex-col items-start justify-between gap-2 pt-6 sm:mt-14 sm:flex-row sm:items-center sm:gap-0 md:mt-[60px]"
          style={{
            borderTop: "1px solid var(--line)",
            color: "var(--ink-quiet)",
            fontSize: 11,
          }}
        >
          <span>{t("footer_copy")}</span>
          <span className="font-mono">{t("footer_build")}</span>
        </div>
      </div>
    </footer>
  );
}
