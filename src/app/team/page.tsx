import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import { banners } from "@/data/banners";
import ContactSection from "@/components/sections/ContactSection";
import TeamCard from "@/components/cards/TeamCard";
import { team } from "@/data/team";

export const metadata: Metadata = { title: "Team" };

export default function TeamPage() {
  return (
    <>
      <PageHeader image={banners.team} title="Team" />
      <section className="section-space overflow-hidden">
        <div className="container-x grid gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <TeamCard key={m.name} member={m} />
          ))}
        </div>
      </section>
      <ContactSection />
    </>
  );
}
