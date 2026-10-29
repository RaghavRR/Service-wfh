"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

export default function Logo({
  light = false,
  onClick,
}: {
  light?: boolean;
  onClick?: () => void;
}) {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      scroll
      onClick={(e) => {
        onClick?.();
        // Already on the home page: a same-URL link does nothing, so glide back up to the hero.
        if (pathname === "/") {
          e.preventDefault();
          // Small delay so a closing mobile menu has released the scroll lock first.
          setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
        }
      }}
      aria-label={`${site.name} home`}
      className={`font-title text-2xl transition-colors duration-500 font-bold leading-none tracking-tight sm:text-[28px] ${
        light ? "text-white" : "text-title"
      }`}
    >
      {site.name}
    </Link>
  );
}
