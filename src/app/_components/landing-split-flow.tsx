"use client";

import { landingDict } from "@/lib/i18n/dicts/landing";
import { useT } from "@/lib/i18n";

/**
 * LandingSplitFlow - animated SVG diagram showing the atomic payment
 * split from buyer to seller + organizer royalty + platform fee.
 *
 * Pure-CSS animations for the SVG; client component because the
 * surrounding copy (eyebrow / headline / caption / node labels) flips
 * with the i18n context. The diagram sits in a viewBox sized to its
 * content so it never clips at any viewport.
 */

export function LandingSplitFlow() {
  const t = useT(landingDict);
  return (
    <section
      className="bg-night relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 md:py-28 lg:py-[120px]"
    >
      {/* Backdrop wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(232,184,75,0.08), transparent 70%)",
        }}
      />

      <div
        className="relative mx-auto"
        style={{ maxWidth: 1240 }}
      >
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 sm:mb-12 md:mb-16">
          <div>
            <p
              className="eyebrow mb-4"
              style={{ color: "var(--gold)" }}
            >
              {t("split_eyebrow")}
            </p>
            <h2
              className="display max-w-2xl"
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                lineHeight: 0.95,
                margin: 0,
              }}
            >
              {t("split_title_a")}
              <br />
              <span style={{ color: "var(--gold)" }}>
                {t("split_title_b")}
              </span>
            </h2>
          </div>
          <p
            className="max-w-xs"
            style={{
              fontSize: 13,
              color: "var(--ink-muted)",
              lineHeight: 1.55,
            }}
          >
            {t("split_caption")}
          </p>
        </div>

        <SplitDiagram t={t} />
      </div>
    </section>
  );
}

interface Recipient {
  x: number;
  color: string;
  glow: string;
  label: string;
  role: string;
  value: string;
  pctText: string;
  pctRing: number;
  delay: string;
}

type T = (k: keyof (typeof landingDict)["en"]) => string;

function makeRecipients(t: T): Recipient[] {
  return [
    {
      x: 200,
      color: "#4EC990",
      glow: "sd-sage-glow",
      label: t("split_seller"),
      role: t("split_seller_role"),
      value: "570 XLM",
      pctText: "95%",
      pctRing: 95,
      delay: "0s",
    },
    {
      x: 600,
      color: "#9B7FE8",
      glow: "sd-purple-glow",
      label: t("split_org"),
      role: t("split_org_role"),
      value: "28 XLM",
      pctText: "5%",
      pctRing: 5,
      delay: "0.35s",
    },
    {
      x: 1000,
      color: "#E8B84B",
      glow: "sd-gold-glow",
      label: t("split_platform"),
      role: t("split_platform_role"),
      value: "2 XLM",
      pctText: "·",
      pctRing: 1,
      delay: "0.7s",
    },
  ];
}

function SplitDiagram({ t }: { t: T }) {
  const RECIPIENTS = makeRecipients(t);
  const W = 1200;
  const H = 620;
  const buyerCx = 600;
  const buyerCy = 120;
  const splitCy = 280;
  const destCy = 460;
  const ringR = 70;
  const ringCircum = 2 * Math.PI * ringR;

  return (
    <div
      className="relative mx-auto"
      style={{ maxWidth: 1100 }}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        style={{ overflow: "visible" }}
      >
        <defs>
          {/* Glows */}
          <radialGradient id="sd-gold-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E8B84B" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#E8B84B" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#E8B84B" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="sd-sage-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4EC990" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#4EC990" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#4EC990" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="sd-purple-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#9B7FE8" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#9B7FE8" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#9B7FE8" stopOpacity="0" />
          </radialGradient>

          {/* Node inner gradients */}
          <radialGradient id="sd-node-gold" cx="50%" cy="38%" r="65%">
            <stop offset="0%" stopColor="#2A2418" />
            <stop offset="100%" stopColor="#0C0C16" />
          </radialGradient>
          <radialGradient id="sd-node-sage" cx="50%" cy="38%" r="65%">
            <stop offset="0%" stopColor="#15302A" />
            <stop offset="100%" stopColor="#0C0C16" />
          </radialGradient>
          <radialGradient id="sd-node-purple" cx="50%" cy="38%" r="65%">
            <stop offset="0%" stopColor="#1F1B33" />
            <stop offset="100%" stopColor="#0C0C16" />
          </radialGradient>
          <radialGradient id="sd-node-platform" cx="50%" cy="38%" r="65%">
            <stop offset="0%" stopColor="#2A2418" />
            <stop offset="100%" stopColor="#0C0C16" />
          </radialGradient>

          {/* Flow gradients */}
          <linearGradient id="sd-flow-sage" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#E8B84B" />
            <stop offset="100%" stopColor="#4EC990" />
          </linearGradient>
          <linearGradient id="sd-flow-purple" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#E8B84B" />
            <stop offset="100%" stopColor="#9B7FE8" />
          </linearGradient>
          <linearGradient id="sd-flow-gold" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#FFE69C" />
            <stop offset="100%" stopColor="#8B6F1F" />
          </linearGradient>

          {/* Ticket-coin gradient */}
          <linearGradient id="sd-coin-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFE69C" />
            <stop offset="55%" stopColor="#E8B84B" />
            <stop offset="100%" stopColor="#8B6F1F" />
          </linearGradient>

          {/* Ticket symbol. used as traveling token */}
          <symbol id="sd-ticket" viewBox="0 0 23 15">
            <path
              d="M1.5 2 H21.5 A1.5 1.5 0 0 1 23 3.5 V5.5 A2 2 0 0 0 23 9.5 V11.5 A1.5 1.5 0 0 1 21.5 13 H1.5 A1.5 1.5 0 0 1 0 11.5 V9.5 A2 2 0 0 0 0 5.5 V3.5 A1.5 1.5 0 0 1 1.5 2 Z"
              fill="url(#sd-coin-grad)"
              stroke="rgba(139,111,31,0.7)"
              strokeWidth="0.4"
            />
            <line
              x1="11.5"
              y1="3.5"
              x2="11.5"
              y2="11.5"
              stroke="rgba(8,8,16,0.6)"
              strokeWidth="0.5"
              strokeDasharray="0.8 0.8"
            />
          </symbol>
        </defs>

        {/* ───── BUYER (top) ───── */}
        <BuyerNode cx={buyerCx} cy={buyerCy} t={t} />

        {/* ───── FLOW LINES + traveling ticket-tokens ───── */}
        {RECIPIENTS.map((d, i) => {
          const pathId = `sd-path-${i}`;
          // Smooth bezier: from buyer bottom → through split node → to recipient top
          const startX = buyerCx;
          const startY = buyerCy + 80;
          const endX = d.x;
          const endY = destCy - 90;
          const cp1y = splitCy - 20;
          const cp2y = splitCy + 40;
          const grad =
            d.color === "#4EC990"
              ? "sd-flow-sage"
              : d.color === "#9B7FE8"
                ? "sd-flow-purple"
                : "sd-flow-gold";

          return (
            <g key={i}>
              {/* under-glow */}
              <path
                d={`M ${startX} ${startY} C ${startX} ${cp1y}, ${endX} ${cp2y}, ${endX} ${endY}`}
                stroke={d.color}
                strokeWidth="10"
                fill="none"
                opacity="0.07"
                strokeLinecap="round"
              />
              {/* invisible path for animateMotion */}
              <path
                id={pathId}
                d={`M ${startX} ${startY} C ${startX} ${cp1y}, ${endX} ${cp2y}, ${endX} ${endY}`}
                fill="none"
                stroke="none"
              />
              {/* base dashed line */}
              <path
                d={`M ${startX} ${startY} C ${startX} ${cp1y}, ${endX} ${cp2y}, ${endX} ${endY}`}
                stroke={`url(#${grad})`}
                strokeWidth="2"
                fill="none"
                strokeDasharray="6 5"
                strokeLinecap="round"
                opacity="0.85"
                style={{
                  animation: `sd-flow 1.6s linear infinite`,
                  animationDelay: d.delay,
                }}
              />
              {/* 3 staggered ticket-tokens per path */}
              {[0, 0.8, 1.6].map((offset) => (
                <use
                  key={offset}
                  href="#sd-ticket"
                  width="22"
                  height="14"
                  x="-11"
                  y="-7"
                  style={{
                    filter: `drop-shadow(0 0 6px ${d.color}AA)`,
                  }}
                >
                  <animateMotion
                    dur="2.4s"
                    repeatCount="indefinite"
                    begin={`${parseFloat(d.delay) + offset}s`}
                    keyTimes="0;1"
                    keyPoints="0;1"
                    calcMode="spline"
                    keySplines="0.4 0 0.2 1"
                    rotate="auto"
                  >
                    <mpath href={`#${pathId}`} />
                  </animateMotion>
                </use>
              ))}
            </g>
          );
        })}

        {/* ───── CENTER ATOMIC PILL ───── */}
        <g
          style={{
            transformOrigin: `${buyerCx}px ${splitCy}px`,
            animation: "sd-rotate 22s linear infinite",
          }}
        >
          <circle
            cx={buyerCx}
            cy={splitCy}
            r="82"
            fill="none"
            stroke="#E8B84B"
            strokeWidth="0.8"
            opacity="0.25"
            strokeDasharray="2 8"
          />
        </g>
        <g
          style={{
            transformOrigin: `${buyerCx}px ${splitCy}px`,
            animation: "sd-rotate-rev 30s linear infinite",
          }}
        >
          <circle
            cx={buyerCx}
            cy={splitCy}
            r="100"
            fill="none"
            stroke="#E8B84B"
            strokeWidth="0.6"
            opacity="0.15"
            strokeDasharray="1 12"
          />
        </g>
        <rect
          x={buyerCx - 110}
          y={splitCy - 22}
          width="220"
          height="44"
          rx="22"
          fill="#080810"
          stroke="#E8B84B"
          strokeWidth="1.5"
        />
        <rect
          x={buyerCx - 110}
          y={splitCy - 22}
          width="220"
          height="44"
          rx="22"
          fill="rgba(232,184,75,0.1)"
        />
        {/* Lock-style icon: 3 dashes */}
        <g transform={`translate(${buyerCx - 80}, ${splitCy})`}>
          <rect x="0" y="-5" width="2.5" height="10" rx="1" fill="#E8B84B" />
          <rect x="6" y="-7" width="2.5" height="14" rx="1" fill="#E8B84B" />
          <rect x="12" y="-5" width="2.5" height="10" rx="1" fill="#E8B84B" />
        </g>
        <text
          x={buyerCx + 18}
          y={splitCy + 5}
          textAnchor="middle"
          fontSize="12"
          fontWeight="800"
          fill="#E8B84B"
          letterSpacing="2.8"
          style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          {t("split_one_tx")}
        </text>

        {/* ───── DESTINATIONS ───── */}
        {RECIPIENTS.map((d, i) => {
          const nodeFill =
            d.color === "#4EC990"
              ? "sd-node-sage"
              : d.color === "#9B7FE8"
                ? "sd-node-purple"
                : "sd-node-platform";
          const offset = ringCircum * (1 - d.pctRing / 100);
          const hasRing = d.pctRing >= 5;
          return (
            <g key={i}>
              {/* outer glow halo */}
              <circle cx={d.x} cy={destCy} r="130" fill={`url(#${d.glow})`} />
              {/* pulsing ring */}
              <circle
                cx={d.x}
                cy={destCy}
                r="78"
                fill="none"
                stroke={d.color}
                strokeWidth="1.2"
                opacity="0.35"
                style={{
                  animation: `sd-pulse 2.8s ease-out infinite`,
                  animationDelay: d.delay,
                  transformOrigin: `${d.x}px ${destCy}px`,
                }}
              />
              {/* faint full ring underlay */}
              <circle
                cx={d.x}
                cy={destCy}
                r={ringR}
                fill="none"
                stroke={d.color}
                strokeWidth="2"
                opacity="0.18"
              />
              {/* percentage ring */}
              {hasRing && (
                <circle
                  cx={d.x}
                  cy={destCy}
                  r={ringR}
                  fill="none"
                  stroke={d.color}
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={ringCircum}
                  strokeDashoffset={offset}
                  transform={`rotate(-90 ${d.x} ${destCy})`}
                  style={{ filter: `drop-shadow(0 0 6px ${d.color})` }}
                />
              )}
              {/* node body */}
              <circle
                cx={d.x}
                cy={destCy}
                r="56"
                fill={`url(#${nodeFill})`}
                stroke={d.color}
                strokeWidth="1.5"
              />
              {/* tiny pct chip top-right */}
              <g transform={`translate(${d.x + 38}, ${destCy - 48})`}>
                <rect
                  x="-20"
                  y="-10"
                  width="40"
                  height="20"
                  rx="10"
                  fill="#080810"
                  stroke={d.color}
                  strokeWidth="1"
                />
                <text
                  x="0"
                  y="5"
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="700"
                  fill={d.color}
                  letterSpacing="0.5"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  {d.pctText}
                </text>
              </g>
              {/* node labels */}
              <text
                x={d.x}
                y={destCy - 14}
                textAnchor="middle"
                fontSize="10"
                fontWeight="700"
                fill={d.color}
                letterSpacing="2.5"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                {d.label}
              </text>
              <text
                x={d.x}
                y={destCy + 14}
                textAnchor="middle"
                fontSize="26"
                fontFamily="var(--font-bebas-neue), 'Bebas Neue', sans-serif"
                fill="#F2EDE4"
                letterSpacing="1"
              >
                {d.value}
              </text>
              <text
                x={d.x}
                y={destCy + 32}
                textAnchor="middle"
                fontSize="10"
                fontWeight="500"
                fill="#8A8A95"
                letterSpacing="0.5"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                {d.role}
              </text>
            </g>
          );
        })}

        <style>{`
          @keyframes sd-flow { to { stroke-dashoffset: -22; } }
          @keyframes sd-rotate {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          @keyframes sd-rotate-rev {
            from { transform: rotate(0deg); }
            to   { transform: rotate(-360deg); }
          }
          @keyframes sd-pulse {
            0%   { transform: scale(1);    opacity: 0.5; }
            80%  { transform: scale(1.55); opacity: 0;   }
            100% { transform: scale(1.55); opacity: 0;   }
          }
        `}</style>
      </svg>
    </div>
  );
}

