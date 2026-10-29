"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { RollLabel } from "@/components/ui/Button";
import { navItems } from "@/data/site";

// "/project" also stays active on "/project-details/…".
const isActive = (href: string, pathname: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // On the home page the header floats over the hero video until the user scrolls.
  const overlay = isHome && !scrolled;

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
        className={`sticky top-0 z-40 transition-[background-color,box-shadow] duration-500 ${
          overlay ? "bg-transparent" : "bg-white"
        } ${scrolled ? "shadow-[0_10px_30px_rgba(10,12,0,0.06)]" : ""}`}
      >
        <div
          className="container-x flex h-16 items-center justify-between gap-4 lg:h-[72px]"
        >
          <Logo light={overlay} />

          <nav className="hidden lg:block" aria-label="Main">
            <ul className="flex items-center lg:-mr-3 xl:-mr-5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`group flex px-3 py-4 font-title text-sm font-semibold uppercase tracking-[-0.14px] transition-colors duration-500 xl:px-5 ${
                      isActive(item.href, pathname)
                        ? overlay ? "text-theme" : "text-success"
                        : overlay ? "text-white hover:text-theme" : "text-title hover:text-success"
                    }`}
                  >
                    <RollLabel>{item.label}</RollLabel>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className={`group flex size-11 shrink-0 flex-col items-center justify-center gap-1 rounded-full border-2 transition-colors duration-500 lg:hidden ${
              overlay ? "border-white [&>span]:bg-white" : "border-title [&>span]:bg-title"
            }`}
          >
            <span className="h-0.5 w-[18px]" />
            <span className="h-0.5 w-[18px] transition-all duration-300 group-hover:w-2.5" />
            <span className="h-0.5 w-[18px]" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 lg:hidden ${
          open ? "bg-title/60 opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden
      />
      <aside
        className={`fixed left-0 top-0 z-50 flex h-full w-full max-w-[310px] flex-col overflow-y-auto bg-white px-5 pb-10 text-title transition-transform duration-500 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="flex items-center justify-between pb-4 pt-6">
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
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3.5 font-title text-lg font-semibold uppercase ${
                    isActive(item.href, pathname) ? "text-success" : "text-title"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
