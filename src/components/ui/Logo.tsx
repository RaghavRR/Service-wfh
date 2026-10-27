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
      className={`inline-flex items-center gap-2 font-title text-[28px] font-bold leading-none tracking-tight ${
        light ? "text-white" : "text-title"
      }`}
    >
      <span className="grid size-9 place-items-center rounded-full bg-theme text-lg text-title">
        {site.name.charAt(0)}
      </span>
      {site.name.toLowerCase()}
    </Link>
  );
}
