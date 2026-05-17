"use client";

import { faqDict } from "@/lib/i18n/dicts/faq";
import { useT } from "@/lib/i18n";

import { PageShell } from "../_components/page-shell";

import { FAQAccordion } from "./_components/faq-accordion";

export default function FAQPage() {
  const t = useT(faqDict);

  const FAQS: { q: string; a: string }[] = [
    { q: t("q1"),  a: t("a1")  },
    { q: t("q2"),  a: t("a2")  },
    { q: t("q3"),  a: t("a3")  },
    { q: t("q4"),  a: t("a4")  },
    { q: t("q5"),  a: t("a5")  },
    { q: t("q6"),  a: t("a6")  },
    { q: t("q7"),  a: t("a7")  },
    { q: t("q8"),  a: t("a8")  },
    { q: t("q9"),  a: t("a9")  },
    { q: t("q10"), a: t("a10") },
  ];

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
          className="mt-6"
          style={{
            fontSize: 17,
            color: "var(--ink-dim)",
            lineHeight: 1.6,
            maxWidth: 600,
          }}
        >
          {t("lede_a")}{" "}
          <span style={{ color: "var(--gold)" }}>oi@passexplorer.com</span>.
        </p>

        <div className="mt-15" style={{ marginTop: 60 }}>
          <FAQAccordion items={FAQS} />
        </div>
      </section>
    </PageShell>
  );
}
