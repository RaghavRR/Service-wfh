import Button from "@/components/ui/Button";
import { band } from "@/components/sections/SplitBand";

export default function CtaSection() {
  return (
    <section className={`${band} bg-smoke py-16 lg:py-24`}>
      <div className="container-x lg:grid lg:grid-cols-12 lg:gap-6">
        <h2 className="mb-[30px] text-[32px] font-semibold leading-[1.15] tracking-[-0.5px] sm:text-[40px] lg:col-span-6 lg:mb-0 lg:tracking-[-1px] xl:text-[48px]">
          Let&rsquo;s Work Together
        </h2>
        <div className="lg:col-span-5 lg:col-start-8">
          <p className="text-lg leading-[1.667]">
            Have a product idea or a site that needs a rebuild? Tell us about
            it and we&rsquo;ll design and ship it with you.
          </p>
          <Button href="/contact" variant="dark" className="mt-10">
            Let&apos;s Talk with us
          </Button>
        </div>
      </div>
    </section>
  );
}
