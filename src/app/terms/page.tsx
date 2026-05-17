import type { Metadata } from "next";

import { PageShell } from "../_components/page-shell";

export const metadata: Metadata = {
  title: "Terms of service",
};

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Terms of service"
      title="The contract behind the contract."
      lede="By using Pass Explorer you agree to these terms. They're written to be readable, not to hide things."
    >
      <article
        className="flex flex-col gap-6"
        style={{ color: "var(--ink-dim)", fontSize: 14, lineHeight: 1.7 }}
      >
        <p>
          <strong style={{ color: "var(--ink)" }}>1. The service.</strong> Pass
          Explorer is a marketplace for festival tickets minted as NFTs on the
          Stellar network. We don't issue tickets ourselves — organizers do.
          We provide the discovery, custody, and settlement rails.
        </p>
        <p>
          <strong style={{ color: "var(--ink)" }}>2. Your wallet.</strong> Your
          Stellar wallet is provisioned by Privy via social custody (TEE +
          Shamir Secret Sharing). You can export your private key at any time.
          We never see it.
        </p>
        <p>
          <strong style={{ color: "var(--ink)" }}>3. Resale terms.</strong> Each
          event sets a maximum resale price (cap) and a royalty percentage. The
          smart contract enforces both. You can list at any price ≤ cap; the
          royalty is deducted automatically on settlement.
        </p>
        <p>
          <strong style={{ color: "var(--ink)" }}>4. Refunds.</strong> The
          on-chain transaction is final. If the event is cancelled, the
          organizer is responsible for the refund flow per their own policy.
          We surface their policy on every event page.
        </p>
        <p>
          <strong style={{ color: "var(--ink)" }}>5. Platform fee.</strong> A
          small fee per transaction goes to Pass Explorer. It's set on-chain
          and visible in the buy/sell split before you sign.
        </p>
        <p>
          <strong style={{ color: "var(--ink)" }}>6. Jurisdiction.</strong>{" "}
          Brazil. Disputes are settled under Brazilian consumer law.
        </p>
        <p
          className="font-mono pt-4"
          style={{
            fontSize: 11,
            color: "var(--ink-quiet)",
            letterSpacing: "0.06em",
          }}
        >
          Last updated: 2026-05-14 · v0.1
        </p>
      </article>
    </PageShell>
  );
}
