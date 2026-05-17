"use client";

import Link from "next/link";

import { Icon } from "@/components/primitives";
import { landingDict } from "@/lib/i18n/dicts/landing";
import { useT } from "@/lib/i18n";

/**
 * LandingForOrganizers — split layout with copy + mock royalty dashboard.
 *
 * Ported from web-landing.jsx LandingForOrganizers. Left side: purple
 * eyebrow + Bebas pitch + body + 4 stat tiles + ghost CTA. Right side:
 * mock dashboard panel with royalty hero + 12-pt purple sparkline +
 * 3-row recent royalty stream.
 */

export function LandingForOrganizers() {
  const t = useT(landingDict);
  return (
    <section
      className="bg-night-mid relative overflow-hidden"
      style={{ padding: "120px 48px" }}
    >
      <div
        className="mx-auto grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]"
        style={{ maxWidth: 1240, gap: 80 }}
      >
        {/* Left: pitch */}
        <div>
          <p
            className="eyebrow mb-4"
            style={{ color: "var(--purple)" }}
          >
            {t("org_eyebrow")}
          </p>
          <h2
            className="display"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              lineHeight: 0.95,
              margin: 0,
            }}
          >
            {t("org_title_a")}{" "}
            <span style={{ color: "var(--purple)" }}>{t("org_title_b")}</span>
          </h2>
          <p
            className="mt-6 max-w-xl"
            style={{
              fontSize: 17,
              lineHeight: 1.55,
              color: "var(--ink-dim)",
            }}
          >
            {t("org_body")}
          </p>
          <div className="mt-8 grid max-w-xl grid-cols-2 gap-3.5">
            {[
              { v: "1.2k", l: t("org_stat_cap_l"),     suffix: "XLM" },
              { v: "23",   l: t("org_stat_sales_l"),   suffix: "" },
              { v: "5%",   l: t("org_stat_default_l"), suffix: "" },
              { v: "0",    l: t("org_stat_zero_l"),    suffix: "" },
            ].map((s) => (
              <div
                key={s.l}
                style={{
                  padding: 16,
                  borderRadius: 8,
                  background: "rgba(155,127,232,0.06)",
                  border: "1px solid rgba(155,127,232,0.25)",
                }}
              >
                <p
                  className="display tabular-nums whitespace-nowrap"
                  style={{ fontSize: 26, color: "var(--purple)" }}
                >
                  {s.v}
                  {s.suffix && (
                    <span style={{ fontSize: 14, marginLeft: 4 }}>
                      {s.suffix}
                    </span>
                  )}
                </p>
                <p
                  className="mt-1"
                  style={{ fontSize: 11, color: "var(--ink-muted)" }}
                >
                  {s.l}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/docs#apply"
            className="tap mt-8 inline-flex items-center gap-2 font-semibold"
            style={{
              height: 50,
              padding: "0 24px",
              background: "transparent",
              color: "var(--purple)",
              border: "1px solid var(--purple)",
              borderRadius: 6,
              fontSize: 14,
              letterSpacing: "0.02em",
            }}
          >
            {t("org_cta")}
            <Icon name="arrow" size={16} />
          </Link>
        </div>

        {/* Right: mock dashboard preview */}
        <div
          className="relative"
          style={{
            background: "var(--night)",
            border: "1px solid var(--line-strong)",
            borderRadius: 14,
            padding: 22,
            boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
          }}
        >
          <div className="mb-5 flex items-baseline justify-between">
            <div>
              <p className="eyebrow" style={{ color: "var(--ink-muted)" }}>
                {t("org_dash_label")}
              </p>
              <p
                className="display tabular-nums mt-1 whitespace-nowrap"
                style={{ fontSize: 32, color: "var(--purple)" }}
              >
                +1,247 XLM
              </p>
            </div>
            <span
              className="font-mono"
              style={{ fontSize: 11, color: "var(--sage)" }}
            >
              ↑ 12.4% MoM
            </span>
          </div>

          {/* tiny chart */}
          <svg
            width="100%"
            height="80"
            viewBox="0 0 400 80"
            aria-hidden="true"
          >
            {[14, 22, 18, 28, 35, 30, 42, 38, 51, 48, 56, 62].map(
              (v, i, arr) => {
                const x = (i / (arr.length - 1)) * 400;
                const y = 80 - (v / 70) * 70;
                const next = arr[i + 1];
                if (next === undefined) return null;
                const nx = ((i + 1) / (arr.length - 1)) * 400;
                const ny = 80 - (next / 70) * 70;
                return (
                  <line
                    key={i}
                    x1={x}
                    y1={y}
                    x2={nx}
                    y2={ny}
                    stroke="var(--purple)"
                    strokeWidth="2"
                  />
                );
              },
            )}
            <path
              d={`M 0 80 ${[14, 22, 18, 28, 35, 30, 42, 38, 51, 48, 56, 62]
                .map(
                  (v, i, arr) =>
                    `L ${(i / (arr.length - 1)) * 400} ${80 - (v / 70) * 70}`,
                )
                .join(" ")} L 400 80 Z`}
              fill="var(--purple)"
              opacity="0.12"
            />
          </svg>

          {/* recent stream */}
          <div
            className="mt-5"
            style={{
              padding: 14,
              background: "var(--night-card)",
              borderRadius: 8,
            }}
          >
            {[
              { event: "Sunset Pass · #1247", amount: 25, ago: "2 min" },
              { event: "Forest Fest · #0892", amount: 18, ago: "14 min" },
              { event: "Sunset Pass · #1248", amount: 25, ago: "32 min" },
            ].map((r, i, arr) => (
              <div
                key={i}
                className="flex justify-between"
                style={{
                  padding: "6px 0",
                  borderBottom:
                    i < arr.length - 1
                      ? "1px solid rgba(255,255,255,0.04)"
                      : "none",
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: 999,
                      background: "var(--purple)",
                    }}
                  />
                  <span style={{ fontSize: 12, color: "var(--ink)" }}>
                    {r.event}
                  </span>
                  <span
                    style={{ fontSize: 10, color: "var(--ink-muted)" }}
                  >
                    {r.ago}
                  </span>
                </div>
                <span
                  className="display tabular-nums"
                  style={{ fontSize: 15, color: "var(--purple)" }}
                >
                  +{r.amount} XLM
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
