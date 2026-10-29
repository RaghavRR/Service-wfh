"use client";

import { useRef, useState } from "react";

// Replaces the mouse cursor with a lime bubble (labelled, or a plain dot without a label)
// while hovering the wrapped content.
// Touch and pen input keep the normal behaviour.
export default function CursorArea({
  label,
  children,
  className = "",
}: {
  label?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const bubble = useRef<HTMLSpanElement>(null);
  const [on, setOn] = useState(false);

  const move = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !bubble.current) return;
    bubble.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
  };

  return (
    <div
      className={`lg:cursor-none ${className}`}
      onPointerEnter={(e) => {
        if (e.pointerType !== "mouse" || !bubble.current) return;
        // Jump straight to the pointer so the bubble doesn't glide in from its last position.
        bubble.current.style.transition = "none";
        move(e);
        void bubble.current.offsetWidth;
        bubble.current.style.transition = "";
        setOn(true);
      }}
      onPointerMove={move}
      onPointerLeave={() => setOn(false)}
    >
      {children}
      <span
        ref={bubble}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-50 hidden transition-transform duration-150 ease-out lg:block"
      >
        <span
          className={`grid place-items-center rounded-full bg-theme font-title text-xs font-semibold uppercase text-title shadow-[0_10px_30px_rgba(10,12,0,0.25)] transition-[scale,opacity] duration-300 ${
            label ? "-ml-12 -mt-12 size-24" : "-ml-3 -mt-3 size-6"
          } ${
            on ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          {label}
        </span>
      </span>
    </div>
  );
}
