import Button from "@/components/ui/Button";

export default function Cta({
  title = "Have Any Project on Your Mind?",
  text = "Great! We're excited to hear from you and let's start something special together.",
  button = "Send Message",
  href = "/contact#contact-form",
}: {
  title?: string;
  text?: string;
  button?: string;
  href?: string;
}) {
  return (
    <section className="bg-title">
      <div className="container-x relative overflow-hidden py-20 text-center lg:py-32">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-theme/10 blur-3xl"
          aria-hidden
        />
        <h2 className="relative mx-auto max-w-4xl text-[36px] leading-[1.15] text-white sm:text-[56px] lg:text-[80px]">
          {title}
        </h2>
        <p className="relative mx-auto mt-6 max-w-xl text-white/60">{text}</p>
        <Button href={href} arrow className="relative mt-10">
          {button}
        </Button>
      </div>
    </section>
  );
}
