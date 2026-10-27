"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  from,
  className = "",
  children,
}: {
  from: "left" | "right" | "top";
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        io.disconnect();
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} data-reveal={from} className={`${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}
