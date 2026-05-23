"use client";

import { useEffect, useState } from "react";

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

  // Scroll-fade math for the logo + content. Stars live at page level
  // in <StarField /> and persist throughout the page; only the hero
  // content fades as you scroll past it.
  const fadeProgress = reduced ? 0 : Math.min(1, scrollY / 500);
  const heroOpacity = 1 - fadeProgress;
  const heroTranslate = reduced ? 0 : fadeProgress * -40;

  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center overflow-hidden">
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
          className={`hero-reveal ${on ? "hero-reveal--on" : ""} text-5xl md:text-7xl font-extralight tracking-[0.15em] uppercase mb-6 text-white`}
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
