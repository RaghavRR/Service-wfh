import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { founder } from "@/data/team";

export default function FounderSection() {
  return (
    <section className="section-space">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-20">
        <Reveal from="left" className="lg:col-span-5">
          <figure className="mx-auto max-w-[280px] sm:max-w-[380px] lg:mx-0">
            <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-title">
              <Image
                src={founder.image}
                alt={`${founder.name}, ${founder.role}`}
                fill
                placeholder="blur"
                sizes="(min-width: 992px) 380px, 90vw"
                className="object-cover object-top"
              />
            </div>
            <figcaption className="mt-5 flex items-end justify-between gap-4 border-b border-title/10 pb-5">
              <div>
                <p className="font-title text-lg font-semibold">{founder.name}</p>
                <p className="mt-1.5 text-sm text-title/60">{founder.role}</p>
              </div>
              <span className="hidden font-title text-xs font-semibold uppercase tracking-[0.12em] text-title/40 sm:block">
                Founder
              </span>
            </figcaption>
          </figure>
        </Reveal>

        <div className="lg:col-span-7">
          <p className="flex items-center gap-3 font-title text-xs font-semibold uppercase tracking-[0.12em] text-success sm:text-sm">
            <span className="h-px w-8 bg-success" />
            From the Founder
          </p>
          <blockquote className="mt-7 border-l-2 border-theme pl-6 text-xl font-medium leading-[1.6] sm:text-[22px] xl:text-2xl">
            &ldquo;{founder.quote}&rdquo;
          </blockquote>
          <p className="mt-8 max-w-[560px] text-base leading-[1.8] text-title/70">{founder.story}</p>
          <p className="mt-8 font-title text-sm font-semibold uppercase tracking-[0.08em]">
            &mdash; {founder.name}
          </p>
        </div>
      </div>
    </section>
  );
}
