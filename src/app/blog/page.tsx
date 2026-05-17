"use client";

import Link from "next/link";

import { Icon } from "@/components/primitives";
import { blogDict } from "@/lib/i18n/dicts/blog";
import { useT } from "@/lib/i18n";

import { PageShell } from "../_components/page-shell";

export default function BlogPage() {
  const t = useT(blogDict);
  const posts = [
    { date: t("p1_date"), tag: t("p1_tag"), title: t("p1_t"), body: t("p1_b") },
    { date: t("p2_date"), tag: t("p2_tag"), title: t("p2_t"), body: t("p2_b") },
    { date: t("p3_date"), tag: t("p3_tag"), title: t("p3_t"), body: t("p3_b") },
  ];

  return (
    <PageShell>
      <section
        className="mx-auto"
        style={{ padding: "100px 48px 80px", maxWidth: 900 }}
      >
        <p
          className="eyebrow"
          style={{ color: "var(--gold)", marginBottom: 20 }}
        >
          {t("eyebrow")}
        </p>
        <h1
          className="display"
          style={{
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            lineHeight: 0.92,
            margin: 0,
          }}
        >
          {t("title_a")}{" "}
          <span style={{ color: "var(--gold)" }}>{t("title_b")}</span>
        </h1>
        <p
          style={{
            fontSize: 17,
            color: "var(--ink-dim)",
            lineHeight: 1.6,
            marginTop: 24,
            maxWidth: 640,
          }}
        >
          {t("lede")}
        </p>

        {/* Honest pre-launch banner */}
        <div
          className="flex items-start"
          style={{
            marginTop: 40,
            padding: 20,
            borderRadius: 10,
            background: "var(--purple-soft)",
            border: "1px solid var(--purple)",
            gap: 14,
          }}
        >
          <span style={{ color: "var(--purple)", flexShrink: 0, marginTop: 2 }}>
            <Icon name="info" size={20} />
          </span>
          <div>
            <p
              className="font-bold uppercase"
              style={{
                fontSize: 10,
                color: "var(--purple)",
                letterSpacing: "0.14em",
              }}
            >
              {t("empty_pill")}
            </p>
            <p
              className="mt-1"
              style={{ fontSize: 14, color: "var(--ink)", marginTop: 6 }}
            >
              {t("empty_t")}
            </p>
            <p
              style={{
                fontSize: 13,
                color: "var(--ink-dim)",
                marginTop: 4,
              }}
            >
              {t("empty_b")}
            </p>
          </div>
        </div>

        {/* Drafts / placeholder posts */}
        <div className="flex flex-col" style={{ marginTop: 48, gap: 16 }}>
          {posts.map((p) => (
            <article
              key={p.title}
              style={{
                padding: 24,
                borderRadius: 12,
                background: "var(--night-card)",
                border: "1px solid var(--line)",
                opacity: 0.6,
              }}
            >
              <header className="flex items-center" style={{ gap: 14 }}>
                <span
                  className="font-mono"
                  style={{ fontSize: 11, color: "var(--ink-muted)" }}
                >
                  {p.date}
                </span>
                <span
                  className="font-bold uppercase"
                  style={{
                    fontSize: 9,
                    color: "var(--gold)",
                    letterSpacing: "0.14em",
                    padding: "2px 8px",
                    background: "var(--gold-soft)",
                    borderRadius: 999,
                  }}
                >
                  {p.tag}
                </span>
              </header>
              <h2
                className="display"
                style={{ fontSize: 26, color: "var(--ink)", marginTop: 12 }}
              >
                {p.title}
              </h2>
              <p
                className="mt-2"
                style={{
                  fontSize: 14,
                  color: "var(--ink-dim)",
                  lineHeight: 1.6,
                  marginTop: 8,
                }}
              >
                {p.body}
              </p>
            </article>
          ))}
        </div>

        <div
          className="mt-12 flex flex-wrap"
          style={{ gap: 12, marginTop: 48 }}
        >
          <Link
            href="/changelog"
            className="tap inline-flex items-center gap-2 font-semibold"
            style={{
              height: 44,
              padding: "0 20px",
              background: "transparent",
              color: "var(--ink)",
              border: "1px solid var(--line-strong)",
              borderRadius: 6,
              fontSize: 13,
            }}
          >
            {t("cta_changelog")}
            <Icon name="arrow" size={14} />
          </Link>
          <a
            href="https://x.com/passexplorer"
            target="_blank"
            rel="noopener noreferrer"
            className="tap inline-flex items-center gap-2 font-semibold"
            style={{
              height: 44,
              padding: "0 20px",
              background: "transparent",
              color: "var(--ink)",
              border: "1px solid var(--line-strong)",
              borderRadius: 6,
              fontSize: 13,
            }}
          >
            {t("cta_x")}
            <Icon name="arrow" size={14} />
          </a>
        </div>
      </section>
    </PageShell>
  );
}
