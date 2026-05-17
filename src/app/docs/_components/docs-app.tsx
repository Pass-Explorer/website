"use client";

import * as React from "react";
import Link from "next/link";

import { Icon, LangSelector, Wordmark } from "@/components/primitives";
import { docsDict } from "@/lib/i18n/dicts/docs";
import { useT } from "@/lib/i18n";

/**
 * DocsApp — single-page docs site with sidebar nav and content swap.
 *
 * Sticky header (Wordmark + gold "Docs" pill + search input + apply CTA),
 * left sidebar grouped by topic (Get started / Event / Revenue /
 * Operations) with active gold border, center content well, right TOC
 * rail. 8 sections, all bilingual via useT(docsDict).
 */

type Section =
  | "getting-started"
  | "apply"
  | "deploy-event"
  | "pricing-cap"
  | "royalty"
  | "checkin"
  | "refund"
  | "tax";

type T = (k: keyof (typeof docsDict)["en"]) => string;

export function DocsApp() {
  const t = useT(docsDict);
  const [section, setSection] = React.useState<Section>("getting-started");

  return (
    <div className="bg-night text-ink font-body min-h-dvh">
      <Header t={t} />
      <div
        className="mx-auto grid"
        style={{
          maxWidth: 1400,
          gridTemplateColumns: "240px 1fr 220px",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        <Sidebar t={t} active={section} onPick={setSection} />
        <main className="min-w-0 px-14 py-15" style={{ padding: "60px 56px" }}>
          {section === "getting-started" && <DocGettingStarted t={t} />}
          {section === "apply"            && <DocApply t={t} />}
          {section === "deploy-event"     && <DocDeployEvent t={t} />}
          {section === "pricing-cap"      && <DocPricingCap t={t} />}
          {section === "royalty"          && <DocRoyalty t={t} />}
          {section === "checkin"          && <DocCheckin t={t} />}
          {section === "refund"           && <DocRefund t={t} />}
          {section === "tax"              && <DocTax t={t} />}
        </main>
        <TOC t={t} />
      </div>
    </div>
  );
}

// ─── Chrome ──────────────────────────────────────────────────────────

function Header({ t }: { t: T }) {
  return (
    <header
      className="sticky top-0 z-30 flex items-center justify-between border-b backdrop-blur-md"
      style={{
        height: 64,
        padding: "0 48px",
        background: "rgba(8,8,16,0.6)",
        borderColor: "var(--line)",
      }}
    >
      <div className="flex items-center gap-4">
        <Link href="/">
          <Wordmark size={14} />
        </Link>
        <span
          className="font-bold uppercase"
          style={{
            fontSize: 11,
            color: "var(--gold)",
            letterSpacing: "0.14em",
            padding: "4px 10px",
            background: "var(--gold-soft)",
            borderRadius: 999,
          }}
        >
          {t("pill")}
        </span>
      </div>
      <div className="flex items-center gap-3.5">
        <div
          className="hidden items-center gap-2 md:flex"
          style={{
            height: 32,
            padding: "0 14px",
            borderRadius: 6,
            background: "var(--night-card)",
            border: "1px solid var(--line)",
            color: "var(--ink-muted)",
            fontSize: 12,
            minWidth: 280,
          }}
        >
          <Icon name="search" size={14} />
          <span className="flex-1">{t("search")}</span>
          <span
            className="font-mono"
            style={{
              fontSize: 10,
              padding: "2px 6px",
              background: "rgba(255,255,255,0.06)",
              borderRadius: 4,
            }}
          >
            ⌘ K
          </span>
        </div>
        <Link href="/faq" style={{ fontSize: 12, color: "var(--ink-dim)" }}>
          {t("nav_faq")}
        </Link>
        <Link
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
          {t("nav_apply")}
        </Link>

        <LangSelector />
      </div>
    </header>
  );
}

function Sidebar({
  t,
  active,
  onPick,
}: {
  t: T;
  active: Section;
  onPick: (s: Section) => void;
}) {
  const groups: { title: string; items: { id: Section; label: string }[] }[] = [
    {
      title: t("g_start"),
      items: [
        { id: "getting-started", label: t("s_overview") },
        { id: "apply",           label: t("s_apply")    },
      ],
    },
    {
      title: t("g_event"),
      items: [
        { id: "deploy-event", label: t("s_deploy")  },
        { id: "pricing-cap",  label: t("s_pricing") },
      ],
    },
    {
      title: t("g_revenue"),
      items: [
        { id: "royalty", label: t("s_royalty") },
        { id: "refund",  label: t("s_refund")  },
      ],
    },
    {
      title: t("g_ops"),
      items: [
        { id: "checkin", label: t("s_checkin") },
        { id: "tax",     label: t("s_tax")     },
      ],
    },
  ];

  return (
    <aside
      className="sticky self-start overflow-y-auto"
      style={{
        borderRight: "1px solid var(--line)",
        padding: "60px 28px",
        top: 64,
        height: "calc(100vh - 64px)",
      }}
    >
      {groups.map((g) => (
        <div key={g.title} className="mb-7">
          <p
            className="font-bold uppercase mb-2.5"
            style={{
              fontSize: 10,
              color: "var(--ink-muted)",
              letterSpacing: "0.18em",
            }}
          >
            {g.title}
          </p>
          <nav className="flex flex-col gap-0.5">
            {g.items.map((it) => (
              <button
                key={it.id}
                onClick={() => onPick(it.id)}
                className="text-left font-medium"
                style={{
                  padding: "8px 12px",
                  borderRadius: 4,
                  fontSize: 13,
                  background:
                    active === it.id ? "var(--gold-soft)" : "transparent",
                  color:
                    active === it.id ? "var(--gold)" : "var(--ink-dim)",
                  borderLeft:
                    active === it.id
                      ? "2px solid var(--gold)"
                      : "2px solid transparent",
                }}
              >
                {it.label}
              </button>
            ))}
          </nav>
        </div>
      ))}
    </aside>
  );
}

function TOC({ t }: { t: T }) {
  const links = [
    t("toc_intro"),
    t("toc_prereq"),
    t("toc_steps"),
    t("toc_edge"),
    t("toc_next"),
  ];
  return (
    <aside
      className="sticky self-start overflow-y-auto"
      style={{
        padding: "60px 28px",
        top: 64,
        height: "calc(100vh - 64px)",
      }}
    >
      <p
        className="font-bold uppercase mb-3"
        style={{
          fontSize: 10,
          color: "var(--ink-muted)",
          letterSpacing: "0.18em",
        }}
      >
        {t("toc_title")}
      </p>
      <nav
        className="flex flex-col gap-1.5"
        style={{ borderLeft: "1px solid var(--line)" }}
      >
        {links.map((l) => (
          <a
            key={l}
            href="#"
            className="text-left"
            style={{
              padding: "4px 12px",
              fontSize: 12,
              color: "var(--ink-muted)",
            }}
          >
            {l}
          </a>
        ))}
      </nav>
    </aside>
  );
}

// ─── Reusable content primitives ─────────────────────────────────────

function DocHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="mb-12">
      <p
        className="font-bold uppercase mb-3"
        style={{
          fontSize: 11,
          color: "var(--gold)",
          letterSpacing: "0.18em",
        }}
      >
        {eyebrow}
      </p>
      <h1
        className="display"
        style={{
          fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
          margin: 0,
          lineHeight: 0.95,
        }}
      >
        {title}
      </h1>
      {lead && (
        <p
          className="mt-4 max-w-2xl"
          style={{
            fontSize: 17,
            color: "var(--ink-dim)",
            lineHeight: 1.6,
          }}
        >
          {lead}
        </p>
      )}
    </header>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="display"
      style={{
        fontSize: 26,
        margin: "40px 0 16px",
        color: "var(--ink)",
      }}
    >
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="mt-3 max-w-3xl"
      style={{ fontSize: 15, color: "var(--ink-dim)", lineHeight: 1.7 }}
    >
      {children}
    </p>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <pre
      className="font-mono overflow-x-auto"
      style={{
        fontSize: 13,
        lineHeight: 1.7,
        background: "var(--night-card)",
        border: "1px solid var(--line)",
        borderRadius: 8,
        padding: "16px 20px",
        margin: "16px 0",
        color: "var(--ink-dim)",
      }}
    >
      {children}
    </pre>
  );
}

