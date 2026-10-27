import { clients } from "@/data/misc";

/** Text wordmarks standing in for client logos, in an infinite marquee */
export default function ClientLogos() {
  const row = [...clients, ...clients];
  return (
    <section className="overflow-hidden border-y border-line py-14">
      <ul className="flex w-max animate-marquee gap-20 hover:[animation-play-state:paused]">
        {row.map((name, i) => (
          <li
            key={i}
            aria-hidden={i >= clients.length}
            className="flex items-center gap-3 font-title text-3xl font-semibold text-title/25 transition-colors hover:text-title"
          >
            <span className="size-3 rotate-45 bg-current" />
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
}
