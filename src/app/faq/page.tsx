import type { Metadata } from "next";
import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import FaqAccordion from "@/components/sections/FaqAccordion";
import Newsletter from "@/components/sections/Newsletter";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "FAQ" };

const contacts = [
  { icon: Phone, title: "Contact with Us", label: site.phone, href: site.phoneHref },
  { icon: MessageCircle, title: "Send a Message", label: site.email, href: site.emailHref },
];

export default function FaqPage() {
  return (
    <>
      <PageHeader title="FAQs" crumbs={[{ label: "FAQ" }]} />
      <section className="section-space">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <FaqAccordion />
          </div>
          <div className="space-y-6 lg:col-span-4">
            {contacts.map(({ icon: Icon, title, label, href }) => (
              <div key={title} className="rounded-3xl bg-smoke p-8">
                <span className="grid size-16 place-items-center rounded-full bg-theme">
                  <Icon className="size-7" />
                </span>
                <h3 className="mt-6 text-2xl">{title}</h3>
                <p className="mt-3 text-title/60">
                  A good website tells a story that makes users fully immerse
                  themselves.
                </p>
                <a
                  href={href}
                  className="group mt-6 inline-flex items-center gap-2 font-medium hover:underline"
                >
                  {label}
                  <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
