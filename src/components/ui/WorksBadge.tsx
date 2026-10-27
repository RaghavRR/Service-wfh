import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/** Rotating circular "WORKS WITH US" badge linking to the portfolio */
export default function WorksBadge({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/project"
      aria-label="Works with us"
      className={`group relative grid size-36 shrink-0 place-items-center rounded-full bg-theme text-title lg:size-44 ${className}`}
    >
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 size-full animate-spin-slow"
        aria-hidden
      >
        <defs>
          <path
            id="works-circle"
            d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"
          />
        </defs>
        <text className="fill-current font-title text-[17px] font-medium uppercase tracking-[0.3em]">
          <textPath href="#works-circle">
            Works with us • Works with us •
          </textPath>
        </text>
      </svg>
      <span className="grid size-14 place-items-center rounded-full bg-title text-theme transition-transform duration-300 group-hover:rotate-45">
        <ArrowUpRight className="size-6" />
      </span>
    </Link>
  );
}
