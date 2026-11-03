import Image from "next/image";
import Link from "next/link";
import SocialIcons from "@/components/ui/SocialIcons";
import Newsletter from "@/components/sections/Newsletter";
import { footerLinks, site } from "@/data/site";
import { band } from "@/components/sections/SplitBand";
import footerFigure from "../../../public/images/footer-figure.jpg";

const YEAR = 2026;

const widgetTitle = "mb-6 font-title text-xs font-semibold uppercase tracking-[0.14em] text-white/50 lg:mb-8";

// Decorative layer only: a black-and-white photo on the right, seen through vertical slats
// and faded into the footer so it reads as part of the design rather than a pasted image.
function FooterBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="absolute bottom-0 right-0 aspect-[660/700] h-[45%] md:h-full [mask-image:linear-gradient(0deg,#000_60%,transparent_100%)]">
        <div className="absolute inset-0 [mask-image:linear-gradient(90deg,transparent_0%,#000_35%)]">
          <div className="absolute inset-0 [mask-image:repeating-linear-gradient(90deg,#000_0_14px,transparent_14px_20px)]">
            <Image src={footerFigure} alt="" fill sizes="45vw" className="object-cover opacity-30 md:opacity-75" />
          </div>
        </div>
      </div>
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
