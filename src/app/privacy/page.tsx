"use client";

import { Icon } from "@/components/primitives";
import { privacyDict } from "@/lib/i18n/dicts/privacy";
import { useT } from "@/lib/i18n";

import { PageShell } from "../_components/page-shell";

type Item = [string, string];

export default function PrivacyPage() {
  const t = useT(privacyDict);

  const COLLECT: Item[] = [
    [t("c_1k"), t("c_1v")],
    [t("c_2k"), t("c_2v")],
    [t("c_3k"), t("c_3v")],
    [t("c_4k"), t("c_4v")],
  ];

  const DONT: Item[] = [
    [t("d_1k"), t("d_1v")],
    [t("d_2k"), t("d_2v")],
    [t("d_3k"), t("d_3v")],
    [t("d_4k"), t("d_4v")],
  ];

  const RIGHTS: Item[] = [
    [t("r_1k"), t("r_1v")],
    [t("r_2k"), t("r_2v")],
    [t("r_3k"), t("r_3v")],
    [t("r_4k"), t("r_4v")],
    [t("r_5k"), t("r_5v")],
  ];

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

        <div
          className="flex flex-col"
          style={{ marginTop: 60, gap: 32 }}
        >
          <PrivacyBlock t={t("block_collect")} items={COLLECT} />
          <PrivacyBlock t={t("block_dont")}    items={DONT}    />
          <PrivacyBlock t={t("block_rights")}  items={RIGHTS}  />
        </div>

        <div
          style={{
            marginTop: 60,
            padding: 24,
            borderRadius: 10,
            background: "var(--night-card)",
            border: "1px solid var(--purple)",
          }}
        >
          <div className="flex items-start" style={{ gap: 14 }}>
            <span style={{ color: "var(--purple)", flexShrink: 0, marginTop: 2 }}>
              <Icon name="shield" size={24} />
            </span>
            <div>
              <p
                className="display"
                style={{ fontSize: 22, color: "var(--purple)", margin: 0 }}
              >
                {t("dpo_title")}
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--ink-dim)",
                  marginTop: 6,
                  lineHeight: 1.6,
                }}
              >
                {t("dpo_body")}
                <br />
                {t("dpo_eta")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function PrivacyBlock({ t, items }: { t: string; items: Item[] }) {
  return (
    <div>
      <h2
        className="display"
        style={{ fontSize: 32, color: "var(--gold)", margin: 0 }}
      >
        {t}
      </h2>
      <div
        style={{
          marginTop: 16,
          background: "var(--night-card)",
          borderRadius: 10,
          border: "1px solid var(--line)",
        }}
      >
        {items.map(([k, v], i) => (
          <div
            key={k}
            className="grid"
            style={{
              gridTemplateColumns: "200px 1fr",
              gap: 24,
              padding: "14px 20px",
              borderBottom:
                i < items.length - 1 ? "1px solid var(--line)" : "none",
            }}
          >
            <span
              style={{ fontSize: 12, fontWeight: 600, color: "var(--ink)" }}
            >
              {k}
            </span>
            <span style={{ fontSize: 13, color: "var(--ink-dim)" }}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
