import Link from "next/link";

import { Icon, Wordmark } from "@/components/primitives";

/**
 * PageShell — shared chrome for sub-pages (About / FAQ / Terms / etc.).
 * Sticky compact header (logo + back to home), centered content well,
 * shared footer with copy. Keeps the marketing pages consistent and the
 * page bodies focused on their content only.
 */

interface PageShellProps {
  eyebrow: string;
  title: string;
  lede?: string;
  children: React.ReactNode;
}

export function PageShell({ eyebrow, title, lede, children }: PageShellProps) {
  return (
    <div className="bg-night text-ink min-h-dvh font-body">
      <CompactHeader />
      <main className="mx-auto px-6 py-16" style={{ maxWidth: 920 }}>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5"
          style={{
            fontSize: 11,
            color: "var(--ink-muted)",
            letterSpacing: "0.04em",
          }}
        >
          <Icon name="chevL" size={12} />
          Back to home
        </Link>
        <p
          className="eyebrow mt-8"
          style={{ color: "var(--gold)", letterSpacing: "0.18em" }}
        >
          {eyebrow}
        </p>
        <h1
          className="display mt-3"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
            lineHeight: 0.95,
          }}
        >
          {title}
        </h1>
        {lede && (
          <p
            className="mt-5 max-w-2xl"
            style={{
              fontSize: 17,
              color: "var(--ink-dim)",
              lineHeight: 1.55,
            }}
          >
            {lede}
          </p>
        )}
        <div className="mt-12">{children}</div>
      </main>
      <CompactFooter />
    </div>
  );
}

function CompactHeader() {
  return (
    <header
      className="sticky top-0 z-30 flex items-center justify-between border-b backdrop-blur-md"
      style={{
        padding: "16px 24px",
        background: "rgba(8,8,16,0.7)",
        borderColor: "var(--line)",
      }}
    >
      <Link href="/" aria-label="Pass Explorer home">
        <Wordmark size={14} />
      </Link>
      <nav className="hidden gap-6 md:flex">
        {[
          { label: "FAQ", href: "/faq" },
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
        href="/#waitlist"
        className="tap inline-flex items-center gap-1.5 font-semibold"
        style={{
          height: 32,
          padding: "0 14px",
          background: "var(--gold)",
          color: "var(--night)",
          borderRadius: 6,
          fontSize: 11,
          letterSpacing: "0.04em",
        }}
      >
        Join
        <Icon name="arrow" size={12} />
      </a>
    </header>
  );
}

function CompactFooter() {
  return (
    <footer
      className="border-t"
      style={{
        background: "var(--night)",
        borderColor: "var(--line)",
        padding: "32px 24px 24px",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <Wordmark size={12} />
        <p
          className="font-mono"
          style={{
            fontSize: 10,
            color: "var(--ink-quiet)",
            letterSpacing: "0.08em",
          }}
        >
          © 2026 Pass Explorer · Built on Stellar
        </p>
      </div>
    </footer>
  );
}
