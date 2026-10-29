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
    <div
      ref={ref}
      className="relative w-full px-3 md:w-1/2 lg:w-1/3 xl:w-auto xl:[&:not(:first-child)]:before:absolute xl:[&:not(:first-child)]:before:-left-[30px] xl:[&:not(:first-child)]:before:top-0 xl:[&:not(:first-child)]:before:h-full xl:[&:not(:first-child)]:before:w-0.5 xl:[&:not(:first-child)]:before:bg-title 2xl:[&:not(:first-child)]:before:-left-[70px]"
    >
      <div className="text-center md:max-w-[320px] md:text-left">
        <h3 className="mb-[18px] text-[36px] font-semibold leading-[1.2] md:text-[40px] xl:text-[48px]">
          {n}+
        </h3>
        <h4 className="mb-[15px] text-[22px] font-semibold xl:text-2xl">{label}</h4>
        <p className="text-base xl:text-lg">
          We are a creative agency brands building insightful strategy,
          creating unique designs helping
        </p>
      </div>
    </div>
  );
}

export default function Counters() {
  return (
    <div className="-mx-3 flex flex-wrap items-center justify-center gap-y-10 lg:justify-between">
      {counters.map((c) => (
        <Counter key={c.label} {...c} />
      ))}
    </div>
  );
}
