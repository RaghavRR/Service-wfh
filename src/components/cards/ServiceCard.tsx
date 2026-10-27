import Link from "next/link";
import { ArrowLink } from "@/components/ui/Button";
import ServiceIcon from "@/components/ui/ServiceIcon";
import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  const href = `/service-details/${service.id}`;
  return (
    <article className="group/card flex flex-col rounded-3xl border border-line bg-white p-8 transition-colors duration-500 hover:border-title hover:bg-title lg:p-10">
      <span className="grid size-20 place-items-center rounded-full bg-smoke text-title transition-colors duration-500 group-hover/card:bg-theme">
        <ServiceIcon name={service.icon} className="size-9" />
      </span>
      <h3 className="mt-8 text-2xl transition-colors duration-500 group-hover/card:text-white">
        <Link href={href}>{service.title}</Link>
      </h3>
      <p className="mt-4 flex-1 text-title/60 transition-colors duration-500 group-hover/card:text-white/60">
        {service.excerpt}
      </p>
      <ArrowLink
        href={href}
        className="mt-8 transition-colors duration-500 group-hover/card:text-white"
      >
        View Details
      </ArrowLink>
    </article>
  );
}
