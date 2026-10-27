import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Cta from "@/components/sections/Cta";
import Newsletter from "@/components/sections/Newsletter";
import ServiceCard from "@/components/cards/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = { title: "Service" };

export default function ServicePage() {
  return (
    <>
      <PageHeader title="Service" crumbs={[{ label: "Service" }]} />
      <section className="section-space">
        <div className="container-x grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>
      <Cta />
      <Newsletter />
    </>
  );
}
