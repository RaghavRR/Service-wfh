import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CursorArea from "@/components/ui/CursorArea";
import type { Service } from "@/data/services";

export default function ServicesList({ services }: { services: Service[] }) {
  return (
    <ul className="border-t border-title/15">
      {services.map((s, i) => (
        <li key={s.id} className="border-b border-title/15">
          <CursorArea label="Explore">
            <Link
              href={`/service-details/${s.id}`}
              className="group/row relative block overflow-hidden px-1 py-6 transition-[padding] duration-500 lg:px-6 lg:py-7 lg:hover:px-10"
            >
              {/* Dark fill that rises from the bottom on hover. */}
              <span
                className="absolute inset-0 hidden origin-bottom scale-y-0 bg-title transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover/row:scale-y-100 lg:block"
                aria-hidden
              />

              <div className="relative grid gap-5 lg:grid-cols-12 lg:items-center lg:gap-6">
                <span className="font-title text-sm font-semibold text-title/40 transition-colors duration-500 lg:col-span-1 lg:group-hover/row:text-theme">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="lg:col-span-6">
                  <h3 className="text-lg font-semibold leading-[1.35] transition-colors duration-500 sm:text-xl xl:text-[22px] lg:group-hover/row:text-white">
                    {s.title}
                  </h3>
                  {/* Always visible on small screens; slides open on hover for desktop. */}
                  <div className="grid transition-[grid-template-rows] duration-500 lg:grid-rows-[0fr] lg:group-hover/row:grid-rows-[1fr]">
                    <p className="overflow-hidden pt-3 text-base leading-[1.7] text-title/70 lg:max-w-[520px] lg:text-white/70">
                      {s.excerpt}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-title/50 transition-colors duration-500 lg:col-span-4 lg:group-hover/row:text-white/60">
                  {s.tags.join(" · ")}
                </p>

                <span className="absolute right-0 top-0 grid size-9 place-items-center lg:size-12 rounded-full border border-title/20 transition-all duration-500 group-hover/row:rotate-45 group-hover/row:border-theme group-hover/row:bg-theme lg:static lg:col-span-1 lg:justify-self-end">
                  <ArrowUpRight className="size-4 lg:size-5" strokeWidth={2} />
                </span>
              </div>
            </Link>
          </CursorArea>
        </li>
      ))}
    </ul>
  );
}
