"use client";

import Link from "next/link";

import { Icon } from "@/components/primitives";
import { festivalsDict } from "@/lib/i18n/dicts/festivals";
import { useT } from "@/lib/i18n";

import { LandingMarketplacePreview } from "../_components/landing-marketplace";
import { PageShell } from "../_components/page-shell";

/**
 * /festivals — pre-launch festival preview.
 *
 * Reuses the LandingMarketplacePreview component (same 6 festival cards
 * the landing page shows) so visitors landing here can see what's
 * coming. Plus an explainer about why the list is intentionally short.
 */

export default function FestivalsPage() {
  const t = useT(festivalsDict);
  return (
    <PageShell active="festivals">
      <section
        className="mx-auto"
        style={{ padding: "100px 48px 40px", maxWidth: 1240 }}
      >
        <div className="flex items-center" style={{ gap: 12, marginBottom: 20 }}>
          <p className="eyebrow" style={{ color: "var(--gold)" }}>
            {t("eyebrow")}
          </p>
          <span
            className="font-bold uppercase"
            style={{
              fontSize: 10,
              padding: "3px 10px",
              borderRadius: 999,
              background: "var(--purple-soft)",
              color: "var(--purple)",
              letterSpacing: "0.12em",
            }}
          >
            {t("pill")}
          </span>
        </div>
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
            maxWidth: 720,
          }}
        >
          {t("lede")}
        </p>

        <div className="mt-10 flex flex-wrap" style={{ gap: 12 }}>
          <Link
            href="/#waitlist"
            className="tap inline-flex items-center gap-2 font-semibold"
            style={{
              height: 48,
              padding: "0 22px",
              background: "var(--gold)",
              color: "var(--night)",
              borderRadius: 6,
              fontSize: 13,
              letterSpacing: "0.02em",
            }}
          >
            {t("cta_join")}
            <Icon name="arrow" size={16} />
          </Link>
          <Link
            href="/docs"
            className="tap inline-flex items-center gap-2 font-semibold"
            style={{
              height: 48,
              padding: "0 22px",
              background: "transparent",
              color: "var(--ink)",
              border: "1px solid var(--line-strong)",
              borderRadius: 6,
              fontSize: 13,
              letterSpacing: "0.02em",
            }}
          >
            {t("cta_docs")}
          </Link>
        </div>
      </section>

      <LandingMarketplacePreview />

      <section
        className="mx-auto"
        style={{ padding: "20px 48px 100px", maxWidth: 1240 }}
      >
        <div
          style={{
            padding: 24,
            borderRadius: 12,
            background: "var(--night-card)",
            border: "1px solid var(--line)",
          }}
        >
          <p
            className="display"
            style={{ fontSize: 22, color: "var(--gold)", margin: 0 }}
          >
            {t("why")}
          </p>
          <p
            className="mt-3"
            style={{
              fontSize: 14,
              color: "var(--ink-dim)",
              lineHeight: 1.6,
              maxWidth: 720,
              marginTop: 12,
            }}
          >
            {t("why_body")}
          </p>
        </div>
      </section>
    </PageShell>
  );
}
