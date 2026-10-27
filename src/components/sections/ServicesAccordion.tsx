"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import type { Service } from "@/data/services";

export default function ServicesAccordion({ services }: { services: Service[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="mx-auto lg:max-w-[760px] 2xl:max-w-[880px]">
      {services.map((s, i) => {
        const open = active === i;
        return (
          <div
            key={s.id}
            className="relative justify-between gap-5 border-b-2 border-title py-[30px] first:border-t-2 lg:flex"
          >
            <button
              type="button"
              onClick={() => setActive(open ? -1 : i)}
              aria-expanded={open}
              className="flex flex-none items-start pr-10 text-left font-title text-xl font-semibold sm:text-2xl lg:pr-0"
            >
              <span className="mr-2.5 mt-1.5 text-sm font-semibold sm:mr-10">
                {String(i + 1).padStart(2, "0")}
              </span>
              {s.title}
            </button>
            {open && (
              <p className="mt-5 animate-fade-in text-base sm:text-lg md:pr-[60px] lg:-mt-1 lg:max-w-[365px]">
                {s.excerpt}
              </p>
            )}
            <button
              type="button"
              onClick={() => setActive(open ? -1 : i)}
              aria-label={open ? `Close ${s.title}` : `Open ${s.title}`}
              aria-expanded={open}
              className="absolute right-0 top-[25px] grid size-9 place-items-center"
            >
              {open ? <Minus className="size-5" strokeWidth={3} /> : <Plus className="size-5" strokeWidth={3} />}
            </button>
          </div>
        );
      })}
    </div>
  );
}
