import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import { banners } from "@/data/banners";
import FaqSection from "@/components/sections/faq/FaqSection";
import ContactCards from "@/components/sections/contact/ContactCards";

export const metadata: Metadata = { title: "FAQ" };

export default function FaqPage() {
  return (
    <>
      <PageHeader {...banners.faq} />
      <FaqSection />
      <ContactCards className="pb-20 lg:pb-[140px]" />
    </>
  );
}
