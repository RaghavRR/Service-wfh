import { ArrowLink } from "@/components/ui/Button";
import ServicesList from "@/components/sections/ServicesList";
import { getService, homeServiceIds } from "@/data/services";

export default function ServicesSection() {
  const services = homeServiceIds.map((id) => getService(id)!);

  return (
    <section className="section-space">
      <div className="container-x">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:mb-14">
          <div className="max-w-[520px]">
            <p className="mb-4 flex items-center gap-3 font-title text-xs font-semibold uppercase tracking-[0.12em] text-success sm:text-sm">
              <span className="h-px w-8 bg-success" />
              What We Do
            </p>
            <h2 className="text-2xl font-semibold leading-[1.25] tracking-[-0.5px] sm:text-[28px] lg:tracking-[-1px] xl:text-[32px]">
              Design. Build. Grow.
            </h2>
            <p className="mt-4 text-base leading-[1.75] text-title/70">
              One team from research to release, so nothing gets lost between
              the design file and the live site.
            </p>
          </div>
          <ArrowLink href="/service-2" className="flex-none self-start sm:self-auto">
            All Services
          </ArrowLink>
        </div>

        <ServicesList services={services} />
      </div>
    </section>
  );
}
