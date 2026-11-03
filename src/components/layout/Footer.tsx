import Link from "next/link";
import SocialIcons from "@/components/ui/SocialIcons";
import Newsletter from "@/components/sections/Newsletter";
import { footerLinks, site } from "@/data/site";
import { band } from "@/components/sections/SplitBand";

const YEAR = 2026;

const widgetTitle = "mb-6 font-title text-xs font-semibold uppercase tracking-[0.14em] text-white/50 lg:mb-8";

// Decorative layer only: diagonal ladder lines, a lime glow, concentric rings and a dot grid.
function FooterBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -right-[10%] -top-1/2 h-[140%] w-[45%] rotate-[28deg] bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.12)_0_1px,transparent_1px_22px)] [mask-image:linear-gradient(90deg,transparent,#000_30%,#000_70%,transparent)]" />
      <div className="absolute -left-[20%] top-[20%] h-[140%] w-[30%] rotate-[28deg] bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.09)_0_1px,transparent_1px_22px)] [mask-image:linear-gradient(90deg,transparent,#000_30%,#000_70%,transparent)]" />
      <div className="absolute -right-40 -top-40 size-[620px] rounded-full bg-[radial-gradient(closest-side,rgba(227,255,4,0.22),transparent)]" />
      <div className="absolute -bottom-[360px] -left-[200px] size-[720px] rounded-full bg-[repeating-radial-gradient(circle,transparent_0_34px,rgba(255,255,255,0.14)_34px_35px)] [mask-image:radial-gradient(closest-side,#000_45%,transparent)]" />
      <div className="absolute bottom-0 right-0 h-[70%] w-[45%] bg-[radial-gradient(rgba(255,255,255,0.28)_1px,transparent_1.5px)] bg-[size:18px_18px] [mask-image:radial-gradient(100%_100%_at_100%_100%,#000,transparent_70%)]" />
    </div>
  );
}

// Dark footer in the hero's palette.
export default function Footer() {
  return (
    <>
      <footer className={`${band} relative overflow-hidden bg-title text-white`}>
        <FooterBackdrop />
        <div className="container-x relative">
          <div className="-mx-3 flex flex-wrap justify-between pb-10 pt-16 lg:pb-28 lg:pt-24">
            <div className="mb-12 w-full px-3 md:w-1/2 xl:w-5/12">
              <Newsletter />
            </div>
            <div className="mb-12 w-full px-3 md:w-1/4 xl:w-1/6">
              <h3 className={widgetTitle}>Links</h3>
              <ul className="space-y-3">
                {footerLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="relative inline-flex text-base text-white/85 transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-theme after:transition-all after:duration-400 hover:text-white hover:after:w-full"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-12 w-full px-3 md:w-1/2 lg:w-1/3 xl:w-auto">
              <h3 className={widgetTitle}>Contact</h3>
              <ul className="space-y-5 text-base leading-[1.75] text-white/85">
                <li className="max-w-[280px]">{site.address}</li>
                <li>
                  <a href={site.phoneHref} className="block transition-colors hover:text-theme">
                    {site.phone}
                  </a>
                  <a href={site.emailHref} className="block transition-colors hover:text-theme">
                    {site.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-x relative">
          <div className="flex flex-col gap-4 border-t border-white/15 py-6 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-white/60">
              Copyright © {YEAR} {site.name}
            </p>
            <SocialIcons />
          </div>
        </div>
      </footer>
    </>
  );
}
