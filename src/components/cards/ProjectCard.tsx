import Image from "next/image";
import Link from "next/link";
import { ArrowLink } from "@/components/ui/Button";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const href = `/project-details/${project.id}`;
  return (
    <article className="group/card">
      <Link
        href={href}
        className="relative block aspect-9/7 overflow-hidden rounded-3xl bg-smoke"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          placeholder="blur"
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover/card:scale-105"
        />
      </Link>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-line px-4 py-1 text-sm text-title/70"
          >
            {t}
          </span>
        ))}
      </div>
      <h3 className="mt-4 text-xl leading-snug sm:text-2xl">
        <Link href={href} className="transition-colors hover:text-title/60">
          {project.title}
        </Link>
      </h3>
      <ArrowLink href={href} className="mt-5">
        View Project
      </ArrowLink>
    </article>
  );
}
