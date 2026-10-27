"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ProjectSlider({
  images,
  alt,
}: {
  images: StaticImageData[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);
  const go = (dir: number) => setIndex((i) => (i + dir + images.length) % images.length);

  const arrow =
    "absolute top-1/2 z-10 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white text-title transition-colors duration-300 hover:bg-theme md:size-20";

  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-smoke md:aspect-[1296/760]">
      <div
        className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.3,1)]"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="relative h-full w-full flex-none" aria-hidden={i !== index}>
            <Image
              src={img}
              alt={`${alt} ${i + 1}`}
              fill
              preload={i === 0}
              placeholder="blur"
              sizes="(min-width: 1400px) 1296px, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <button type="button" onClick={() => go(-1)} aria-label="Previous image" className={`${arrow} left-4 md:left-[58px]`}>
        <ArrowLeft className="size-5" strokeWidth={2.5} />
      </button>
      <button type="button" onClick={() => go(1)} aria-label="Next image" className={`${arrow} right-4 md:right-[58px]`}>
        <ArrowRight className="size-5" strokeWidth={2.5} />
      </button>
    </div>
  );
}
