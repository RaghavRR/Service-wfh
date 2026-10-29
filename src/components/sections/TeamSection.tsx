import SectionTitle from "@/components/ui/SectionTitle";
import TeamCard from "@/components/cards/TeamCard";
import { team } from "@/data/team";

export default function TeamSection({ className = "section-space" }: { className?: string }) {
  return (
    <section className={className}>
      <div className="container-x">
        <SectionTitle
          center
          title="Our Team Behind The Studio"
          className="mb-[33px] lg:mb-[43px] xl:mb-12"
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {team.slice(0, 4).map((m) => (
            <TeamCard key={m.name} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
