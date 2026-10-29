"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Inertia scrolling for wheel/trackpad; touch devices keep native scrolling.
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ autoRaf: true, anchors: { offset: -100 }, lerp: 0.09 });

    // Pause while an overlay (e.g. the mobile menu) locks body scroll.
    const observer = new MutationObserver(() => {
      if (document.body.style.overflow === "hidden") lenis.stop();
      else lenis.start();
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["style"] });

    return () => {
      observer.disconnect();
      lenis.destroy();
    };
  }, []);

  return null;
}
