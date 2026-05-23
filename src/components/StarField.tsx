"use client";

import { useEffect, useState } from "react";

// Page-level parallax star field. Fixed at the viewport, drifts gently
// with scroll across three depth layers. White sections naturally cover
// the stars (their bg-white paints over); transparent sections reveal them.

const FAR_STARS: Array<[number, number]> = [
  [5, 8], [12, 15], [22, 6], [31, 18], [42, 11], [53, 7], [64, 14], [75, 9], [86, 16], [94, 5],
  [3, 28], [15, 35], [25, 25], [37, 38], [48, 30], [60, 36], [71, 27], [82, 33], [91, 25],
  [8, 50], [19, 58], [29, 52], [40, 60], [51, 55], [63, 51], [73, 57], [84, 53], [95, 60],
  [7, 75], [18, 82], [28, 78], [39, 85], [50, 80], [61, 77], [72, 83], [83, 79], [93, 88],
];

const MID_STARS: Array<[number, number]> = [
  [10, 12], [25, 22], [40, 8], [55, 18], [70, 14], [85, 20],
  [15, 40], [32, 48], [48, 42], [65, 50], [80, 44],
  [20, 65], [35, 72], [50, 68], [68, 75], [82, 70],
  [12, 90], [45, 95], [78, 92],
];

const NEAR_STARS: Array<[number, number]> = [
  [18, 20], [38, 15], [62, 25], [82, 18],
  [22, 55], [52, 50], [78, 60],
  [30, 85], [55, 80], [75, 88],
];

export default function StarField() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  // Gentler speeds than the Hero-internal field since stars are now
  // permanent on screen — fast parallax would feel disorienting on a
  // long page.
  const farY = reduced ? 0 : scrollY * 0.05;
  const midY = reduced ? 0 : scrollY * 0.1;
  const nearY = reduced ? 0 : scrollY * 0.15;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden>
      <div className="starfield-layer" style={{ transform: `translate3d(0, ${farY}px, 0)` }}>
        {FAR_STARS.map(([x, y], i) => (
          <span
            key={`far-${i}`}
            className={`star star--far ${i % 5 === 0 ? "star--twinkle" : ""}`}
            style={{
              left: `${x}%`,
              top: `${y}%`,
              animationDelay: i % 5 === 0 ? `${(i * 0.7) % 3}s` : undefined,
            }}
          />
        ))}
      </div>
      <div className="starfield-layer" style={{ transform: `translate3d(0, ${midY}px, 0)` }}>
        {MID_STARS.map(([x, y], i) => (
          <span
            key={`mid-${i}`}
            className={`star star--mid ${i % 4 === 1 ? "star--twinkle" : ""}`}
            style={{
              left: `${x}%`,
              top: `${y}%`,
              animationDelay: i % 4 === 1 ? `${(i * 0.9) % 3.5}s` : undefined,
            }}
          />
        ))}
      </div>
      <div className="starfield-layer" style={{ transform: `translate3d(0, ${nearY}px, 0)` }}>
        {NEAR_STARS.map(([x, y], i) => (
          <span
            key={`near-${i}`}
            className={`star star--near ${i % 3 === 0 ? "star--twinkle" : ""}`}
            style={{
              left: `${x}%`,
              top: `${y}%`,
              animationDelay: i % 3 === 0 ? `${(i * 1.1) % 4}s` : undefined,
            }}
          />
        ))}
      </div>
    </div>
  );
}
