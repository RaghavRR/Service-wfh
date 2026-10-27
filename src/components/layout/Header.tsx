"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Search, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Button, { RollLabel } from "@/components/ui/Button";
import SocialIcons from "@/components/ui/SocialIcons";
import { navItems, site, type NavItem } from "@/data/site";

const matches = (href: string, pathname: string) =>
  href === pathname ||
  (/\/\d+$/.test(href) && pathname.startsWith(href.replace(/\d+$/, "")));

const isActive = (item: NavItem, pathname: string) =>
  matches(item.href, pathname) ||
  !!item.children?.some((c) => matches(c.href, pathname));

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const closeDropdown = () => {
    setOpenMenu(null);
    (document.activeElement as HTMLElement | null)?.blur();
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (searchOpen) searchRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      setSearchOpen(false);
      setOpenMenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, searchOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-[0_10px_30px_rgba(10,12,0,0.06)]" : ""
        }`}
      >
        <div
          className={`flex h-20 items-center justify-between gap-4 px-3 sm:h-[90px] sm:px-12 ${
            isHome ? "lg:h-[110px]" : "lg:h-[106px]"
          }`}
        >
          <Logo />

          <nav className="hidden lg:ml-auto lg:block" aria-label="Main">
            <ul className="flex items-center">
              {navItems.map((item) => {
                const active = isActive(item, pathname);
                const labelClass = `group flex px-3 ${isHome ? "py-[46.5px]" : "py-[44.5px]"} font-title text-sm font-semibold uppercase tracking-[-0.14px] transition-colors xl:px-5 ${
                  active ? "text-success" : "text-title hover:text-success"
                }`;
                const dropdownOpen = openMenu === item.label;
                return (
                  <li
                    key={item.label}
                    className="group relative"
                    onMouseEnter={() => item.children && setOpenMenu(item.label)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    {item.children ? (
                      <button
                        type="button"
                        onClick={() => setOpenMenu(dropdownOpen ? null : item.label)}
                        aria-expanded={dropdownOpen}
                        className={labelClass}
                      >
                        <RollLabel>{item.label}</RollLabel>
                      </button>
                    ) : (
                      <Link href={item.href} className={labelClass}>
                        <RollLabel>{item.label}</RollLabel>
                      </Link>
                    )}

                    {item.children && (
                      <ul
                        className={`absolute left-0 top-full w-[280px] bg-title px-7 py-6 transition-all duration-300 ${
                          dropdownOpen
                            ? "visible translate-y-0 opacity-100"
                            : "invisible translate-y-3 opacity-0"
                        }`}
                      >
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              onClick={closeDropdown}
                              className={`block py-2.5 text-base transition-colors hover:text-success ${
                                matches(c.href, pathname) ? "text-success" : "text-white"
                              }`}
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-5 lg:ml-[25px] xl:ml-[85px] 2xl:gap-[50px]">
            {isHome ? (
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
                className="group flex items-center gap-2 font-title text-sm font-semibold uppercase"
              >
                <Search className="size-5" strokeWidth={2.2} />
                <span className="hidden sm:inline-flex">
                  <RollLabel>Search</RollLabel>
                </span>
              </button>
            ) : (
              <div className="hidden lg:block">
                <Button href="/project" variant="dark">
                  Works With Us
                </Button>
              </div>
            )}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className={`group flex size-[50px] shrink-0 flex-col items-center justify-center gap-1 rounded-full border-2 border-title sm:size-[60px] ${
                isHome ? "" : "lg:hidden"
              }`}
            >
              <span className="h-0.5 w-[18px] bg-title" />
              <span className="h-0.5 w-[18px] bg-title transition-all duration-300 group-hover:w-2.5" />
              <span className="h-0.5 w-[18px] bg-title" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-x-0 top-0 z-50 flex h-[300px] items-center bg-title transition-transform duration-500 lg:h-[360px] ${
          searchOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        inert={!searchOpen}
      >
        <button
          type="button"
          onClick={() => setSearchOpen(false)}
          aria-label="Close search"
          className="absolute right-4 top-4 grid size-12 place-items-center rounded-full border border-white text-white transition-transform duration-300 hover:rotate-90 lg:right-10 lg:top-10 lg:size-[60px]"
        >
          <X className="size-5 lg:size-6" />
        </button>
        <div className="container-x">
          <form action="/blog-2" className="mx-auto flex items-center gap-4 border-b-2 border-white xl:w-5/6">
            <label htmlFor="site-search" className="sr-only">
              Search
            </label>
            <input
              ref={searchRef}
              id="site-search"
              name="q"
              type="search"
              placeholder="Search Here.."
              className="h-[70px] min-w-0 flex-1 bg-transparent text-xl text-white outline-none placeholder:text-white/50 lg:text-2xl"
            />
            <button type="submit" aria-label="Submit search" className="text-white">
              <Search className="size-6" />
            </button>
          </form>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          open ? "bg-title/60 opacity-100" : searchOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => {
          setOpen(false);
          setSearchOpen(false);
        }}
        aria-hidden
      />
      <aside
        className={`fixed left-0 top-0 z-50 flex h-full w-full max-w-[310px] flex-col overflow-y-auto bg-white px-5 pb-10 text-title transition-transform duration-500 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="sticky top-0 z-10 -mx-5 flex items-center justify-between bg-white px-5 pb-4 pt-6">
          <Logo onClick={() => setOpen(false)} />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid size-[50px] place-items-center rounded-full border-2 border-title transition-transform duration-300 hover:rotate-90"
          >
            <X className="size-4" strokeWidth={3} />
          </button>
        </div>

        <nav className="mt-4" aria-label="Mobile">
          <ul>
            {navItems.map((item) => (
              <MobileItem
                key={item.label}
                item={item}
                pathname={pathname}
                expanded={mobileOpen === item.label}
                onToggle={() => setMobileOpen(mobileOpen === item.label ? null : item.label)}
                onNavigate={() => setOpen(false)}
              />
            ))}
          </ul>
        </nav>

        <hr className="my-8 border-t-2 border-title" />

        <div className="space-y-6 font-title text-sm font-semibold leading-[1.6]">
          <p className="max-w-[240px]">{site.address}</p>
          <p>
            <a href={site.phoneHref} className="block">
              {site.phone}
            </a>
            <a href={site.emailHref} className="block">
              {site.email}
            </a>
          </p>
        </div>
        <SocialIcons plain className="mt-7" />
      </aside>

      <aside
        className={`fixed right-0 top-0 z-50 hidden h-full w-full max-w-[450px] flex-col overflow-y-auto bg-title px-16 pb-12 pt-[100px] text-white transition-transform duration-500 lg:flex ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
        inert={!open}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="absolute right-6 top-8 grid size-12 place-items-center rounded-full border border-white text-white transition-transform duration-300 hover:rotate-90"
        >
          <X className="size-5" />
        </button>

        <Logo light onClick={() => setOpen(false)} />
        <p className="mt-6 text-lg leading-[1.65] text-white">{site.tagline}</p>
        <hr className="my-10 border-white" />

        <div className="space-y-6 font-title text-sm font-semibold leading-[1.6]">
          <p className="max-w-[260px]">{site.address}</p>
          <p>
            <a href={site.phoneHref} className="block hover:text-theme">
              {site.phone}
            </a>
            <a href={site.emailHref} className="block hover:text-theme">
              {site.email}
            </a>
          </p>
        </div>

        <SocialIcons plain className="mt-8 [&_a]:text-white [&_a:hover]:text-theme" />

        <div className="mt-auto flex justify-end pt-12">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="group grid size-[168px] place-items-center rounded-full bg-theme text-center font-title text-sm font-semibold uppercase leading-[1.6] text-title transition-colors duration-300 hover:bg-white"
          >
            Let&rsquo;s Talk
            <br />
            With Us
          </Link>
        </div>
      </aside>
    </>
  );
}

function MobileItem({
  item,
  pathname,
  expanded,
  onToggle,
  onNavigate,
}: {
  item: NavItem;
  pathname: string;
  expanded: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {

  if (!item.children) {
    return (
      <li>
        <Link
          href={item.href}
          onClick={onNavigate}
          className={`block py-3.5 font-title text-lg font-semibold uppercase ${
            matches(item.href, pathname) ? "text-success" : "text-title"
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
        onClick={onToggle}
        aria-expanded={expanded}
        className={`flex w-full items-center justify-between py-3.5 font-title text-lg font-semibold uppercase ${
          isActive(item, pathname) ? "text-success" : "text-title"
        }`}
      >
        {item.label}
        <ChevronDown
          className={`size-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          strokeWidth={3}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          expanded ? "grid-rows-[1fr] pb-2" : "grid-rows-[0fr]"
        }`}
      >
        <ul className="overflow-hidden pl-5">
          {item.children.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                onClick={onNavigate}
                className={`block py-1.5 text-base ${
                  matches(c.href, pathname) ? "text-success" : "text-title hover:text-success"
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
