import ContactForm from "@/components/sections/ContactForm";
import ContactMap from "@/components/sections/ContactMap";
import { secTitleClass } from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";

export default function ContactSection({
  title = "Have Any Project on Your Mind?",
  text = "Great! We're excited to hear from you and let's start something",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section id="contact-form" className="relative scroll-mt-28 bg-theme pb-20 lg:mt-[100px] lg:py-[140px]">
      <Reveal
        from="left"
        className="relative h-[400px] w-full lg:absolute lg:left-0 lg:top-[-100px] lg:bottom-[140px] lg:h-auto lg:w-[42%]"
      >
        <ContactMap className="size-full" />
      </Reveal>
      <div className="container-x pt-20 lg:pt-0">
        <div className="lg:ml-auto lg:w-1/2 lg:pl-3">
          <div className="mb-[30px]">
            <h2 className={`mb-[17px] ${secTitleClass}`}>{title}</h2>
            <p className="text-base xl2:text-lg">{text}</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
