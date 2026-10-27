import Image from "next/image";
import Link from "next/link";
import { ArrowLink } from "@/components/ui/Button";
import type { Project } from "@/data/projects";
import Reveal from "@/components/ui/Reveal";

export default function ProjectCard({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  const href = `/project-details/${project.id}`;
  return (
    <article className={`group/card ${className}`}>
      <Reveal from="top">
        <Link href={href} className="relative block aspect-square overflow-hidden bg-smoke">
          <Image
            src={project.image}
            alt={project.title}
            fill
            placeholder="blur"
            sizes="(min-width: 992px) 50vw, 100vw"
            className="scale-[1.03] object-cover transition-transform duration-500 group-hover/card:translate-x-2"
          />
        </Link>
      </Reveal>
      <div className="pt-7">
        <ul className="mb-3.5 flex flex-wrap text-base sm:text-lg">
          {project.tags.map((t, i) => (
            <li key={t}>
              {i > 0 && <span className="mx-0.5">/</span>}
              {t}
            </li>
          ))}
        </ul>
        <h3 className="mb-6 text-[26px] font-semibold leading-[1.278] md:text-[30px] xl:text-[36px]">
          <Link href={href}>{project.title}</Link>
        </h3>
        <ArrowLink href={href}>View Project</ArrowLink>
      </div>
    </article>
  );
}
