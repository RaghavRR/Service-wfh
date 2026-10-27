import Link from "next/link";
import { site } from "@/data/site";

export default function Logo({
  light = false,
  onClick,
}: {
  light?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${site.name} home`}
      className={`font-title text-2xl font-bold leading-none tracking-tight sm:text-[28px] ${
        light ? "text-white" : "text-title"
      }`}
    >
      {site.name}
    </Link>
  );
}
