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

export const btnClass = (variant: Variant = "theme", className = "") =>
  `group inline-flex items-center justify-center gap-3 px-10 py-[21.5px] font-title text-sm font-semibold uppercase transition-colors duration-300 ${variants[variant]} ${className}`;

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
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "theme",
  arrow = false,
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
        className={btnClass(variant, className)}
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
    <Link href={href} className={btnClass(variant, className)}>
      {content}
    </Link>
  );
}

export function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: string;
  className?: string;
}) {
  const cls = `group relative inline-flex items-center gap-2.5 pb-1.5 font-title text-sm font-semibold uppercase after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-current ${className}`;
  const content = (
    <>
      <RollLabel>{children}</RollLabel>
      <ArrowUpRight
        className="size-4 transition-transform duration-300 group-hover:rotate-45"
        strokeWidth={2.5}
      />
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
