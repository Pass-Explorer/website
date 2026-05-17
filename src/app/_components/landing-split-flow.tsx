/**
 * LandingSplitFlow — animated SVG diagram showing the atomic payment
 * split from buyer to seller + organizer royalty + platform fee.
 *
 * Ported from temp/PassExplorer (1) web-landing.jsx SplitDiagram. SSR-
 * safe (no client state); all animation is pure CSS keyframes on the
 * SVG nodes. The center pill "ONE TX · ATOMIC" rotates its dashed ring
 * via transform animation; flow lines stream gold/sage/purple gradient
 * dashes; coin halos pulse outward.
 */

export function LandingSplitFlow() {
  return (
    <section
      className="bg-night relative overflow-hidden"
      style={{ padding: "96px 24px" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 40% 50% at 50% 50%, rgba(232,184,75,0.08), transparent 70%)",
        }}
      />
      <div
        className="relative mx-auto"
        style={{ maxWidth: 1240 }}
      >
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p
              className="eyebrow mb-4"
              style={{ color: "var(--gold)" }}
            >
              Where your money goes
            </p>
            <h2
              className="display max-w-2xl"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                lineHeight: 0.95,
                margin: 0,
              }}
            >
              One Stellar tx.
              <br />
              <span style={{ color: "var(--gold)" }}>
                Three recipients.
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
            The buyer pays. The contract splits. Seller, organizer and
            platform receive in one atomic transaction.
          </p>
        </div>

        <SplitDiagram />
      </div>
    </section>
  );
}

