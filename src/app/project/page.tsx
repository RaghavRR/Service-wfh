import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import { banners } from "@/data/banners";
import ProjectGrid from "@/components/sections/ProjectGrid";

export const metadata: Metadata = { title: "Portfolio" };

export default function ProjectPage() {
  return (
    <>
      <PageHeader image={banners.portfolio} title="Portfolio" />
      <section className="section-space overflow-hidden">
        <div className="container-x">
          <ProjectGrid />
        </div>
      </section>
    </>
  );
}
