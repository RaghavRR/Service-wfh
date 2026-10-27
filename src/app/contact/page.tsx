import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import ContactForm from "@/components/sections/ContactForm";
import Newsletter from "@/components/sections/Newsletter";
import { ArrowLink } from "@/components/ui/Button";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contact" };

const cards = [
  {
    icon: MapPin,
    title: "Headquarters",
    lines: [site.address],
    cta: "Get direction",
    href: site.mapUrl,
  },
  {
    icon: Mail,
    title: "Email Address",
    lines: [site.email, "support@frisk.agency"],
    cta: "Send message",
    href: site.emailHref,
  },
  {
    icon: Phone,
    title: "Phone Number",
    lines: [site.phone, site.phone2],
    cta: "Call anytime",
    href: site.phoneHref,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" crumbs={[{ label: "Contact" }]} />

      <section className="section-space">
        <div className="container-x grid gap-8 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, lines, cta, href }) => (
            <div
              key={title}
              className="flex flex-col rounded-3xl border border-line p-8 transition-colors hover:border-title lg:p-10"
            >
              <span className="grid size-16 place-items-center rounded-full bg-theme">
                <Icon className="size-7" />
              </span>
              <h3 className="mt-8 text-2xl">{title}</h3>
              <div className="mt-4 flex-1 space-y-1 text-title/60">
                {lines.map((l) => (
                  <p key={l}>{l}</p>
                ))}
              </div>
              <ArrowLink href={href} className="mt-8">
                {cta}
              </ArrowLink>
            </div>
          ))}
        </div>
      </section>

      <section id="contact-form" className="section-space scroll-mt-24 bg-title">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-[36px] leading-[1.15] text-white sm:text-[56px]">
              Have Any Project on Your Mind?
            </h2>
            <p className="mt-6 text-white/60">
              Great! We&apos;re excited to hear from you and let&apos;s start
              something special together.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
