"use client";

import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { testimonials } from "@/data/misc";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      6000,
    );
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section id="testimonials" className="section-space scroll-mt-24">
      <div className="container-x">
        <SectionTitle title="Testimonials" subtitle="Client feedback" />

        <div
          className="mt-14 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.3,1)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className="w-full shrink-0"
                aria-hidden={i !== index}
              >
                <Quote className="size-14 fill-theme text-theme" />
                <blockquote className="mt-8 max-w-5xl font-title text-xl leading-[1.6] sm:text-2xl lg:text-[32px]">
                  {t.text}
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-4">
                  <span className="grid size-16 place-items-center rounded-full bg-theme font-title text-lg">
                    {t.name
                      .split(" ")
                      .map((p) => p[0])
                      .join("")}
                  </span>
                  <span>
                    <span className="block font-title text-lg">{t.name}</span>
                    <span className="text-title/60">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-12 flex gap-3">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === index}
              className={`h-3 rounded-full transition-all duration-300 ${
                i === index ? "w-10 bg-title" : "w-3 bg-title/20 hover:bg-title/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
