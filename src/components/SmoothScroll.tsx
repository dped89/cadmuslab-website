"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Wraps the page in Lenis-driven smooth scroll. Lenis lerps the
// native scroll position, so existing window scroll listeners
// (StarField parallax, Hero logo fade) keep working — the values
// they see just arrive on an eased curve instead of raw jumps.
//
// Respects prefers-reduced-motion: disabled entirely if the user
// has that system preference set.

export default function SmoothScroll() {
  useEffect(() => {
    const reduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const lenis = new Lenis({
      // Lerp-based interpolation: actual scroll position continuously
      // chases the target each frame, so consecutive wheel ticks blend
      // into one smooth flow instead of each one triggering a discrete
      // duration-based animation (which reads as "chop chop chop").
      lerp: 0.07,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      // Touch devices stay on native scroll — virtualized touch scroll
      // feels worse than the OS implementation on mobile.
      syncTouch: false,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
