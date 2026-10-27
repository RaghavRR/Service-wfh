"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { faqs } from "@/data/misc";

export default function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-4">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={f.q}
            className={`rounded-3xl border transition-colors duration-300 ${
              isOpen ? "border-title bg-title text-white" : "border-line"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 p-6 text-left lg:p-8"
            >
              <span
                className={`font-title text-lg lg:text-xl ${isOpen ? "text-white" : ""}`}
              >
                {f.q}
              </span>
              <span
                className={`grid size-10 shrink-0 place-items-center rounded-full ${
                  isOpen ? "bg-theme text-title" : "bg-smoke"
                }`}
              >
                {isOpen ? <Minus className="size-5" /> : <Plus className="size-5" />}
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <p className="overflow-hidden px-6 text-white/70 lg:px-8">
                <span className="block pb-8">{f.a}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
