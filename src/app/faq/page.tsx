import type { Metadata } from "next";

import { PageShell } from "../_components/page-shell";

import { FAQAccordion } from "./_components/faq-accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Pass Explorer.",
};

/**
 * FAQ — ported from temp/PassExplorer (1) PageFAQ.
 *
 * Hero "We explain.", lede with support email, accordion of 10 questions
 * with the prototype's rotating + icon (becomes × at 45° when open).
 * Active "FAQ" nav highlight via PageShell active prop.
 */

const FAQS: { q: string; a: string }[] = [
  {
    q: "Do I need to understand crypto to use this?",
    a: "No. You sign in with email or Google. Privy creates your Stellar wallet automatically via Trusted Execution Environment + Shamir Secret Sharing. No seed phrase, no wallet app. The experience is the same as any modern marketplace.",
  },
  {
    q: "Why Stellar and not another blockchain?",
    a: "Speed (3–5s finality), sub-cent fees (viable for $10–$500 tickets), and a borderless architecture that fits the international profile of festivals. Soroban gives mature smart contracts without Ethereum's absurd gas costs.",
  },
  {
    q: "Is the ticket really mine? Can I transfer it?",
    a: "Yes — the token lives in your Stellar wallet and is yours. Transfers are gated by the marketplace contract: you can't gift it off-platform. That's intentional — it's how organizer royalties stay enforceable on every resale.",
  },
  {
    q: "How does the resale cap work?",
    a: "The organizer sets the cap when deploying the event (e.g. 1.5× primary). The EventNFT contract rejects any listing above it — it's not a UI rule, it's physically impossible to list higher.",
  },
  {
    q: "What happens with the 5% royalty?",
    a: "On every resale the Marketplace contract executes an atomic split: buyer pays X, seller receives X − royalty − fee, organizer receives the configurable royalty %, platform takes its flat fee. All in one Stellar transaction.",
  },
  {
    q: "What if I can't go to the festival?",
    a: "List your pass on the secondary market (within the cap). When it sells, the atomic split pays you + royalty to the organizer + platform fee. No fraud, no disputes.",
  },
  {
    q: "Can I pay in fiat? Do I need XLM?",
    a: "Yes. You pay in BRL via Pix — our Stellar anchor (SEP-24) onramps to XLM automatically, then the contract executes the purchase. When you sell, the offramp converts back to Pix on your CPF in seconds. You never have to touch crypto.",
  },
  {
    q: "Who can be an organizer?",
    a: "Any Brazilian event organizer. You apply at /organizer/apply, complete a minimal KYC (CNPJ + responsible-party identity), and receive permission to deploy EventNFTs.",
  },
  {
    q: "What if the festival is cancelled?",
    a: "The contract supports refund mode: the organizer can trigger a one-shot refund for all tickets, and tokens return to the pool. Legal and tax details are being finalized for mainnet.",
  },
  {
    q: "Is there a mobile app?",
    a: "Not native — we use a PWA (Progressive Web App) with Serwist. Installs as an app, works offline for already-purchased tickets, push notifications. Apple Wallet web pass for gate scanning.",
  },
];

export default function FAQPage() {
  return (
    <PageShell active="faq">
      <section
        className="mx-auto"
        style={{ padding: "100px 48px 80px", maxWidth: 900 }}
      >
        <p
          className="eyebrow"
          style={{ color: "var(--gold)", marginBottom: 20 }}
        >
          Frequently asked questions
        </p>
        <h1
          className="display"
          style={{
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            lineHeight: 0.92,
            margin: 0,
          }}
        >
          We <span style={{ color: "var(--gold)" }}>explain.</span>
        </h1>
        <p
          className="mt-6"
          style={{
            fontSize: 17,
            color: "var(--ink-dim)",
            lineHeight: 1.6,
            maxWidth: 600,
          }}
        >
          Everything you wanted to know before buying your first pass.
          Didn&apos;t find it here? Email{" "}
          <span style={{ color: "var(--gold)" }}>oi@passexplorer.com</span>.
        </p>

        <div className="mt-15" style={{ marginTop: 60 }}>
          <FAQAccordion items={FAQS} />
        </div>
      </section>
    </PageShell>
  );
}
