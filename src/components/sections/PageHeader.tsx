export type BannerVideo = "about" | "service" | "project" | "team" | "faq" | "contact";

// Inner-page banner laid out like the home hero: full-bleed, full-screen looping video
// (one per page, same dark/lime palette) under the transparent header, with the heading
// block in the middle and its two lines staggered.
export default function PageHeader({
  video,
  eyebrow,
  title,
  accent,
  text,
}: {
  video: BannerVideo;
  eyebrow: string;
  /** First heading line. */
  title: string;
  /** Second heading line, indented; the last word is highlighted. */
  accent: string;
  text: string;
}) {
  const words = accent.split(" ");
  const last = words.pop();

  return (
    // Pulled up under the transparent header (heights match Header.tsx).
    <section className="relative -mt-16 flex min-h-svh flex-col overflow-hidden bg-title text-white lg:-mt-[72px]">
      <video
        className="absolute inset-0 size-full object-cover"
        poster={`/videos/banner-${video}-poster.jpg`}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      >
        <source src={`/videos/banner-${video}.mp4`} type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_50%,rgba(10,12,0,0.7)_0%,rgba(10,12,0,0.4)_100%)]"
        aria-hidden
      />

      <div className="container-x relative flex flex-1 flex-col justify-center pb-16 pt-[120px] lg:pt-[140px]">
        <div className="mx-auto w-full max-w-[960px]">
          <h1 className="font-semibold text-white">
            <span className="mb-5 flex animate-fade-in items-center gap-3 font-title text-xs font-semibold uppercase tracking-[0.18em] text-white/70 sm:text-sm">
              <span className="h-px w-10 bg-theme" aria-hidden />
              {eyebrow}
            </span>
            <span className="block animate-slide-left text-[40px] leading-[1.15] tracking-[-1px] sm:text-[52px] lg:text-[60px] lg:tracking-[-2px] xl:text-[68px]">
              {title}
            </span>
            <span className="mt-2 block animate-slide-right text-[40px] leading-[1.15] tracking-[-1px] [animation-delay:120ms] sm:mt-3 sm:pl-[18%] sm:text-[52px] lg:mt-4 lg:text-[60px] lg:tracking-[-2px] xl:text-[68px]">
              {words.length > 0 && `${words.join(" ")} `}
              <span className="text-theme">{last}</span>
            </span>
          </h1>

          <div className="mt-10 animate-fade-in border-t border-white/15 pt-8 [animation-delay:300ms]">
            <p className="max-w-[430px] text-base lg:max-w-none lg:whitespace-nowrap leading-[1.75] text-white/75 sm:text-lg">{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
