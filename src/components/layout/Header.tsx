"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Mail, MapPin, Phone, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Button, { RollLabel } from "@/components/ui/Button";
import SocialIcons from "@/components/ui/SocialIcons";
import { navItems, site, type NavItem } from "@/data/site";

const isActive = (item: NavItem, pathname: string) =>
  item.href === pathname ||
  !!item.children?.some((c) => pathname === c.href || (c.href !== "/" && pathname.startsWith(c.href.replace(/\/\d+$/, ""))));

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-[0_10px_30px_rgba(10,12,0,0.06)]" : ""
        }`}
      >
        <div className="container-x flex h-20 items-center justify-between gap-6 lg:h-24">
          <Logo />

          <nav className="hidden lg:block" aria-label="Main">
            <ul className="flex items-center gap-10">
              {navItems.map((item) => (
                <li key={item.label} className="group relative">
                  {item.children ? (
                    <button
                      type="button"
                      className={`group flex items-center gap-1 py-8 font-title text-sm font-medium uppercase ${
                        isActive(item, pathname) ? "text-title" : "text-title/80"
                      }`}
                    >
                      <RollLabel>{item.label}</RollLabel>
                      <ChevronDown className="size-4 transition-transform duration-300 group-hover:rotate-180" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`group flex py-8 font-title text-sm font-medium uppercase ${
                        pathname === item.href ? "text-title" : "text-title/80"
                      }`}
                    >
                      <RollLabel>{item.label}</RollLabel>
                    </Link>
                  )}

                  {item.children && (
                    <ul className="invisible absolute left-0 top-full w-60 translate-y-3 rounded-2xl bg-white p-3 opacity-0 shadow-[0_20px_50px_rgba(10,12,0,0.12)] transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            className={`block rounded-xl px-4 py-2.5 text-[15px] transition-colors hover:bg-smoke hover:pl-6 ${
                              pathname === c.href
                                ? "bg-theme text-title"
                                : "text-title/80"
                            }`}
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <Button href="/contact" variant="dark" className="hidden xl:inline-flex">
              Let&apos;s Talk with us
            </Button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="group grid size-12 place-items-center rounded-full bg-theme"
            >
              <span className="flex w-5 flex-col items-end gap-1.5">
                <span className="h-0.5 w-5 bg-title" />
                <span className="h-0.5 w-3 bg-title transition-all duration-300 group-hover:w-5" />
                <span className="h-0.5 w-5 bg-title" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Off-canvas panel: full nav on mobile, contact info on all sizes */}
      <div
        className={`fixed inset-0 z-50 bg-title/60 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-[420px] flex-col overflow-y-auto bg-title px-8 py-10 text-white transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="flex items-center justify-between">
          <Logo light onClick={() => setOpen(false)} />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid size-11 place-items-center rounded-full bg-theme text-title transition-transform duration-300 hover:rotate-90"
          >
            <X className="size-5" />
          </button>
        </div>

        <p className="mt-8 text-white/70">{site.tagline}</p>

        <nav className="mt-8 lg:hidden" aria-label="Mobile">
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {navItems.map((item) => (
              <MobileItem
                key={item.label}
                item={item}
                pathname={pathname}
                onNavigate={() => setOpen(false)}
              />
            ))}
          </ul>
        </nav>

        <div className="mt-10 space-y-5">
          <h4 className="text-lg text-white">Get in touch</h4>
          <p className="flex gap-3 text-white/70">
            <MapPin className="mt-1 size-5 shrink-0 text-theme" />
            {site.address}
          </p>
          <a href={site.phoneHref} className="flex gap-3 text-white/70 hover:text-theme">
            <Phone className="mt-1 size-5 shrink-0 text-theme" />
            {site.phone}
          </a>
          <a href={site.emailHref} className="flex gap-3 text-white/70 hover:text-theme">
            <Mail className="mt-1 size-5 shrink-0 text-theme" />
            {site.email}
          </a>
        </div>

        <SocialIcons className="mt-8" />

        <div className="mt-auto pt-10" onClick={() => setOpen(false)}>
          <Button href="/contact" arrow className="w-full">
            Let&apos;s Talk with us
          </Button>
        </div>
      </aside>
    </>
  );
}

function MobileItem({
  item,
  pathname,
  onNavigate,
}: {
  item: NavItem;
  pathname: string;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  if (!item.children) {
    return (
      <li>
        <Link
          href={item.href}
          onClick={onNavigate}
          className={`block py-4 font-title text-sm uppercase ${
            pathname === item.href ? "text-theme" : "text-white"
          }`}
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="flex w-full items-center justify-between py-4 font-title text-sm uppercase text-white"
      >
        {item.label}
        <ChevronDown
          className={`size-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          expanded ? "grid-rows-[1fr] pb-3" : "grid-rows-[0fr]"
        }`}
      >
        <ul className="overflow-hidden pl-4">
          {item.children.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                onClick={onNavigate}
                className={`block py-2 text-[15px] ${
                  pathname === c.href ? "text-theme" : "text-white/70 hover:text-white"
                }`}
              >
                {c.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
