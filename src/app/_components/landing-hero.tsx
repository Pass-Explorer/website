"use client";

import { useRef, useState } from "react";

import { Icon, QRGlyph } from "@/components/primitives";

/**
 * LandingHero — full-bleed hero with festival-hero.mp4 backdrop +
 * mouse-tilt HeroPass ticket. Left text wall (legibility), right
 * floating animated ticket.
 *
 * Translated from temp/PassExplorer (1) web-landing.jsx LandingHero +
 * HeroPass. Video has solid black fallback while loading; on mobile we
 * hide the ticket and stack vertically.
 */

export function LandingHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: "min(100vh, 820px)",
        padding: "80px 24px 100px",
      }}
    >
      {/* Video background — full-bleed, native resolution sweet spot */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 z-0 h-full w-full"
        style={{
          objectFit: "cover",
          objectPosition: "center 35%",
        }}
      >
        <source src="/festival-hero.mp4" type="video/mp4" />
      </video>

      {/* Soft asymmetric wash — readable but lets video breathe */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 bottom-0 left-0 z-[1]"
        style={{
          width: "55%",
          background:
            "linear-gradient(95deg, rgba(8,8,16,0.78) 0%, rgba(8,8,16,0.55) 55%, rgba(8,8,16,0.15) 88%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(95deg, rgba(8,8,16,0.25) 0%, rgba(8,8,16,0.12) 45%, rgba(8,8,16,0.2) 80%, rgba(8,8,16,0.4) 100%)",
        }}
      />
      {/* bottom fade into page */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 left-0 z-[1]"
        style={{
          height: 200,
          background:
            "linear-gradient(to bottom, transparent, var(--night) 90%)",
        }}
      />

      {/* Film grain — radial dot pattern overlay (screen blend) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
          mixBlendMode: "screen",
        }}
      />

      {/* Vignette — soft dark edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(8,8,16,0.6) 100%)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-[3] mx-auto grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]"
        style={{ maxWidth: 1240 }}
      >
        <div>
          {/* Tag */}
          <div
            className="mb-7 inline-flex items-center gap-2"
            style={{
              padding: "8px 14px",
              background: "rgba(232,184,75,0.1)",
              border: "1px solid rgba(232,184,75,0.3)",
              borderRadius: 999,
            }}
          >
            <span className="pulse" style={{ color: "var(--gold)" }} />
            <span
              className="font-bold uppercase"
              style={{
                fontSize: 11,
                color: "var(--gold)",
                letterSpacing: "0.14em",
              }}
            >
              The festival ticket marketplace
            </span>
          </div>

          {/* Headline */}
          <h1
            className="display m-0"
            style={{
              fontSize: "clamp(3rem, 9vw, 6.5rem)",
              lineHeight: 0.92,
              letterSpacing: "0.005em",
            }}
          >
            <span className="block">Find.</span>
            <span className="block" style={{ color: "var(--gold)" }}>
              Experience.
            </span>
            <span
              className="block"
              style={{
                WebkitTextStroke: "1.5px rgba(242,237,228,0.25)",
                color: "transparent",
              }}
            >
              Trade.
            </span>
          </h1>

          {/* Lede */}
          <p
            className="mt-8 max-w-xl"
            style={{
              fontSize: 18,
              lineHeight: 1.55,
              color: "var(--ink-dim)",
            }}
          >
            The marketplace where fans{" "}
            <strong style={{ color: "var(--ink)", fontWeight: 500 }}>
              find and buy
            </strong>{" "}
            passes for festivals,{" "}
            <strong style={{ color: "var(--ink)", fontWeight: 500 }}>
              sell
            </strong>{" "}
            the ones they won't use — and organizers{" "}
            <strong style={{ color: "var(--ink)", fontWeight: 500 }}>
              earn on every resale
            </strong>
            .
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap gap-3.5">
            <a
              href="#waitlist"
              className="tap inline-flex items-center gap-2 font-semibold"
              style={{
                height: 56,
                padding: "0 28px",
                background: "var(--gold)",
                color: "var(--night)",
                borderRadius: 6,
                fontSize: 14,
                letterSpacing: "0.02em",
              }}
            >
              Early access
              <Icon name="arrow" size={16} />
            </a>
            <a
              href="#how"
              className="tap inline-flex items-center gap-2 font-semibold"
              style={{
                height: 56,
                padding: "0 24px",
                background: "transparent",
                color: "var(--ink)",
                border: "1px solid var(--line-strong)",
                borderRadius: 6,
                fontSize: 14,
                letterSpacing: "0.02em",
              }}
            >
              <Icon name="qr" size={16} />
              How it works
            </a>
          </div>

          {/* Bullets */}
          <div
            className="mt-9 flex flex-wrap gap-6"
            style={{ color: "var(--ink-muted)", fontSize: 11 }}
          >
            <span>✓ Pix · on/offramp</span>
            <span>✓ Built on Stellar</span>
            <span>✓ Privy social custody</span>
            <span>✓ Open to organizers</span>
          </div>
        </div>

        {/* Hero ticket */}
        <div className="relative hidden justify-center lg:flex">
          <HeroPass />
        </div>
      </div>
    </section>
  );
}

function HeroPass() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const cx = (e.clientX - r.left - r.width / 2) / r.width;
    const cy = (e.clientY - r.top - r.height / 2) / r.height;
    setTilt({ x: cy * -12, y: cx * 18 });
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="relative"
      style={{
        width: 380,
        height: 220,
        transformStyle: "preserve-3d",
        perspective: 1200,
        animation: "pass-float 6s ease-in-out infinite",
      }}
    >
      <div
        className="relative h-full w-full overflow-hidden"
        style={{
          borderRadius: 18,
          background:
            "linear-gradient(145deg, var(--night-card) 0%, var(--night-mid) 100%)",
          border: "1px solid rgba(232,184,75,0.45)",
          boxShadow:
            "0 30px 80px -20px rgba(232,184,75,0.3), 0 24px 60px rgba(0,0,0,0.7)",
          transform: `rotateX(${tilt.x}deg) rotateY(${-6 + tilt.y}deg)`,
          transition: "transform 0.25s ease-out",
        }}
      >
        {/* Holo backdrop */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "conic-gradient(from 220deg at 50% 0%, rgba(232,184,75,0) 0deg, rgba(232,184,75,0.25) 60deg, rgba(155,127,232,0.30) 120deg, rgba(78,201,144,0.25) 200deg, rgba(232,184,75,0.15) 280deg, rgba(232,184,75,0) 360deg)",
            filter: "blur(18px)",
            opacity: 0.85,
            animation: "pass-holo 8s linear infinite",
          }}
        />

        {/* Shimmer sweep */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, transparent 35%, rgba(232,184,75,0.35) 50%, transparent 65%)",
            animation: "pass-shimmer 5s ease-in-out infinite",
          }}
        />

        {/* Gold top strip */}
        <div
          aria-hidden="true"
          style={{
            height: 4,
            background:
              "linear-gradient(90deg, transparent, var(--gold), transparent)",
            animation: "pass-strip 3s ease-in-out infinite",
          }}
        />

        <div className="relative px-6 py-5">
          <p className="eyebrow" style={{ color: "var(--ink-muted)" }}>
            Pass Explorer · Stellar
          </p>
          <p
            className="display mt-2"
            style={{ fontSize: 40, color: "var(--ink)" }}
          >
            SUNSET
          </p>
          <p
            className="display mt-0.5"
            style={{ fontSize: 28, color: "var(--gold)" }}
          >
            SP · 2026
          </p>
          <div
            className="mt-3 flex items-center gap-2"
            style={{ color: "var(--ink-muted)", fontSize: 11 }}
          >
            <Icon name="cal" size={12} />
            <span>MAR 27–29</span>
            <span
              aria-hidden="true"
              style={{
                width: 3,
                height: 3,
                borderRadius: 9,
                background: "var(--ink-quiet)",
              }}
            />
            <span>GA · #042</span>
          </div>
        </div>

        {/* QR with pulsing halo */}
        <div
          className="absolute"
          style={{
            right: 24,
            top: 24,
            width: 60,
            height: 60,
            padding: 4,
            background: "var(--ink)",
            borderRadius: 6,
            animation: "pass-qr-pulse 2.4s ease-out infinite",
          }}
        >
          <QRGlyph size={52} seed="hero" />
        </div>

        {/* Spec lines */}
        <div
          className="font-mono absolute right-4 bottom-3 left-4 flex justify-between"
          style={{
            fontSize: 9,
            color: "var(--ink-quiet)",
            letterSpacing: "0.1em",
          }}
        >
          <span>STELLAR · TESTNET</span>
          <span style={{ color: "var(--sage)" }}>● VERIFIED</span>
        </div>
      </div>

      <style>{`
        @keyframes pass-float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-12px); }
        }
        @keyframes pass-shimmer {
          0%, 100% { transform: translateX(-110%); }
          50%      { transform: translateX(110%); }
        }
        @keyframes pass-holo {
          0%   { background-position: 0% 50%; opacity: 0.6; }
          50%  { background-position: 100% 50%; opacity: 0.95; }
          100% { background-position: 0% 50%; opacity: 0.6; }
        }
        @keyframes pass-strip {
          0%, 100% { opacity: 0.6; }
          50%      { opacity: 1; }
        }
        @keyframes pass-qr-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(232,184,75,0.5); }
          80%  { box-shadow: 0 0 0 14px rgba(232,184,75,0); }
          100% { box-shadow: 0 0 0 0 rgba(232,184,75,0); }
        }
      `}</style>
    </div>
  );
}
