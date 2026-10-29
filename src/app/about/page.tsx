import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import { banners } from "@/data/banners";
import CountersSection from "@/components/sections/about/CountersSection";
import WhyUsBand from "@/components/sections/about/WhyUsBand";
import MilestonesSection from "@/components/sections/about/MilestonesSection";
import TeamSection from "@/components/sections/TeamSection";
import ContactSection from "@/components/sections/ContactSection";
import ClientLogos from "@/components/sections/ClientLogos";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHeader image={banners.about} title="About" />
      <CountersSection />
      <WhyUsBand />
      <MilestonesSection />
      <TeamSection className="overflow-hidden pb-20 lg:pb-[140px]" />
      <ContactSection />
      <ClientLogos />
    </>
  );
}
