"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/data/misc";

export default function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <ul className="border-t border-title/15">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <li key={f.q} className="border-b border-title/15">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="group flex w-full cursor-pointer items-start gap-5 py-6 text-left lg:gap-8 lg:py-7"
            >
              <span
                className={`mt-1 w-6 flex-none font-title text-sm font-semibold transition-colors duration-300 ${
                  isOpen ? "text-title" : "text-title/40"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 font-title text-base font-semibold leading-[1.45] sm:text-lg">
                {f.q}
              </span>
              <span
                className={`grid size-9 flex-none place-items-center rounded-full border transition-all duration-300 ${
                  isOpen
                    ? "rotate-45 border-theme bg-theme"
                    : "border-title/20 group-hover:border-title"
                }`}
                aria-hidden
              >
                <Plus className="size-4" strokeWidth={2} />
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-500 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <p className="overflow-hidden pl-11 pr-14 text-base leading-[1.75] text-title/70 lg:pl-14">
                <span className="block pb-7">{f.a}</span>
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
