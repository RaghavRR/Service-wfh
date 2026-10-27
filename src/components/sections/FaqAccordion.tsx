"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { faqs } from "@/data/misc";

export default function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div>
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="relative border-b-2 border-title py-[30px] first:border-t-2">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-6 text-left font-title text-xl font-semibold"
            >
              {f.q}
              {isOpen ? (
                <Minus className="mt-0.5 size-5 flex-none" strokeWidth={3} />
              ) : (
                <Plus className="mt-0.5 size-5 flex-none" strokeWidth={3} />
              )}
            </button>
            {isOpen && (
              <p className="mb-4 mt-3 animate-fade-in text-base sm:text-lg">{f.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
