import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

// Editorial project tile: 4:3 image with the title underneath.
export default function ProjectCard({
  project,
  tone = "light",
  className = "",
}: {
  project: Project;
  tone?: "light" | "dark";
  className?: string;
}) {
  const href = `/project-details/${project.id}`;
  const dark = tone === "dark";

  return (
    <article className={`group/card flex flex-col ${className}`}>
      <Link href={href} className="relative block aspect-4/3 overflow-hidden bg-title/20" tabIndex={-1}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          placeholder="blur"
          sizes="(min-width: 992px) 400px, 76vw"
          className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-[1.04]"
        />
      </Link>

      <div className="flex items-start justify-between gap-4 pt-5">
        <h3 className={`line-clamp-2 text-base font-semibold leading-[1.4] sm:text-lg ${dark ? "text-white" : "text-title"}`}>
          <Link
            href={href}
            className="bg-[linear-gradient(currentColor,currentColor)] bg-size-[0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover/card:bg-size-[100%_1px]"
          >
            {project.title}
          </Link>
        </h3>
        <ArrowUpRight
          className={`mt-0.5 size-5 flex-none transition-transform duration-300 group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5 ${
            dark ? "text-theme" : "text-title"
          }`}
          strokeWidth={1.75}
          aria-hidden
        />
      </div>
    </article>
  );
}
