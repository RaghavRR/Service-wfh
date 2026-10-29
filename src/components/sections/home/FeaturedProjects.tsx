import Button from "@/components/ui/Button";
import ProjectScroller from "@/components/sections/ProjectScroller";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <ProjectScroller
      tone="dark"
      projects={projects.slice(0, 4)}
      heading={
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
          <div>
            <p className="mb-3 flex items-center gap-3 font-title text-xs font-semibold uppercase tracking-[0.12em] text-theme sm:text-sm">
              <span className="h-px w-8 bg-theme" />
              Selected Work
            </p>
            <h2 className="text-2xl font-semibold leading-[1.25] tracking-[-0.5px] text-white sm:text-[28px] lg:text-[32px] lg:tracking-[-1px] xl:text-[36px]">
              Products we&rsquo;ve designed and shipped
            </h2>
          </div>
          <Button
            href="/project"
            variant="theme"
            arrow
            className="flex-none self-start sm:self-auto"
          >
            View all projects
          </Button>
        </div>
      }
    />
  );
}
