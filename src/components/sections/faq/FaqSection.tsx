import { ArrowLink } from "@/components/ui/Button";
import FaqAccordion from "@/components/sections/FaqAccordion";

export default function FaqSection() {
  return (
    <section className="section-space">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 flex items-center gap-3 font-title text-xs font-semibold uppercase tracking-[0.12em] text-success sm:text-sm">
              <span className="h-px w-8 bg-success" />
              FAQ
            </p>
            <h2 className="text-[28px] font-semibold leading-[1.2] tracking-[-0.5px] sm:text-[34px] lg:tracking-[-1px] xl:text-[40px]">
              Questions, answered.
            </h2>
            <p className="mt-5 text-base leading-[1.75] text-title/70">
              Can&rsquo;t find what you&rsquo;re looking for? Talk to us and we&rsquo;ll get back within one business day.
            </p>
            <ArrowLink href="/contact" className="mt-7">
              Ask a Question
            </ArrowLink>
          </div>
        </div>
        <div className="lg:col-span-8">
          <FaqAccordion />
        </div>
      </div>
    </section>
  );
}
