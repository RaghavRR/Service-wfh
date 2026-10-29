import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

const rows = [
  { label: "Email", value: site.email, href: site.emailHref },
  { label: "Phone", value: site.phone, href: site.phoneHref },
  { label: "Studio", value: "27 Division St, New York, NY 10002", href: site.mapUrl },
];

// Typographic contact list (label · value · arrow). Used on the Contact and FAQ pages.
export default function ContactCards({ className = "section-space" }: { className?: string }) {
  return (
    <section className={className}>
      <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="mb-4 flex items-center gap-3 font-title text-xs font-semibold uppercase tracking-[0.12em] text-success sm:text-sm">
            <span className="h-px w-8 bg-success" />
            Contact
          </p>
          <h2 className="text-2xl font-semibold leading-[1.25] tracking-[-0.5px] sm:text-[28px] lg:tracking-[-1px] xl:text-[32px]">
            Say hello.
          </h2>
          <p className="mt-4 max-w-[320px] text-base leading-[1.75] text-title/70">
            Tell us about your project. We reply within one business day.
          </p>
        </div>

        <ul className="border-t border-title/15 lg:col-span-8">
          {rows.map((r) => {
            const external = r.href.startsWith("http");
            return (
              <li key={r.label} className="border-b border-title/15">
                <a
                  href={r.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="group grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-1 py-6 sm:grid-cols-[120px_1fr_auto] lg:py-7"
                >
                  <span className="col-span-2 text-sm text-title/50 sm:col-span-1">{r.label}</span>
                  <span className="text-lg font-medium leading-[1.4] transition-transform duration-300 group-hover:translate-x-1.5 sm:text-xl">
                    {r.value}
                  </span>
                  <ArrowUpRight
                    className="size-5 text-title/40 transition-all duration-300 group-hover:rotate-45 group-hover:text-title"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
