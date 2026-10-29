import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import { banners } from "@/data/banners";
import FounderSection from "@/components/sections/team/FounderSection";
import TeamMembers from "@/components/sections/team/TeamMembers";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = { title: "Team" };

export default function TeamPage() {
  return (
    <>
      <PageHeader image={banners.team} title="Team" />
      <FounderSection />
      <TeamMembers />
      <ContactSection />
    </>
  );
}
