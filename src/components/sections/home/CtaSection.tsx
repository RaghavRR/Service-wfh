import Button from "@/components/ui/Button";

export default function CtaSection() {
  return (
    <section className="bg-smoke pb-10 pt-20 lg:pb-[100px] lg:pt-[140px]">
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
