import type { Metadata } from "next";

import { Icon } from "@/components/primitives";

import { PageShell } from "../_components/page-shell";

export const metadata: Metadata = {
  title: "Privacy",
};

type Item = [string, string];

const COLLECT: Item[] = [
  ["Email · Google ID", "For account creation via Privy. We don't sell."],
  ["Stellar address", "Your wallet. Public on-chain by nature."],
  ["Purchase history", "To show your tickets and history. Public on-chain."],
  ["Usage data", "PostHog product analytics. Anonymous by default."],
];

const DONT_COLLECT: Item[] = [
  ["CPF · ID document", "We don't ask. KYC is for organizers only."],
  ["Credit card", "Payment is XLM or Anchor — we never touch the card."],
  ["Precise location", "No GPS. City only if you fill it in your profile."],
  ["Third-party cookies", "No cross-site tracking."],
];

const RIGHTS: Item[] = [
  ["Access", "Download all your data at /profile → \"Export data\"."],
  ["Correction", "Edit your profile at any time."],
  ["Deletion", "Request via dpo@passexplorer.com. On-chain data is immutable."],
  ["Portability", "Receive your data in structured JSON format."],
  ["Revocation", "Cancel consents at /profile → \"Notifications\"."],
];

export default function PrivacyPage() {
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
          Privacy · LGPD compliant · v1.0
        </p>
        <h1
          className="display"
          style={{
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            lineHeight: 0.92,
            margin: 0,
          }}
        >
          Privacy policy
        </h1>
        <p
          style={{
            fontSize: 15,
            color: "var(--ink-dim)",
            lineHeight: 1.6,
            marginTop: 24,
          }}
        >
          Your privacy matters. This policy describes what data we collect, why,
          and how you can control it. Per LGPD (Law no. 13.709/2018).
        </p>

        <div
          className="flex flex-col"
          style={{ marginTop: 60, gap: 32 }}
        >
          <PrivacyBlock t="What we collect" items={COLLECT} />
          <PrivacyBlock t="What we DON'T collect" items={DONT_COLLECT} />
          <PrivacyBlock t="Your rights (LGPD)" items={RIGHTS} />
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
                DPO · Data Protection Officer
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--ink-dim)",
                  marginTop: 6,
                  lineHeight: 1.6,
                }}
              >
                dpo@passexplorer.com · Av. Paulista, 1234 · Conj 567 · São Paulo
                SP 01310-100
                <br />
                Average response time: 5 business days · LGPD complaint via
                ANPD: gov.br/anpd
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
