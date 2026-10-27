import type { Metadata } from "next";
import { MapPin, MessageSquare, Phone } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import { banners } from "@/data/banners";
import ContactSection from "@/components/sections/ContactSection";
import FeatureCard from "@/components/cards/FeatureCard";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contact" };

const cards = [
  {
    icon: MapPin,
    title: "Headquarters",
    lines: ["27 Division St, New York,", "NY 10002, USA"],
    cta: "Get direction",
    href: site.mapUrl,
  },
  {
    icon: MessageSquare,
    title: "Email Address",
    lines: [site.email, site.email],
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
      <PageHeader image={banners.contact} title="Contact" />

      <section className="section-space overflow-hidden">
        <div className="container-x grid gap-6 lg:grid-cols-3">
          {cards.map(({ icon: Icon, title, lines, cta, href }) => (
            <FeatureCard
              key={title}
              stacked
              icon={<Icon className="size-9 fill-title text-title" strokeWidth={1.5} />}
              title={title}
              text={lines.map((l, i) => (
                <p key={i}>{l}</p>
              ))}
              linkLabel={cta}
              href={href}
            />
          ))}
        </div>
      </section>

      <ContactSection />
    </>
  );
}