function SplitDiagram() {
  return (
    <div
      className="relative mx-auto"
      style={{ maxWidth: 1000, minHeight: 540 }}
    >
      <svg
        width="100%"
        height="540"
        viewBox="0 0 1000 540"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="sd-gold-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E8B84B" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#E8B84B" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="sd-sage-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4EC990" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#4EC990" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="sd-purple-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#9B7FE8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#9B7FE8" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="sd-flow-sage" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#E8B84B" />
            <stop offset="100%" stopColor="#4EC990" />
          </linearGradient>
          <linearGradient id="sd-flow-purple" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#E8B84B" />
            <stop offset="100%" stopColor="#9B7FE8" />
          </linearGradient>
          <linearGradient id="sd-flow-gold" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#E8B84B" />
            <stop offset="100%" stopColor="#E8B84B" />
          </linearGradient>
        </defs>

        {/* TOP — Buyer */}
        <circle cx="500" cy="100" r="120" fill="url(#sd-gold-glow)" />
        <g
          style={{
            transformOrigin: "500px 100px",
            animation: "sd-rotate 18s linear infinite",
          }}
        >
          <circle
            cx="500"
            cy="100"
            r="64"
            fill="none"
            stroke="#E8B84B"
            strokeWidth="0.8"
            opacity="0.25"
            strokeDasharray="3 6"
          />
        </g>
        <circle
          cx="500"
          cy="100"
          r="50"
          fill="#0F0F1A"
          stroke="#E8B84B"
          strokeWidth="2"
        />
        <text
          x="500"
          y="88"
          textAnchor="middle"
          fontSize="9"
          fontWeight="700"
          fill="#B8B3AA"
          letterSpacing="2.5"
        >
          BUYER
        </text>
        <text
          x="500"
          y="112"
          textAnchor="middle"
          fontSize="22"
          fontFamily="Bebas Neue"
          fill="#E8B84B"
          letterSpacing="1"
        >
          600 XLM
        </text>

        {/* FLOW LINES + traveling coins */}
        {[
          { x: 180, color: "#4EC990", grad: "sd-flow-sage",   delay: "0s" },
          { x: 500, color: "#9B7FE8", grad: "sd-flow-purple", delay: "0.3s" },
          { x: 820, color: "#E8B84B", grad: "sd-flow-gold",   delay: "0.6s" },
        ].map((d, i) => {
          const pathId = `sd-path-${i}`;
          const pathD = `M 500 130 Q 500 240 ${d.x} 320`;
          return (
            <g key={i}>
              {/* glow under-line */}
              <path
                d={pathD}
                stroke={d.color}
                strokeWidth="6"
                fill="none"
                opacity="0.08"
              />
              {/* invisible path for animateMotion to follow */}
              <path id={pathId} d={pathD} fill="none" stroke="none" />
              {/* dashed gradient main line */}
              <path
                d={pathD}
                stroke={`url(#${d.grad})`}
                strokeWidth="2"
                fill="none"
                strokeDasharray="8 6"
                style={{
                  animation: `sd-flow 1.6s linear infinite`,
                  animationDelay: d.delay,
                }}
              />
              {/* traveling coin */}
              <circle
                r="6"
                fill={d.color}
                style={{
                  filter: `drop-shadow(0 0 8px ${d.color})`,
                }}
              >
                <animateMotion
                  dur="2.4s"
                  repeatCount="indefinite"
                  begin={d.delay}
                  keyTimes="0;1"
                  keyPoints="0;1"
                  calcMode="spline"
                  keySplines="0.4 0 0.2 1"
                >
                  <mpath href={`#${pathId}`} />
                </animateMotion>
              </circle>
            </g>
          );
        })}

        {/* Center atomic pill */}
        <g
          style={{
            transformOrigin: "500px 230px",
            animation: "sd-rotate 20s linear infinite",
          }}
        >
          <circle
            cx="500"
            cy="230"
            r="68"
            fill="none"
            stroke="#E8B84B"
            strokeWidth="0.8"
            opacity="0.3"
            strokeDasharray="2 8"
          />
        </g>
        <rect
          x="404"
          y="212"
          width="192"
          height="36"
          rx="18"
          fill="#080810"
          stroke="#E8B84B"
          strokeWidth="1.5"
        />
        <rect
          x="404"
          y="212"
          width="192"
          height="36"
          rx="18"
          fill="rgba(232,184,75,0.08)"
        />
        <text
          x="500"
          y="234"
          textAnchor="middle"
          fontSize="11"
          fontWeight="800"
          fill="#E8B84B"
          letterSpacing="3"
        >
          ONE TX · ATOMIC
        </text>

        {/* Destinations */}
        {[
          { x: 180, color: "#4EC990", label: "SELLER",    value: "570 XLM", sub: "95%",        glow: "sd-sage-glow",   delay: "0s" },
          { x: 500, color: "#9B7FE8", label: "ORGANIZER", value: "28 XLM",  sub: "5% royalty", glow: "sd-purple-glow", delay: "0.3s" },
          { x: 820, color: "#E8B84B", label: "PLATFORM",  value: "2 XLM",   sub: "flat fee",   glow: "sd-gold-glow",   delay: "0.6s" },
        ].map((d, i) => (
          <g key={i}>
            <circle cx={d.x} cy="350" r="100" fill={`url(#${d.glow})`} />
            <circle
              cx={d.x}
              cy="350"
              r="56"
              fill="none"
              stroke={d.color}
              strokeWidth="1.2"
              opacity="0.4"
              style={{
                animation: `sd-pulse 2.6s ease-out infinite`,
                animationDelay: d.delay,
                transformOrigin: `${d.x}px 350px`,
              }}
            />
            <circle
              cx={d.x}
              cy="350"
              r="46"
              fill="#1A1A28"
              stroke={d.color}
              strokeWidth="2"
            />
            <text
              x={d.x}
              y="338"
              textAnchor="middle"
              fontSize="9"
              fontWeight="700"
              fill={d.color}
              letterSpacing="2.5"
            >
              {d.label}
            </text>
            <text
              x={d.x}
              y="362"
              textAnchor="middle"
              fontSize="20"
              fontFamily="Bebas Neue"
              fill={d.color}
              letterSpacing="1"
            >
              {d.value}
            </text>
            <text
              x={d.x}
              y="408"
              textAnchor="middle"
              fontSize="11"
              fill="#8A8A95"
            >
              {d.sub}
            </text>
          </g>
        ))}

        <style>{`
          @keyframes sd-flow { to { stroke-dashoffset: -28; } }
          @keyframes sd-rotate {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          @keyframes sd-pulse {
            0%   { transform: scale(1); opacity: 0.4; }
            80%  { transform: scale(1.45); opacity: 0; }
            100% { transform: scale(1.45); opacity: 0; }
          }
        `}</style>
      </svg>
    </div>
  );
}