function BuyerNode({ cx, cy, t }: { cx: number; cy: number; t: T }) {
  return (
    <g>
      {/* outer halo */}
      <circle cx={cx} cy={cy} r="140" fill="url(#sd-gold-glow)" />
      {/* slowly rotating dashed orbit */}
      <g
        style={{
          transformOrigin: `${cx}px ${cy}px`,
          animation: "sd-rotate 18s linear infinite",
        }}
      >
        <circle
          cx={cx}
          cy={cy}
          r="78"
          fill="none"
          stroke="#E8B84B"
          strokeWidth="0.8"
          opacity="0.3"
          strokeDasharray="3 7"
        />
      </g>
      <g
        style={{
          transformOrigin: `${cx}px ${cy}px`,
          animation: "sd-rotate-rev 26s linear infinite",
        }}
      >
        <circle
          cx={cx}
          cy={cy}
          r="98"
          fill="none"
          stroke="#E8B84B"
          strokeWidth="0.5"
          opacity="0.15"
          strokeDasharray="1 14"
        />
      </g>
      {/* node body */}
      <circle
        cx={cx}
        cy={cy}
        r="60"
        fill="url(#sd-node-gold)"
        stroke="#E8B84B"
        strokeWidth="2"
      />
      <text
        x={cx}
        y={cy - 12}
        textAnchor="middle"
        fontSize="10"
        fontWeight="700"
        fill="#E8B84B"
        letterSpacing="2.8"
        style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
      >
        {t("split_buyer")}
      </text>
      <text
        x={cx}
        y={cy + 16}
        textAnchor="middle"
        fontSize="28"
        fontFamily="var(--font-bebas-neue), 'Bebas Neue', sans-serif"
        fill="#FFE69C"
        letterSpacing="1"
      >
        600 XLM
      </text>
      <text
        x={cx}
        y={cy + 34}
        textAnchor="middle"
        fontSize="10"
        fill="#8A8A95"
        letterSpacing="0.5"
        style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
      >
        {t("split_buyer_sub")}
      </text>
    </g>
  );
}
