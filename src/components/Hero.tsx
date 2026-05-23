"use client";

import { useEffect, useState } from "react";

// Deterministic star positions (percent-based) so SSR and CSR match.
// Three layers move at different parallax speeds on scroll.
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

export default function Hero() {
  const [play, setPlay] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const id = requestAnimationFrame(() => setPlay(true));
    return () => cancelAnimationFrame(id);
  }, []);

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

  const on = play || reduced;

  // Parallax + fade math — disabled entirely under prefers-reduced-motion.
  const farY = reduced ? 0 : scrollY * 0.15;
  const midY = reduced ? 0 : scrollY * 0.35;
  const nearY = reduced ? 0 : scrollY * 0.6;
  const fadeProgress = reduced ? 0 : Math.min(1, scrollY / 500);
  const heroOpacity = 1 - fadeProgress;
  const heroTranslate = reduced ? 0 : fadeProgress * -40;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Star field — three parallax layers (far, mid, near) */}
      <div
        className="starfield-layer"
        style={{ transform: `translate3d(0, ${farY}px, 0)` }}
        aria-hidden
      >
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
      <div
        className="starfield-layer"
        style={{ transform: `translate3d(0, ${midY}px, 0)` }}
        aria-hidden
      >
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
      <div
        className="starfield-layer"
        style={{ transform: `translate3d(0, ${nearY}px, 0)` }}
        aria-hidden
      >
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

      {/* one-shot glow pulse behind the logo */}
      <div
        aria-hidden
        className={`hero-glow ${on ? "hero-glow--on" : ""}`}
        style={{ opacity: reduced ? undefined : heroOpacity }}
      />

      <div
        className="relative z-10 px-6 text-center"
        style={{
          opacity: heroOpacity,
          transform: `translate3d(0, ${heroTranslate}px, 0)`,
          willChange: "opacity, transform",
        }}
      >
        {/* Logo mark — pops in first */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-transparent.png"
          alt="Cadmus Lab"
          className={`hero-logo ${on ? "hero-logo--on" : ""}`}
          style={{
            width: 375,
            height: 375,
            objectFit: "contain",
            objectPosition: "center top",
            marginBottom: -40,
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />

        <h1
          className={`hero-reveal ${on ? "hero-reveal--on" : ""} text-5xl md:text-7xl font-extralight tracking-[0.15em] uppercase mb-6`}
          style={{ animationDelay: "0.55s" }}
        >
          Cadmus Lab
        </h1>

        <p
          className={`hero-reveal ${on ? "hero-reveal--on" : ""} text-xl md:text-2xl text-[#b4b4cc] font-light mb-4`}
          style={{ animationDelay: "0.70s" }}
        >
          Learn AI. Build with AI. Launch with AI.
        </p>

        <p
          className={`hero-reveal ${on ? "hero-reveal--on" : ""} text-base text-[#b4b4cc]/70 max-w-2xl mx-auto mb-12`}
          style={{ animationDelay: "0.85s" }}
        >
          Free video series, hands-on courses, and a community of builders
          turning AI knowledge into real products.
        </p>

        <div
          className={`hero-reveal ${on ? "hero-reveal--on" : ""} flex flex-col sm:flex-row gap-4 justify-center`}
          style={{ animationDelay: "1.00s" }}
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-white text-black font-medium tracking-wide uppercase text-sm hover:bg-[#64ffda] transition-colors"
          >
            See the Projects
          </a>
          <a
            href="https://youtube.com/@CadmusLab"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-white/20 text-white font-medium tracking-wide uppercase text-sm hover:border-[#64ffda] hover:text-[#64ffda] transition-colors"
          >
            Watch on YouTube
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/0 to-white/30" />
      </div>
    </section>
  );
}
