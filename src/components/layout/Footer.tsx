import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Logo from "@/components/ui/Logo";
import SocialIcons from "@/components/ui/SocialIcons";
import { footerLinks, site } from "@/data/site";

const YEAR = 2026;

export default function Footer() {
  return (
    <footer className="bg-title text-white">
      <div className="container-x grid gap-12 pb-16 pt-20 md:grid-cols-2 lg:grid-cols-12 lg:pt-28">
        <div className="lg:col-span-5">
          <Logo light />
          <p className="mt-6 max-w-sm text-white/60">{site.tagline}</p>
          <SocialIcons className="mt-8" />
        </div>

        <div className="lg:col-span-3">
          <h4 className="mb-6 text-lg text-white">Links</h4>
          <ul className="space-y-3">
            {footerLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="group inline-flex items-center gap-2 text-white/60 transition-colors hover:text-theme"
                >
                  <span className="h-px w-0 bg-theme transition-all duration-300 group-hover:w-4" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="mb-6 text-lg text-white">Contact</h4>
          <ul className="space-y-3 text-white/60">
            <li>{site.address}</li>
            <li>
              <a href={site.phoneHref} className="hover:text-theme">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="hover:text-theme">
                {site.email}
              </a>
            </li>
          </ul>
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-3 font-title text-2xl text-white hover:text-theme"
          >
            Let&apos;s talk
            <span className="grid size-10 place-items-center rounded-full bg-theme text-title transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="size-5" />
            </span>
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-sm text-white/50 sm:flex-row">
          <p>
            Copyright © {YEAR} {site.name}. All rights reserved.
          </p>
          <p className="flex gap-6">
            <Link href="/faq" className="hover:text-theme">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-theme">
              Contact
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
