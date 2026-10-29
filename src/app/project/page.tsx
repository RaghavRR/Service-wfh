import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import { banners } from "@/data/banners";
import ProjectScroller from "@/components/sections/ProjectScroller";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Portfolio" };

export default function ProjectPage() {
  return (
    <>
      <PageHeader image={banners.portfolio} title="Portfolio" />
      <ProjectScroller
        projects={projects}
        heading={
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
            <div>
              <p className="mb-3 flex items-center gap-3 font-title text-xs font-semibold uppercase tracking-[0.12em] text-success sm:text-sm">
                <span className="h-px w-8 bg-success" />
                Our Work
              </p>
              <h2 className="text-2xl font-semibold leading-[1.25] tracking-[-0.5px] sm:text-[28px] lg:text-[32px] lg:tracking-[-1px] xl:text-[36px]">
                Every project, start to finish
              </h2>
            </div>
            <Button
              href="/contact"
              variant="dark"
              arrow
              className="flex-none self-start sm:self-auto"
            >
              Start a Project
            </Button>
          </div>
        }
      />
    </>
  );
}
