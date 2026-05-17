import Link from "next/link";

import { Icon } from "@/components/primitives";

import { PageShell } from "./_components/page-shell";

export default function NotFound() {
  return (
    <PageShell>
      <section
        className="mx-auto text-center"
        style={{ padding: "120px 48px", maxWidth: 700 }}
      >
        <p
          className="display"
          style={{
            fontSize: "clamp(8rem, 22vw, 15rem)",
            lineHeight: 0.9,
            color: "var(--gold-soft)",
            letterSpacing: "0.02em",
            margin: 0,
          }}
        >
          404
        </p>
        <p
          className="eyebrow"
          style={{ color: "var(--gold)", marginTop: -20 }}
        >
          Page not found
        </p>
        <h1
          className="display"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
            lineHeight: 0.95,
            margin: "20px 0",
          }}
        >
          That pass doesn't exist.
        </h1>
        <p
          className="mx-auto"
          style={{
            fontSize: 16,
            color: "var(--ink-dim)",
            marginBottom: 40,
            maxWidth: 480,
            lineHeight: 1.6,
          }}
        >
          Either the link is wrong, the event was removed, or you typed
          something weird. Try one of these:
        </p>
        <div
          className="flex justify-center"
          style={{ gap: 12, flexWrap: "wrap" }}
        >
          <Link
            href="/"
            className="tap inline-flex items-center gap-2 font-semibold"
            style={{
              height: 48,
              padding: "0 24px",
              background: "var(--gold)",
              color: "var(--night)",
              borderRadius: 6,
              fontSize: 13,
              letterSpacing: "0.02em",
            }}
          >
            Browse festivals
            <Icon name="arrow" size={16} />
          </Link>
          <Link
            href="/faq"
            className="tap inline-flex items-center gap-2 font-semibold"
            style={{
              height: 48,
              padding: "0 24px",
              background: "transparent",
              color: "var(--ink)",
              border: "1px solid var(--line)",
              borderRadius: 6,
              fontSize: 13,
              letterSpacing: "0.02em",
            }}
          >
            FAQ
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
