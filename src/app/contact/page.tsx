import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import { banners } from "@/data/banners";
import ContactCards from "@/components/sections/contact/ContactCards";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader image={banners.contact} title="Contact" />
      <ContactCards />
      <ContactSection />
    </>
  );
}
