import { Asterisk } from "lucide-react";

const ITEMS = Array(6).fill("We Give Unparalleled Flexibility");

export default function Marquee() {
  return (
    <div className="overflow-hidden bg-[#1601ac] py-[31px]" aria-hidden>
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex">
            {ITEMS.map((text, i) => (
              <span
                key={i}
                className="mr-[25px] flex items-center whitespace-nowrap font-title text-xl font-semibold text-smoke xs:text-2xl sm:text-[30px] md:text-4xl"
              >
                <Asterisk className="mr-5 size-[1em] text-theme" strokeWidth={4} />
                {text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
