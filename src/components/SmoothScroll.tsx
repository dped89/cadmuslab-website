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
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
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
