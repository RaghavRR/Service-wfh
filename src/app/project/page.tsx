import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import ProjectGrid from "@/components/sections/ProjectGrid";
import Newsletter from "@/components/sections/Newsletter";

export const metadata: Metadata = { title: "Portfolio" };

export default function ProjectPage() {
  return (
    <>
      <PageHeader title="Portfolio" crumbs={[{ label: "Portfolio" }]} />
      <section className="section-space">
        <div className="container-x">
          <ProjectGrid />
        </div>
      </section>
      <Newsletter />
    </>
  );
}
