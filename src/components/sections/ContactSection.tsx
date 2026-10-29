import ContactForm from "@/components/sections/ContactForm";
import ContactMap from "@/components/sections/ContactMap";
import SplitBand, { bandText } from "@/components/sections/SplitBand";

export default function ContactSection({
  title = "Have Any Project on Your Mind?",
  text = "Great! We're excited to hear from you and let's start something",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <SplitBand
      id="contact-form"
      side="left"
      // The map stretches to the form's height instead of sitting in a small square.
      mediaClassName="h-[360px] rounded-3xl lg:h-auto lg:self-stretch"
      media={<ContactMap className="absolute inset-0" />}
    >
      <h2 className="mb-3 text-2xl font-semibold leading-[1.25] tracking-[-0.5px] sm:text-[28px] lg:tracking-[-1px] xl:text-[32px]">
        {title}
      </h2>
      <p className={`mb-6 ${bandText}`}>{text}</p>
      <ContactForm />
    </SplitBand>
  );
}
