import { RollLabel } from "@/components/ui/Button";
import { clients } from "@/data/misc";

export default function ClientLogos() {
  return (
    <section className="section-space overflow-hidden">
      <div className="container-x">
        <ul className="ml-0.5 mt-0.5 grid grid-cols-4 xl:mx-auto xl:max-w-[736px] 2xl:max-w-[856px]">
          {clients.map((name) => (
            <li key={name} className="-ml-0.5 -mt-0.5 border-2 border-title">
              <a
                href="#"
                className="group flex h-[78px] items-center justify-center font-title text-[11px] font-bold xs:h-[98px] xs:text-xs sm:text-base md:h-32 md:text-lg lg:h-[148px] lg:text-2xl"
              >
                <RollLabel>{name}</RollLabel>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
