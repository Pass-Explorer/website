"use client";

import { useMemo } from "react";

/**
 * QR glyphs. deterministic procedural decorations, NOT scannable codes.
 *
 * Used inside DigitalPass stubs (small) and the TicketReveal hero (big).
 * The seed string drives an xorshift PRNG so the glyph looks unique per
 * ticket but stays stable across renders. The big variant carves three
 * corner finders so it reads as "QR" at a glance, even though scanning
 * does nothing. real QR generation happens at the validator screen via
 * an actual encoder before check-in.
 */

function seedToBits(seed: string, count: number): boolean[] {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  }
  const rand = () => {
    h = (h ^ (h << 13)) >>> 0;
    h = (h ^ (h >>> 17)) >>> 0;
    h = (h ^ (h << 5)) >>> 0;
    return (h % 1000) / 1000;
  };
  return Array.from({ length: count }, () => rand() > 0.5);
}

interface QRGlyphProps {
  /** Side length in px. */
  size?: number;
  /** Seed string (typically `tokenId`). */
  seed?: string;
}

/** Small (9×9) glyph for the DigitalPass stub. */
export function QRGlyph({ size = 64, seed = "tkt" }: QRGlyphProps) {
  const N = 9;
  const cells = useMemo(() => seedToBits(seed, N * N), [seed]);
  return (
    <div
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        padding: 4,
        background: "var(--ink)",
        borderRadius: 4,
        display: "grid",
        gridTemplateColumns: `repeat(${N}, 1fr)`,
        gap: 1,
      }}
    >
      {cells.map((on, i) => (
        <span
          key={i}
          style={{ background: on ? "var(--night)" : "var(--ink)" }}
        />
      ))}
    </div>
  );
}

/** Big (21×21) glyph with corner finders for TicketReveal hero. */
export function BigQR({ size = 220, seed = "tkt" }: QRGlyphProps) {
  const N = 21;
  const cells = useMemo(() => {
    const arr = seedToBits(seed, N * N);
    // Carve three corner finders so the glyph reads as a QR code.
    const finder = (r: number, c: number) => {
      for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
          const on =
            i === 0 ||
            i === 6 ||
            j === 0 ||
            j === 6 ||
            (i >= 2 && i <= 4 && j >= 2 && j <= 4);
          arr[(r + i) * N + (c + j)] = on;
        }
      }
    };
    finder(0, 0);
    finder(0, N - 7);
    finder(N - 7, 0);
    return arr;
  }, [seed]);

  return (
    <div
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        background: "var(--ink)",
        padding: 8,
        borderRadius: 8,
        display: "grid",
        gridTemplateColumns: `repeat(${N}, 1fr)`,
        gap: 0,
      }}
    >
      {cells.map((on, i) => (
        <span
          key={i}
          style={{ background: on ? "var(--night)" : "var(--ink)" }}
        />
      ))}
    </div>
  );
}
