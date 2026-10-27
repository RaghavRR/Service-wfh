import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Variant = "theme" | "dark" | "white" | "outline";

const variants: Record<Variant, string> = {
  theme: "bg-theme text-title hover:bg-title hover:text-white",
  dark: "bg-title text-white hover:bg-theme hover:text-title",
  white: "bg-white text-title hover:bg-theme",
  outline:
    "border border-title text-title hover:bg-title hover:text-white bg-transparent",
};

export const btnClass = (
  variant: Variant = "theme",
  className = "",
  square = false,
) =>
  `group inline-flex items-center justify-center gap-3 font-title font-medium uppercase tracking-wide transition-colors duration-300 ${
    square ? "px-15 py-8 text-base font-semibold" : "rounded-full px-8 py-4 text-[13px]"
  } ${variants[variant]} ${className}`;

/** Label rendered twice so it can roll up on hover */
export function RollLabel({ children }: { children: string }) {
  return (
    <span className="roll">
      <span>{children}</span>
      <span aria-hidden>{children}</span>
    </span>
  );
}

type ButtonProps = {
  href: string;
  children: string;
  variant?: Variant;
  arrow?: boolean;
  /** Sharp-cornered, larger button (hero style) */
  square?: boolean;
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "theme",
  arrow = false,
  square = false,
  className,
}: ButtonProps) {
  const isExternal = /^(https?:|mailto:|tel:)/.test(href);
  const content = (
    <>
      <RollLabel>{children}</RollLabel>
      {arrow && (
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
      )}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={btnClass(variant, className, square)}
        {...(href.startsWith("http") && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={btnClass(variant, className, square)}>
      {content}
    </Link>
  );
}

/** Small underlined text link with arrow, used on cards */
export function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: string;
  className?: string;
}) {
  const cls = `group inline-flex items-center gap-2 font-title text-xs font-medium uppercase tracking-wider ${className}`;
  const content = (
    <>
      <RollLabel>{children}</RollLabel>
      <span className="grid size-8 place-items-center rounded-full bg-theme text-title transition-transform duration-300 group-hover:rotate-45">
        <ArrowUpRight className="size-4" />
      </span>
    </>
  );

  if (/^(https?:|mailto:|tel:)/.test(href)) {
    return (
      <a
        href={href}
        className={cls}
        {...(href.startsWith("http") && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
