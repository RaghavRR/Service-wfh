"use client";

import { useEffect, useRef, useState } from "react";
import ProjectCard from "@/components/cards/ProjectCard";
import type { Project } from "@/data/projects";
import { band } from "@/components/sections/SplitBand";

const HEADER_H = 72; // desktop header height in Header.tsx

// Pins its content in the middle of the screen and turns vertical scroll into horizontal travel:
// scrolling down moves the cards right-to-left, scrolling up reverses it, and the page only
// continues once the last card is in view. The pinned block is only as tall as its content,
// so tall screens don't get large empty areas above and below it.
export default function ProjectScroller({
  projects,
  heading,
  tone = "light",
}: {
  projects: Project[];
  heading: React.ReactNode;
  tone?: "light" | "dark";
}) {
  const section = useRef<HTMLElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const svhProbe = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [panelH, setPanelH] = useState(0);
  const [stickyTop, setStickyTop] = useState(HEADER_H);
  const dark = tone === "dark";

  useEffect(() => {
    const t = track.current!;
    const p = panel.current!;
    const measure = () => {
      // Use the small viewport height (address bar shown) rather than innerHeight, which
      // changes as mobile browser bars hide/show and would make the pinned block jump.
      const viewportH = svhProbe.current?.offsetHeight || window.innerHeight;
      setDistance(Math.max(0, t.scrollWidth - t.clientWidth));
      setPanelH(p.offsetHeight);
      setStickyTop(Math.max(HEADER_H, (viewportH - p.offsetHeight) / 2));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(t);
    ro.observe(p);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      // Refs are null once the section unmounts (navigation, hot reload).
      if (!section.current || !track.current) return;
      const top = section.current.getBoundingClientRect().top;
      const p = distance ? Math.min(1, Math.max(0, (stickyTop - top) / distance)) : 0;
      track.current.style.transform = `translate3d(${-p * distance}px, 0, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [distance, stickyTop]);

  return (
    <section
      ref={section}
      style={panelH ? { height: panelH + distance } : undefined}
      className={`${band} ${dark ? "bg-title text-white" : "bg-smoke text-title"}`}
    >
      <div ref={svhProbe} className="pointer-events-none invisible fixed left-0 top-0 h-svh w-0" aria-hidden />
      <div ref={panel} style={{ top: stickyTop }} className="sticky overflow-hidden py-10 lg:py-12">
        <div className="container-x">
          <div>{heading}</div>

          {/* Cards travel inside the content column only, so the section keeps the site's side margins. */}
          <div className="mt-8 overflow-hidden lg:mt-10">
            {/* Left inset makes the row start right-of-centre, so the cards visibly travel in from the right. */}
            <div
              ref={track}
              className="flex gap-6 pl-[12%] will-change-transform md:pl-[30%] lg:gap-8 lg:pl-[40%]"
            >
              {projects.map((p) => (
                <ProjectCard
                  key={p.id}
                  project={p}
                  tone={tone}
                  // Image width follows the viewport height so heading + image + title always fit on
                  // screen; horizontal travel therefore only starts once the whole block is visible.
                  className="w-[min(76vw,400px,calc((100svh-380px)*4/3))] min-w-[200px] flex-none"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
