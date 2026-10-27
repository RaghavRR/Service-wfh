"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const R = 33;
const CIRCUMFERENCE = 2 * Math.PI * R;

export default function ScrollTop() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visible = progress > 0.05;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`fixed bottom-[30px] right-[30px] z-30 grid size-[50px] place-items-center rounded-full bg-white shadow-[0_0_20px_rgba(10,12,0,0.12)] transition-all duration-300 ${
        visible ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg viewBox="0 0 72 72" className="absolute inset-0 size-full -rotate-90" aria-hidden>
        <circle
          cx="36"
          cy="36"
          r={R}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
        />
      </svg>
      <ArrowUp className="size-5" strokeWidth={2.5} />
    </button>
  );
}
