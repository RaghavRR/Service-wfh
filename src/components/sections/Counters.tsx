"use client";

import { useEffect, useRef, useState } from "react";
import { counters } from "@/data/misc";

function Counter({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / 1600, 1);
          setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="border-b border-line pb-8">
      <p className="font-title text-[56px] font-semibold leading-none lg:text-[72px]">
        {n}
        <span className="text-title/30">+</span>
      </p>
      <h3 className="mt-4 text-lg">{label}</h3>
      <p className="mt-2 text-title/60">
        We design high quality websites that make users come back for more.
      </p>
    </div>
  );
}

export default function Counters() {
  return (
    <div className="space-y-10">
      {counters.map((c) => (
        <Counter key={c.label} {...c} />
      ))}
    </div>
  );
}
