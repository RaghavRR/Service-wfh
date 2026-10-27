"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { RollLabel } from "@/components/ui/Button";

export default function VideoSection({
  videoId,
  poster,
}: {
  videoId: string;
  poster: StaticImageData;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative h-[300px] overflow-hidden bg-title sm:h-[420px] lg:h-[600px]">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title="Video"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      ) : (
        <>
          <Image
            src={poster}
            alt=""
            fill
            placeholder="blur"
            sizes="100vw"
            className="object-cover"
          />
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute left-1/2 top-1/2 grid size-[120px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white font-title text-sm font-semibold uppercase text-title transition-colors duration-300 hover:bg-theme sm:size-[180px]"
          >
            <RollLabel>Play Video</RollLabel>
          </button>
        </>
      )}
    </section>
  );
}
