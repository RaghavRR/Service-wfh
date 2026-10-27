"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { Play } from "lucide-react";

/** Shows a poster image; the YouTube iframe only loads after a click */
export default function VideoBox({
  videoId,
  poster,
}: {
  videoId: string;
  poster: StaticImageData;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden rounded-3xl bg-title">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title="Video"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label="Play video"
          className="group absolute inset-0"
        >
          <Image
            src={poster}
            alt=""
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 66vw, 100vw"
            className="object-cover opacity-80"
          />
          <span className="absolute left-1/2 top-1/2 grid size-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-theme text-title transition-transform duration-300 group-hover:scale-110">
            <span className="absolute inset-0 animate-ping rounded-full bg-theme/40" />
            <Play className="relative ml-1 size-8 fill-current" />
          </span>
        </button>
      )}
    </div>
  );
}
