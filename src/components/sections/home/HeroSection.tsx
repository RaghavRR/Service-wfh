import Link from "next/link";
import Button, { RollLabel } from "@/components/ui/Button";

export default function HeroSection() {
  return (
    // Pulled up under the transparent header (heights match Header.tsx) to fill the first screen.
    <section className="relative -mt-16 flex min-h-svh flex-col overflow-hidden bg-title text-white lg:-mt-[72px]">
      <video
        className="absolute inset-0 size-full object-cover"
        poster="/videos/hero-wave-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      >
        <source src="/videos/hero-wave.mp4" type="video/mp4" />
        <source src="/videos/hero-wave.webm" type="video/webm" />
      </video>
      <div
        className="absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_50%,rgba(10,12,0,0.7)_0%,rgba(10,12,0,0.4)_100%)]"
        aria-hidden
      />

      {/* Content block sits mid-page; heading lines are staggered so it reads central without being symmetric. */}
      <div className="container-x relative flex flex-1 flex-col justify-center pb-16 pt-[120px] lg:pt-[140px]">
        <div className="mx-auto w-full max-w-[960px]">
          <h1 className="font-semibold text-white">
            <span className="mb-5 flex animate-fade-in items-center gap-3 font-title text-xs font-semibold uppercase tracking-[0.18em] text-white/70 sm:text-sm">
              <span className="h-px w-10 bg-theme" aria-hidden />
              Web Development &amp; UI/UX Studio
            </span>
            <span className="block animate-slide-left text-[40px] leading-[1.15] tracking-[-1px] sm:text-[52px] lg:text-[60px] lg:tracking-[-2px] xl:text-[68px]">
              Interfaces
            </span>
            <span className="mt-2 block animate-slide-right text-[40px] sm:mt-3 lg:mt-4 leading-[1.15] tracking-[-1px] [animation-delay:120ms] sm:pl-[18%] sm:text-[52px] lg:text-[60px] lg:tracking-[-2px] xl:text-[68px]">
              that <span className="text-theme">perform.</span>
            </span>
          </h1>

          <div className="mt-10 flex animate-fade-in flex-col gap-8 border-t border-white/15 pt-8 [animation-delay:300ms] md:flex-row md:items-center md:justify-between">
            <p className="max-w-[430px] text-base leading-[1.75] text-white/75 sm:text-lg">
              Design that feels effortless, code that scales. We build websites
              and web apps that turn visitors into customers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="theme" arrow>
                Start a Project
              </Button>
              <Link
                href="/project"
                className="group inline-flex items-center justify-center border border-white/40 px-8 py-[21.5px] font-title text-sm font-semibold uppercase text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-title"
              >
                <RollLabel>Our Work</RollLabel>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
