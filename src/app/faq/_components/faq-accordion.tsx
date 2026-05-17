"use client";

import * as React from "react";

import { Icon } from "@/components/primitives";

/**
 * FAQAccordion — controlled single-open accordion.
 *
 * Ported from temp/PassExplorer (1) PageFAQ accordion: each item has a
 * left-aligned question + right circular toggle. Toggle is rgba bg when
 * closed, gold bg when open. The plus icon rotates 45° to become an x
 * on open. Answer panel fades in with a top divider.
 */

interface FAQAccordionProps {
  items: { q: string; a: string }[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [open, setOpen] = React.useState<number>(0);

  return (
    <div className="flex flex-col gap-2">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={f.q}
            className="overflow-hidden"
            style={{
              background: "var(--night-card)",
              border: "1px solid var(--line)",
              borderRadius: 10,
            }}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full cursor-pointer items-center justify-between text-left"
              style={{ padding: "22px 24px" }}
            >
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "var(--ink)",
                }}
              >
                {f.q}
              </span>
              <span
                aria-hidden="true"
                className="grid place-items-center transition-all"
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 999,
                  background: isOpen ? "var(--gold)" : "rgba(255,255,255,0.04)",
                  color: isOpen ? "var(--night)" : "var(--ink-dim)",
                  transform: isOpen ? "rotate(45deg)" : "rotate(0)",
                }}
              >
                <Icon name="plus" size={14} stroke={2.4} />
              </span>
            </button>
            {isOpen && (
              <div
                className="fade-in"
                style={{
                  padding: "0 24px 24px",
                  borderTop: "1px solid var(--line)",
                }}
              >
                <p
                  className="mt-4"
                  style={{
                    fontSize: 14,
                    color: "var(--ink-dim)",
                    lineHeight: 1.65,
                    margin: "16px 0 0",
                  }}
                >
                  {f.a}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
