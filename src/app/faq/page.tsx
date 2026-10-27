import type { Metadata } from "next";
import { MessageSquare, Phone } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import { banners } from "@/data/banners";
import FaqAccordion from "@/components/sections/FaqAccordion";
import FeatureCard from "@/components/cards/FeatureCard";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "FAQ" };

const contacts = [
  { icon: Phone, title: "Contact with Us", label: site.phone, href: site.phoneHref },
  { icon: MessageSquare, title: "Send a Message", label: site.email, href: site.emailHref },
];

export default function FaqPage() {
  return (
    <>
      <PageHeader image={banners.faq} title="FAQs" />

      <section className="section-space overflow-hidden">
        <div className="container-x">
          <div className="mx-auto xl:w-2/3">
            <FaqAccordion />
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-[140px]">
        <div className="container-x grid gap-6 xl:grid-cols-2">
          {contacts.map(({ icon: Icon, title, label, href }) => (
            <FeatureCard
              key={title}
              icon={<Icon className="size-10 fill-title" strokeWidth={1.5} />}
              title={title}
              text="Good website tells a story that will make users fully immerse themselves operating"
              linkLabel={label}
              href={href}
            />
          ))}
        </div>
      </section>
    </>
  );
}