function Callout({
  tone = "gold",
  title,
  children,
}: {
  tone?: "gold" | "sage" | "purple" | "red";
  title?: string;
  children: React.ReactNode;
}) {
  const colors = {
    gold:   "var(--gold)",
    sage:   "var(--sage)",
    purple: "var(--purple)",
    red:    "var(--red)",
  };
  const bgs = {
    gold:   "var(--gold-soft)",
    sage:   "var(--sage-soft)",
    purple: "var(--purple-soft)",
    red:    "rgba(242,109,91,0.08)",
  };
  return (
    <div
      className="flex gap-3.5"
      style={{
        margin: "20px 0",
        padding: 18,
        borderRadius: 8,
        background: bgs[tone],
        border: `1px solid ${colors[tone]}`,
      }}
    >
      <Icon
        name="info"
        size={18}
        style={{ color: colors[tone], flexShrink: 0, marginTop: 2 }}
      />
      <div>
        {title && (
          <p
            className="font-bold"
            style={{ fontSize: 13, color: colors[tone], marginBottom: 4 }}
          >
            {title}
          </p>
        )}
        <div
          style={{
            fontSize: 13,
            color: "var(--ink-dim)",
            lineHeight: 1.6,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function Steps({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  return (
    <ol className="m-0 flex flex-col gap-3.5 p-0" style={{ listStyle: "none" }}>
      {items.map((it, i) => (
        <li
          key={i}
          className="flex gap-3.5"
          style={{
            padding: 16,
            borderRadius: 8,
            background: "var(--night-card)",
            border: "1px solid var(--line)",
          }}
        >
          <span
            className="display grid shrink-0 place-items-center"
            style={{
              width: 28,
              height: 28,
              borderRadius: 999,
              background: "var(--gold)",
              color: "var(--night)",
              fontSize: 16,
            }}
          >
            {i + 1}
          </span>
          <div>
            <p
              className="font-semibold"
              style={{ fontSize: 14, color: "var(--ink)" }}
            >
              {it.title}
            </p>
            <p
              className="mt-1"
              style={{
                fontSize: 13,
                color: "var(--ink-muted)",
                lineHeight: 1.6,
              }}
            >
              {it.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

// ─── Doc sections ────────────────────────────────────────────────────

function DocGettingStarted({ t }: { t: T }) {
  return (
    <article>
      <DocHero eyebrow={t("gs_eyebrow")} title={t("gs_title")} lead={t("gs_lead")} />
      <H2>{t("gs_h1")}</H2>
      <P>{t("gs_p1")}</P>
      <Callout tone="gold" title={t("gs_call_t")}>
        {t("gs_call_b")}
      </Callout>
      <H2>{t("gs_h2")}</H2>
      <Steps
        items={[
          { title: t("gs_st1_t"), body: t("gs_st1_b") },
          { title: t("gs_st2_t"), body: t("gs_st2_b") },
          { title: t("gs_st3_t"), body: t("gs_st3_b") },
          { title: t("gs_st4_t"), body: t("gs_st4_b") },
        ]}
      />
    </article>
  );
}

function DocApply({ t }: { t: T }) {
  return (
    <article>
      <DocHero eyebrow={t("ap_eyebrow")} title={t("ap_title")} lead={t("ap_lead")} />
      <H2>{t("ap_h1")}</H2>
      <P>{t("ap_p1")}</P>
      <H2>{t("ap_h2")}</H2>
      <Steps
        items={[
          { title: t("ap_st1_t"), body: t("ap_st1_b") },
          { title: t("ap_st2_t"), body: t("ap_st2_b") },
          { title: t("ap_st3_t"), body: t("ap_st3_b") },
        ]}
      />
      <Callout tone="purple" title={t("ap_call_t")}>
        {t("ap_call_b")}
      </Callout>
    </article>
  );
}

function DocDeployEvent({ t }: { t: T }) {
  return (
    <article>
      <DocHero eyebrow={t("de_eyebrow")} title={t("de_title")} lead={t("de_lead")} />
      <H2>{t("de_h1")}</H2>
      <Steps
        items={[
          { title: t("de_st1_t"), body: t("de_st1_b") },
          { title: t("de_st2_t"), body: t("de_st2_b") },
          { title: t("de_st3_t"), body: t("de_st3_b") },
          { title: t("de_st4_t"), body: t("de_st4_b") },
        ]}
      />
      <H2>{t("de_h2")}</H2>
      <Code>{`Factory.deploy_event({
  event_name,
  event_date,        // unix seconds
  venue,
  description,
  max_supply,
  primary_price,     // stroops (u128)
  max_resale_price,  // stroops (u128)
  royalty_percentage // basis points
})`}</Code>
      <Callout tone="gold" title={t("de_call_t")}>
        {t("de_call_b")}
      </Callout>
    </article>
  );
}

function DocPricingCap({ t }: { t: T }) {
  return (
    <article>
      <DocHero eyebrow={t("pc_eyebrow")} title={t("pc_title")} lead={t("pc_lead")} />
      <H2>{t("pc_h1")}</H2>
      <P>{t("pc_p1")}</P>
      <Code>{`// Marketplace.list_ticket()
require(price <= EventNFT.max_resale_price, "above cap");`}</Code>
      <H2>{t("pc_h2")}</H2>
      <P>{t("pc_p2")}</P>
    </article>
  );
}

function DocRoyalty({ t }: { t: T }) {
  return (
    <article>
      <DocHero eyebrow={t("ry_eyebrow")} title={t("ry_title")} lead={t("ry_lead")} />
      <H2>{t("ry_h1")}</H2>
      <P>{t("ry_p1")}</P>
      <Code>{`buyer pays:        100 XLM
  ↓
seller receives:    93 XLM
organizer royalty:  5 XLM   (5%)
platform fee:       2 XLM`}</Code>
      <Callout tone="purple" title={t("ry_call_t")}>
        {t("ry_call_b")}
      </Callout>
    </article>
  );
}

function DocCheckin({ t }: { t: T }) {
  return (
    <article>
      <DocHero eyebrow={t("ck_eyebrow")} title={t("ck_title")} lead={t("ck_lead")} />
      <H2>{t("ck_h1")}</H2>
      <P>{t("ck_p1")}</P>
      <H2>{t("ck_h2")}</H2>
      <Steps
        items={[
          { title: t("ck_st1_t"), body: t("ck_st1_b") },
          { title: t("ck_st2_t"), body: t("ck_st2_b") },
          { title: t("ck_st3_t"), body: t("ck_st3_b") },
          { title: t("ck_st4_t"), body: t("ck_st4_b") },
        ]}
      />
    </article>
  );
}

function DocRefund({ t }: { t: T }) {
  return (
    <article>
      <DocHero eyebrow={t("rf_eyebrow")} title={t("rf_title")} lead={t("rf_lead")} />
      <H2>{t("rf_h1")}</H2>
      <P>{t("rf_p1")}</P>
      <Callout tone="red" title={t("rf_call_t")}>
        {t("rf_call_b")}
      </Callout>
    </article>
  );
}

function DocTax({ t }: { t: T }) {
  return (
    <article>
      <DocHero eyebrow={t("tx_eyebrow")} title={t("tx_title")} lead={t("tx_lead")} />
      <H2>{t("tx_h1")}</H2>
      <P>{t("tx_p1")}</P>
      <Callout tone="gold" title={t("tx_call_t")}>
        {t("tx_call_b")}
      </Callout>
    </article>
  );
}
