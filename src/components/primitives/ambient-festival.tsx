import { cn } from "@/lib/utils";

/**
 * Animated festival ambient. procedural "video" backdrop.
 *
 * Resolves the deferred coherence tension from the brand pipeline
 * (Explorer signature living in copy not visuals): this is a moving,
 * felt, festival-night surface that the Onboarding hero + marketing
 * hero sit on. Pure SVG + CSS animations so it ships without media.
 *
 * Variants:
 *  - `night`   → purple aurora + gold beams (Onboarding default)
 *  - `sunset`  → warm coral + red beams (marketing hero, fan-energy)
 *  - `sunrise` → amber + green beams (organizer onboarding)
 *
 * Intensity scales particle/crowd density. Drop `<children>` inside to
 * compose foreground content; the ambient pane sits behind via z-index.
 *
 * If you have a real cinematic mp4 (`videos/festival-hero.mp4`), pass
 * `videoSrc`. the procedural layer becomes a fallback.
 */

export type AmbientVariant = "night" | "sunset" | "sunrise";
export type AmbientIntensity = "low" | "med" | "high";

interface Palette {
  sky: string;
  mid: string;
  floor: string;
  beam1: string;
  beam2: string;
  beam3: string;
}

const PALETTES: Record<AmbientVariant, Palette> = {
  night: {
    sky: "#7A3FB8",
    mid: "#3A1F5C",
    floor: "#080810",
    beam1: "#E8B84B",
    beam2: "#9B7FE8",
    beam3: "#4EC990",
  },
  sunset: {
    sky: "#F26D5B",
    mid: "#7A1F3F",
    floor: "#1A0F0F",
    beam1: "#E8B84B",
    beam2: "#F26D5B",
    beam3: "#9B7FE8",
  },
  sunrise: {
    sky: "#FFD27A",
    mid: "#7A4F2F",
    floor: "#1A0F0F",
    beam1: "#E8B84B",
    beam2: "#4EC990",
    beam3: "#F26D5B",
  },
};

interface AmbientFestivalProps {
  variant?: AmbientVariant;
  intensity?: AmbientIntensity;
  showCrowd?: boolean;
  showLights?: boolean;
  showParticles?: boolean;
  showLensFlare?: boolean;
  /** Optional mp4 url. Procedural layer renders alongside as fallback. */
  videoSrc?: string;
  className?: string;
  children?: React.ReactNode;
}

export function AmbientFestival({
  variant = "night",
  intensity = "high",
  showCrowd = true,
  showLights = true,
  showParticles = true,
  showLensFlare = true,
  videoSrc,
  className,
  children,
}: AmbientFestivalProps) {
  const p = PALETTES[variant];
  const particleCount = intensity === "high" ? 60 : intensity === "med" ? 30 : 15;
  const crowdCount = intensity === "high" ? 80 : intensity === "med" ? 50 : 25;

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {videoSrc && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-[1] h-full w-full object-cover"
          src={videoSrc}
        />
      )}

      {/* Aurora + beams + crowd via SVG (z-index 2) */}
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1600 900"
        className="absolute inset-0 z-[2]"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="ambient-aurora" cx="50%" cy="30%" r="80%">
            <stop offset="0%" stopColor={p.sky} stopOpacity="0.7" />
            <stop offset="45%" stopColor={p.mid} stopOpacity="0.4" />
            <stop offset="100%" stopColor={p.floor} stopOpacity="1" />
          </radialGradient>
          <linearGradient id="ambient-floor" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={p.floor} stopOpacity="0" />
            <stop offset="100%" stopColor={p.floor} stopOpacity="1" />
          </linearGradient>
          <radialGradient id="ambient-orb" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={p.beam1} stopOpacity="0.6" />
            <stop offset="100%" stopColor={p.beam1} stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect
          width="1600"
          height="900"
          fill="url(#ambient-aurora)"
          style={{ animation: "ambient-breathe 8s ease-in-out infinite" }}
        />

        {/* drifting bright orbs */}
        <g style={{ animation: "ambient-pan 22s linear infinite" }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <circle
              key={i}
              cx={(i * 137) % 1600}
              cy={300 + ((i * 31) % 200)}
              r="80"
              fill="url(#ambient-orb)"
              opacity={0.35 + (i % 3) * 0.12}
            />
          ))}
        </g>

        {/* stage light beams sweeping */}
        {showLights && (
          <g
            style={{
              animation: "ambient-beam-sweep 14s ease-in-out infinite",
              transformOrigin: "700px 0",
            }}
          >
            <path
              d="M 700 0 L 200 900 L 320 900 Z"
              fill={p.beam1}
              opacity="0.18"
            />
            <path
              d="M 900 0 L 1400 900 L 1280 900 Z"
              fill={p.beam2}
              opacity="0.18"
            />
            <path
              d="M 750 0 L 600 900 L 660 900 Z"
              fill={p.beam3}
              opacity="0.12"
            />
            <path
              d="M 850 0 L 1000 900 L 940 900 Z"
              fill={p.beam1}
              opacity="0.10"
            />
          </g>
        )}

        {/* breathing crowd silhouettes */}
        {showCrowd && (
          <g
            style={{ animation: "ambient-crowd-wave 5s ease-in-out infinite" }}
            opacity="0.92"
          >
            {Array.from({ length: crowdCount }).map((_, i) => {
              const x = (i * 23 + (i * 7) % 41) % 1600;
              const h = 60 + ((i * 13) % 80);
              return (
                <ellipse
                  key={i}
                  cx={x}
                  cy={780 - h * 0.05}
                  rx="18"
                  ry={h}
                  fill="#000"
                />
              );
            })}
          </g>
        )}

        {/* particle floor lights */}
        {showParticles && (
          <g opacity="0.85">
            {Array.from({ length: particleCount }).map((_, i) => {
              const x = (i * 27 + 7) % 1600;
              const y = 650 + ((i * 23) % 80);
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="1.5"
                  fill={p.beam1}
                  style={{
                    animation: `ambient-particle ${4 + (i % 5)}s ease-in ${i * 0.2}s infinite`,
                  }}
                />
              );
            })}
          </g>
        )}

        {/* horizon floor fade */}
        <rect
          y="600"
          width="1600"
          height="300"
          fill="url(#ambient-floor)"
        />

        {/* lens flare */}
        {showLensFlare && (
          <circle
            cx="1200"
            cy="180"
            r="100"
            fill={p.beam1}
            style={{ animation: "ambient-flare 6s ease-in-out infinite" }}
          />
        )}
      </svg>

      {/* foreground */}
      {children && <div className="relative z-[3] h-full w-full">{children}</div>}
    </div>
  );
}
