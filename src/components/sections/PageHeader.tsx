import Link from "next/link";
import { ChevronRight } from "lucide-react";
import WorksBadge from "@/components/ui/WorksBadge";

type Crumb = { label: string; href?: string };

export default function PageHeader({
  title,
  crumbs = [],
}: {
  title: string;
  crumbs?: Crumb[];
}) {
  const trail: Crumb[] = [{ label: "Home", href: "/" }, ...crumbs];

  return (
    <section className="relative overflow-hidden bg-smoke">
      <div className="container-x flex flex-col gap-10 py-16 md:flex-row md:items-end md:justify-between lg:py-24">
        <div className="min-w-0">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-title/60">
              {trail.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  {i > 0 && <ChevronRight className="size-4" />}
                  {c.href ? (
                    <Link href={c.href} className="hover:text-title">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-title" aria-current="page">
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <h1 className="break-words text-[48px] font-semibold uppercase leading-none sm:text-[80px] lg:text-[120px]">
            {title}
          </h1>
        </div>
        <WorksBadge />
      </div>
    </section>
  );
}
