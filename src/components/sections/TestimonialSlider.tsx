"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/data/misc";
import QuoteIcon from "@/components/ui/QuoteIcon";


export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, [paused]);

  const t = testimonials[index];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <QuoteIcon />
      <figure key={index} className="animate-fade-in">
        <blockquote className="mb-[30px] mt-7 text-base leading-[30px] xl2:text-lg xl2:leading-[34px] 2xl:text-2xl 2xl:leading-[38px]">
          {t.text}
        </blockquote>
        <figcaption className="pr-24">
          <span className="mb-1.5 block font-title text-2xl font-semibold lg:text-[28px]">
            {t.name}
          </span>
          <span className="block text-lg">{t.role}</span>
        </figcaption>
      </figure>
      <div className="absolute bottom-1 right-0 flex gap-3">
        {testimonials.map((item, i) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show testimonial ${i + 1}`}
            aria-current={i === index}
            className={`size-2.5 rounded-full border border-title ${i === index ? "bg-title" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
