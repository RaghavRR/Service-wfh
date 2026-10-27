import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Cta from "@/components/sections/Cta";
import Newsletter from "@/components/sections/Newsletter";
import TeamCard from "@/components/cards/TeamCard";
import { team } from "@/data/team";

export const metadata: Metadata = { title: "Team" };

export default function TeamPage() {
  return (
    <>
      <PageHeader title="Team" crumbs={[{ label: "Team" }]} />
      <section className="section-space">
        <div className="container-x grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <TeamCard key={m.name} member={m} />
          ))}
        </div>
      </section>
      <Cta />
      <Newsletter />
    </>
  );
}
