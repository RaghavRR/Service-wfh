import Link from "next/link";
import { RollLabel } from "@/components/ui/Button";
import SocialIcons from "@/components/ui/SocialIcons";
import Marquee from "@/components/layout/Marquee";
import Newsletter from "@/components/sections/Newsletter";
import { footerLinks, site } from "@/data/site";
import { band } from "@/components/sections/SplitBand";

const YEAR = 2026;

const mainLinks = [
  { label: "Services", href: "/service-2" },
  { label: "Our Team", href: "/team" },
  { label: "FAQ", href: "/faq" },
  // { label: "Blog", href: "/blog-2" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/faq" },
  { label: "Terms & Conditions", href: "/faq" },
];

function LinkList({ links }: { links: typeof mainLinks }) {
  return (
    <ul className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-7 sm:gap-y-[15px] xl:gap-x-10">
      {links.map((l) => (
        <li key={l.label}>
          <Link
            href={l.href}
            className="group flex font-title text-sm font-semibold uppercase tracking-[-0.14px]"
          >
            <RollLabel>{l.label}</RollLabel>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function HomeFooter() {
  return (
    <footer className={`${band} bg-smoke pt-10`}>
      <div className="container-x">
        <div className="flex flex-col gap-2.5 border-y-2 border-title py-[21px] sm:gap-[15px] lg:flex-row lg:items-center lg:justify-between">
          <LinkList links={mainLinks} />
          <LinkList links={legalLinks} />
        </div>
        <div className="flex flex-col-reverse items-start gap-4 py-[22px] sm:flex-row sm:items-center sm:justify-between">
          <SocialIcons plain />
          <p className="text-lg">
            Copyright © {YEAR} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}

const widgetTitle = "mb-8 text-xl font-semibold leading-[30px]";

export function InnerFooter() {
  return (
    <>
      <Marquee />
      <footer className={`${band} bg-smoke`}>
        <div className="container-x">
          <div className="-mx-3 flex flex-wrap justify-between pb-[30px] pt-20 lg:pb-[90px] lg:pt-[140px]">
            <div className="mb-[50px] w-full px-3 md:w-1/2 xl:w-5/12">
              <Newsletter />
            </div>
            <div className="mb-[50px] w-full px-3 md:w-1/4 xl:w-1/6">
              <h3 className={widgetTitle}>Links</h3>
              <ul>
                {footerLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="relative mb-4 inline-flex text-lg after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-title after:transition-all after:duration-400 hover:after:w-full xl:mb-[19px]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-[50px] w-full px-3 md:w-1/2 lg:w-1/3 xl:w-auto">
              <h3 className={widgetTitle}>Contact</h3>
              <ul className="space-y-[23px] text-lg leading-[30px]">
                <li className="max-w-[280px]">{site.address}</li>
                <li>
                  <a href={site.phoneHref} className="block hover:underline">
                    {site.phone}
                  </a>
                  <a href={site.emailHref} className="block hover:underline">
                    {site.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-x">
          <div className="flex flex-col gap-4 border-t-2 border-title py-[22px] md:flex-row md:items-center md:justify-between">
            <p className="text-lg">
              Copyright © {YEAR} {site.name}
            </p>
            <SocialIcons plain />
          </div>
        </div>
      </footer>
    </>
  );
}
