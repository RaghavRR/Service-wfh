import type { SVGProps } from "react";
import { socials, type SocialName } from "@/data/site";

type IconProps = SVGProps<SVGSVGElement>;

const icons: Record<SocialName, (p: IconProps) => React.ReactElement> = {
  facebook: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M14 8.5V6.8c0-.8.5-1 .9-1H17V2.1L14.1 2C10.9 2 10 4.4 10 6.3v2.2H8v3.8h2V22h4v-9.7h2.9l.4-3.8H14z" />
    </svg>
  ),
  instagram: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...p}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  twitter: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.3L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z" />
    </svg>
  ),
  dribbble: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...p}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8.6 2.6c3.6 4.6 6 10.4 7.2 18.4M2.1 10.5c5.9.4 11.5-.9 16.3-5.3M5 19c3.2-4.6 8.4-6.6 16.8-4.8" />
    </svg>
  ),
};

export default function SocialIcons({
  className = "",
  itemClass = "border-white/20 text-white hover:bg-theme hover:text-title hover:border-theme",
  plain = false,
  only,
}: {
  className?: string;
  itemClass?: string;
  plain?: boolean;
  only?: SocialName[];
}) {
  const list = only ? socials.filter((s) => only.includes(s.name)) : socials;
  return (
    <div className={`flex ${plain ? "gap-6" : "gap-3"} ${className}`}>
      {list.map(({ name, href }) => {
        const Icon = icons[name];
        return (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className={
              plain
                ? "text-title transition-colors hover:text-success"
                : `grid size-10 place-items-center rounded-full border transition-colors duration-300 ${itemClass}`
            }
          >
            <Icon className={plain ? "size-5" : "size-4"} />
          </a>
        );
      })}
    </div>
  );
}
