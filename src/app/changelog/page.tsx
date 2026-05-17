"use client";

import { changelogDict } from "@/lib/i18n/dicts/changelog";
import { useT } from "@/lib/i18n";

import { PageShell } from "../_components/page-shell";

type ItemType = "feat" | "fix" | "chore";

interface Entry {
  v: string;
  d: string;
  tag: string;
  items: { type: ItemType; t: string }[];
}

export default function ChangelogPage() {
  const t = useT(changelogDict);

  const ENTRIES: Entry[] = [
    {
      v: t("e1_v"),
      d: t("e1_d"),
      tag: t("e1_tag"),
      items: [
        { type: "feat", t: t("e1_i1") },
        { type: "feat", t: t("e1_i2") },
        { type: "feat", t: t("e1_i3") },
      ],
    },
    {
      v: t("e2_v"),
      d: t("e2_d"),
      tag: t("e2_tag"),
      items: [
        { type: "feat", t: t("e2_i1") },
        { type: "feat", t: t("e2_i2") },
        { type: "feat", t: t("e2_i3") },
        { type: "fix",  t: t("e2_i4") },
      ],
    },
    {
      v: t("e3_v"),
      d: t("e3_d"),
      tag: t("e3_tag"),
      items: [
        { type: "feat", t: t("e3_i1") },
        { type: "feat", t: t("e3_i2") },
      ],
    },
    {
      v: t("e4_v"),
      d: t("e4_d"),
      tag: t("e4_tag"),
      items: [
        { type: "feat", t: t("e4_i1") },
        { type: "feat", t: t("e4_i2") },
        { type: "feat", t: t("e4_i3") },
      ],
    },
    {
      v: t("e5_v"),
      d: t("e5_d"),
      tag: t("e5_tag"),
      items: [
        { type: "feat", t: t("e5_i1") },
        { type: "feat", t: t("e5_i2") },
        { type: "feat", t: t("e5_i3") },
      ],
    },
  ];

  const COLORS: Record<ItemType, string> = {
    feat:  "var(--sage)",
    fix:   "var(--gold)",
    chore: "var(--ink-muted)",
  };

  const LABELS: Record<ItemType, string> = {
    feat:  t("feat"),
    fix:   t("fix"),
    chore: t("chore"),
  };

  return (
    <PageShell>
      <section
        className="mx-auto"
        style={{ padding: "100px 48px 80px", maxWidth: 800 }}
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
          {t("title")}
        </h1>
        <p
          style={{
            fontSize: 15,
            color: "var(--ink-dim)",
            lineHeight: 1.6,
            marginTop: 24,
          }}
        >
          {t("lede")}
        </p>

        <div className="flex flex-col" style={{ marginTop: 60, gap: 32 }}>
          {ENTRIES.map((e) => (
            <article
              key={e.v}
              style={{
                padding: 24,
                borderRadius: 10,
                background: "var(--night-card)",
                border: "1px solid var(--line)",
              }}
            >
              <header
                className="flex items-baseline justify-between"
                style={{ marginBottom: 16 }}
              >
                <div className="flex items-baseline" style={{ gap: 14 }}>
                  <span
                    className="display"
                    style={{ fontSize: 32, color: "var(--gold)" }}
                  >
                    {e.v}
                  </span>
                  <span
                    className="uppercase"
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "var(--ink-muted)",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {e.tag}
                  </span>
                </div>
                <span
                  className="font-mono"
                  style={{ fontSize: 11, color: "var(--ink-muted)" }}
                >
                  {e.d}
                </span>
              </header>
              <ul
                className="flex flex-col"
                style={{ gap: 10, listStyle: "none", margin: 0, padding: 0 }}
              >
                {e.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-baseline"
                    style={{ gap: 12 }}
                  >
                    <span
                      className="uppercase"
                      style={{
                        fontSize: 9,
                        fontWeight: 700,
                        color: COLORS[item.type],
                        width: 42,
                        letterSpacing: "0.1em",
                      }}
                    >
                      {LABELS[item.type]}
                    </span>
                    <span
                      style={{
                        fontSize: 14,
                        color: "var(--ink-dim)",
                        lineHeight: 1.5,
                      }}
                    >
                      {item.t}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
