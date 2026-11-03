import { Asterisk } from "lucide-react";
import { band } from "@/components/sections/SplitBand";

const ITEMS = [
  "UI/UX Design",
  "Web Development",
  "Design Systems",
  "Web Apps",
  "E-commerce",
  "Product Strategy",
];

function Track({ text, star }: { text: string; star: string }) {
  return (
    <div className="flex w-max animate-marquee">
      {/* Two identical halves: the animation shifts by -50%, so the loop is seamless. */}
      {[0, 1].map((copy) => (
        <div key={copy} className="flex">
          {[...ITEMS, ...ITEMS].map((label, i) => (
            <span
              key={i}
              className={`flex items-center whitespace-nowrap font-title text-xs font-semibold uppercase tracking-[0.14em] sm:text-sm ${text}`}
            >
              {label}
              <Asterisk className={`mx-6 size-3.5 sm:mx-8 sm:size-4 ${star}`} strokeWidth={3} />
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

// Deep-blue strip on the home page, between the lime testimonials and the white CTA;
// white space above and below keeps it from sitting flush against either.
export default function Marquee() {
  return (
    <div className={`${band} overflow-hidden bg-white py-12 lg:py-16`} aria-hidden>
      <div className="bg-[#2200a8] py-3 lg:py-4">
        <Track text="text-white" star="text-theme" />
      </div>
    </div>
  );
}
