"use client";

import * as React from "react";
import Link from "next/link";

import { Icon, Wordmark } from "@/components/primitives";

/**
 * DocsApp — single-page docs site with sidebar nav and content swap.
 *
 * Ported from temp/PassExplorer (1) PageDocs: sticky header with gold
 * "Docs" pill + search input + apply CTA, left sidebar grouped by topic
 * (Get started / Event / Revenue / Operations) with active gold border,
 * center content well with DocHero + sections, right TOC rail. 8
 * sections: getting-started / apply / deploy-event / pricing-cap /
 * royalty / checkin / refund / tax.
 *
 * Pragmatic single-route implementation — state-driven switching, no
 * per-section URL (yet). Add per-section routes in v2 if SEO requires.
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

interface NavGroup {
  title: string;
  items: { id: Section; label: string }[];
}

const NAV: NavGroup[] = [
  {
    title: "Get started",
    items: [
      { id: "getting-started", label: "Overview" },
      { id: "apply",           label: "Apply as organizer" },
    ],
  },
  {
    title: "Event",
    items: [
      { id: "deploy-event", label: "Deploy event" },
      { id: "pricing-cap",  label: "Price & resale cap" },
    ],
  },
  {
    title: "Revenue",
    items: [
      { id: "royalty", label: "Royalty automation" },
      { id: "refund",  label: "Refund & cancel" },
    ],
  },
  {
    title: "Operations",
    items: [
      { id: "checkin", label: "Gate check-in" },
      { id: "tax",     label: "Brazilian tax" },
    ],
  },
];

export function DocsApp() {
  const [section, setSection] = React.useState<Section>("getting-started");

  return (
    <div className="bg-night text-ink font-body min-h-dvh">
      <Header />
      <div
        className="mx-auto grid"
        style={{
          maxWidth: 1400,
          gridTemplateColumns: "240px 1fr 220px",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        <Sidebar active={section} onPick={setSection} />
        <main className="min-w-0 px-14 py-15" style={{ padding: "60px 56px" }}>
          {section === "getting-started" && <DocGettingStarted />}
          {section === "apply" && <DocApply />}
          {section === "deploy-event" && <DocDeployEvent />}
          {section === "pricing-cap" && <DocPricingCap />}
          {section === "royalty" && <DocRoyalty />}
          {section === "checkin" && <DocCheckin />}
          {section === "refund" && <DocRefund />}
          {section === "tax" && <DocTax />}
        </main>
        <TOC />
      </div>
    </div>
  );
}

// ─── Chrome ──────────────────────────────────────────────────────────

function Header() {
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
          Docs
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
          <span className="flex-1">Search docs…</span>
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
          FAQ
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
          Apply
        </Link>
      </div>
    </header>
  );
}

function Sidebar({
  active,
  onPick,
}: {
  active: Section;
  onPick: (s: Section) => void;
}) {
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
      {NAV.map((g) => (
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

function TOC() {
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
        On this page
      </p>
      <nav
        className="flex flex-col gap-1.5"
        style={{ borderLeft: "1px solid var(--line)" }}
      >
        {["Introduction", "Prerequisites", "Steps", "Edge cases", "Next"].map(
          (l) => (
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
          ),
        )}
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

function DocGettingStarted() {
  return (
    <article>
      <DocHero
        eyebrow="Get started"
        title="Pass Explorer in 5 minutes."
        lead="The first secondary marketplace where organizers earn royalties on every resale. Built on Stellar, atomic-split payments, on-chain price caps."
      />
      <H2>What you get</H2>
      <P>
        Three things a regular secondary market can&apos;t give you: a royalty
        on every resale (default 5%), a hard cap on resale prices enforced
        by the smart contract, and instant settlement in ~3 seconds with
        sub-cent fees on Stellar.
      </P>
      <Callout tone="gold" title="No web3 jargon needed">
        Buyers log in with Google, Apple, or email via Privy. Their Stellar
        wallet is provisioned behind the scenes — no seed phrase, no plugins.
      </Callout>
      <H2>How long to onboard</H2>
      <Steps
        items={[
          { title: "Apply", body: "3-step KYC form. ~5 minutes." },
          { title: "Wait for approval", body: "Our admin reviews within 5 business days. You get email." },
          { title: "Deploy event", body: "4-step wizard, real Stellar tx. ~2 minutes." },
          { title: "Mint tickets", body: "Batch mint to any wallet. Live the moment the tx settles." },
        ]}
      />
    </article>
  );
}

function DocApply() {
  return (
    <article>
      <DocHero
        eyebrow="Apply"
        title="Become a Pass Explorer organizer."
        lead="We approve organizers manually — each application is reviewed by our team and signed on the Factory contract."
      />
      <H2>What you need</H2>
      <P>
        Valid Brazilian CNPJ + responsible person + email. We do KYC via
        Privy plus a public CNPJ status check at the Receita Federal.
      </P>
      <H2>The form</H2>
      <Steps
        items={[
          { title: "Identity", body: "Legal entity name, CNPJ, main festival." },
          { title: "Responsible", body: "Full name, email, social link." },
          { title: "Operation", body: "Stellar wallet (Privy will provision), estimated annual GMV." },
        ]}
      />
      <Callout tone="purple" title="KYC via Privy + public CNPJ check">
        Privy handles the responsible-person KYC. We verify the CNPJ
        status against Receita Federal. No documents to upload.
      </Callout>
    </article>
  );
}

function DocDeployEvent() {
  return (
    <article>
      <DocHero
        eyebrow="Event"
        title="Deploy your event on Stellar."
        lead="The 4-step wizard records your event params on the Factory contract. Your event is live the moment the tx settles."
      />
      <H2>The 4 steps</H2>
      <Steps
        items={[
          { title: "Details", body: "Event name, venue, city, date." },
          { title: "Tickets", body: "Total supply + primary price (in XLM)." },
          { title: "Rules", body: "Pick the resale cap multiplier (1.2× / 1.5× / 2×) and royalty (3 / 5 / 7 / 10%)." },
          { title: "Deploy", body: "Review + sign with Privy. ~3 seconds." },
        ]}
      />
      <H2>What goes on-chain</H2>
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
      <Callout tone="gold" title="v1 contract caveat">
        deploy_event in v1 records the event in Factory storage but returns
        a placeholder address. The actual EventNFT contract instance is
        deployed by our team after approval until v2 lands the auto-deployer.
      </Callout>
    </article>
  );
}

function DocPricingCap() {
  return (
    <article>
      <DocHero
        eyebrow="Pricing"
        title="Set the price. Set the cap."
        lead="The primary price is what you charge on first sale. The cap is the maximum a holder can resell for — enforced on-chain."
      />
      <H2>How the cap is enforced</H2>
      <P>
        When a holder lists their pass on the marketplace, the contract
        checks the listing price against your cap. If above, the
        transaction reverts. Scalpers can&apos;t list above the cap —
        period.
      </P>
      <Code>{`// Marketplace.list_ticket()
require(price <= EventNFT.max_resale_price, "above cap");`}</Code>
      <H2>Picking the cap</H2>
      <P>
        Default is 1.5× the primary. Anything lower than 1.2× hurts
        liquidity (sellers can&apos;t recoup costs). Anything higher than
        2× starts to look like organizer-blessed scalping.
      </P>
    </article>
  );
}

function DocRoyalty() {
  return (
    <article>
      <DocHero
        eyebrow="Revenue"
        title="Royalty on every resale."
        lead="Set once at deploy. Paid automatically into your wallet in the same atomic transaction as the seller payout."
      />
      <H2>How the split works</H2>
      <P>
        When a buyer pays, the Marketplace contract splits the payment in
        a single atomic transaction:
      </P>
      <Code>{`buyer pays:        100 XLM
  ↓
seller receives:    93 XLM
organizer royalty:  5 XLM   (5%)
platform fee:       2 XLM`}</Code>
      <Callout tone="purple" title="Atomic means atomic">
        The three transfers happen in one Stellar transaction. There&apos;s
        no scenario where the seller gets paid and you don&apos;t. The
        contract reverts the entire payment if any branch fails.
      </Callout>
    </article>
  );
}

function DocCheckin() {
  return (
    <article>
      <DocHero
        eyebrow="Operations"
        title="Gate check-in on Stellar."
        lead="Your porteiro app scans QR codes that resolve to on-chain tokens. Each scan flips the token's used flag in one tx."
      />
      <H2>What the scanner sees</H2>
      <P>
        The fan opens their pass in the Pass Explorer app and taps Present
        at the gate. The QR encodes the token id + a signed timestamp
        (valid 30s) + the event contract address. Your scanner verifies
        the signature offline and posts the check_in tx.
      </P>
      <H2>Edge cases handled</H2>
      <Steps
        items={[
          { title: "Already used", body: "Contract returns Used. Scanner shows BLOCKED red." },
          { title: "Wrong event", body: "Scanner refuses before posting. No wasted gas." },
          { title: "Unknown token", body: "Token doesn't exist in EventNFT supply. Blocked." },
          { title: "Expired QR", body: "Signature timestamp older than 30s. Asks fan to refresh." },
        ]}
      />
    </article>
  );
}

function DocRefund() {
  return (
    <article>
      <DocHero
        eyebrow="Revenue"
        title="Refund and cancellation."
        lead="On-chain transactions are final. If you cancel the event or need to refund individual passes, here's the path."
      />
      <H2>Event-wide cancellation</H2>
      <P>
        You set a cancellation policy at deploy time and surface it on the
        event page. If the event is cancelled, you (the organizer) trigger
        a contract method that returns a proportional refund from the
        Marketplace escrow to each ticket holder&apos;s wallet.
      </P>
      <Callout tone="red" title="v1 limitation">
        Bulk refund automation lands in v2. In v1, refunds are coordinated
        off-chain via support@passexplorer.com. We&apos;ll send a one-time
        airdrop to your holders.
      </Callout>
    </article>
  );
}

function DocTax() {
  return (
    <article>
      <DocHero
        eyebrow="Operations"
        title="Brazilian tax considerations."
        lead="Pass Explorer doesn't withhold tax. You're responsible for declaring royalty income to Receita Federal."
      />
      <H2>What gets reported</H2>
      <P>
        Every transaction on Stellar is public and timestamped. We provide
        a CSV export of your royalty stream by month, ready to hand to your
        accountant or feed into your DRE.
      </P>
      <Callout tone="gold" title="Not legal advice">
        We&apos;re engineers, not auditors. Talk to your accountant about
        how royalty income is treated under your specific tax regime
        (Simples Nacional vs Lucro Real vs Presumido).
      </Callout>
    </article>
  );
}
