import type { ReactNode } from "react";

// Placeholder client wordmarks: each gets its own small mark and type treatment so the row
// reads like a set of real logos rather than a list of names.
const LOGOS: { name: string; mark: ReactNode; className: string }[] = [
  {
    name: "Northwind",
    mark: <path d="M12 3 21 20H3z" />,
    className: "font-title font-semibold tracking-[-0.03em]",
  },
  {
    name: "Lumina",
    mark: <circle cx="12" cy="12" r="7.5" fill="none" strokeWidth="3" />,
    className: "font-body text-base font-light uppercase tracking-[0.28em]",
  },
  {
    name: "apexo",
    mark: <path d="M4 5h16v5H4zM4 14h10v5H4z" />,
    className: "font-body text-[22px] font-bold lowercase tracking-[-0.04em]",
  },
  {
    name: "Vortex",
    mark: (
      <g fill="none" strokeWidth="2.2">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4.5" />
      </g>
    ),
    className: "font-title text-sm font-semibold uppercase tracking-[0.22em]",
  },
  {
    name: "Kinetic",
    mark: <path d="M5 20 11 4h3L8 20zM12 20l6-16h3l-6 16z" />,
    className: "font-body text-xl font-semibold italic tracking-[-0.02em]",
  },
  {
    name: "orbitly",
    mark: (
      <g>
        <circle cx="10" cy="13" r="6" />
        <circle cx="19" cy="5" r="2.5" />
      </g>
    ),
    className: "font-title font-medium lowercase tracking-[-0.02em]",
  },
  {
    name: "Zenith",
    mark: <path d="M3 18a9 9 0 0 1 18 0z" />,
    className: "font-body text-[15px] font-medium uppercase tracking-[0.32em]",
  },
  {
    name: "Pulsar",
    mark: <path d="M12 2c.9 5.6 4.4 9.1 10 10-5.6.9-9.1 4.4-10 10-.9-5.6-4.4-9.1-10-10 5.6-.9 9.1-4.4 10-10z" />,
    className: "font-title font-semibold tracking-[-0.02em]",
  },
];

function LogoRow({ logos, reverse }: { logos: typeof LOGOS; reverse?: boolean }) {
  return (
    <ul
      className="flex w-max animate-marquee [animation-duration:50s] group-hover:[animation-play-state:paused]"
      style={reverse ? { animationDirection: "reverse" } : undefined}
    >
      {/* Two identical halves: the animation shifts by -50%, so the loop is seamless. */}
      {[0, 1].map((copy) =>
        logos.map((logo) => (
          <li
            key={`${copy}-${logo.name}`}
            aria-hidden={copy === 1}
            className="flex items-center gap-2.5 px-6 text-lg text-title/35 transition-colors duration-300 hover:text-title sm:gap-3 sm:px-10 sm:text-2xl lg:px-14"
          >
            <svg viewBox="0 0 24 24" className="size-6 flex-none fill-current stroke-current sm:size-8" aria-hidden>
              {logo.mark}
            </svg>
            <span className={`whitespace-nowrap leading-none ${logo.className}`}>{logo.name}</span>
          </li>
        )),
      )}
    </ul>
  );
}

// Client strip straight under the hero: two rows of wordmarks drifting in opposite directions
// across the full width, fading out at both edges. Hovering pauses both rows.
export default function ClientLogos() {
  return (
    <section
      className="group flex flex-col gap-10 overflow-hidden border-b border-title/10 bg-white py-16 [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)] lg:gap-14 lg:py-24"
      aria-label="Clients"
    >
      <LogoRow logos={LOGOS} />
      <LogoRow logos={[...LOGOS.slice(4), ...LOGOS.slice(0, 4)]} reverse />
    </section>
  );
}
