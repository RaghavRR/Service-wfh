import TeamCard from "@/components/cards/TeamCard";
import { team } from "@/data/team";

export default function TeamMembers() {
  return (
    <section className="bg-smoke py-20 lg:py-[120px]">
      <div className="container-x">
        <div className="mb-12 max-w-[640px] lg:mb-16">
          <p className="mb-3 flex items-center gap-3 font-title text-xs font-semibold uppercase tracking-[0.12em] text-success sm:text-sm">
            <span className="h-px w-8 bg-success" />
            Our People
          </p>
          <h2 className="text-2xl font-semibold leading-[1.25] tracking-[-0.5px] sm:text-[28px] lg:text-[32px] lg:tracking-[-1px] xl:text-[36px]">
            Meet the team behind the work
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {team.map((m) => (
            <TeamCard key={m.name} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
