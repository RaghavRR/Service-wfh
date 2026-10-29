import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProjectSlider from "@/components/sections/ProjectSlider";
import Breadcrumb from "@/components/sections/Breadcrumb";
import { secTitleClass } from "@/components/ui/SectionTitle";
import { getProject, projects } from "@/data/projects";
import inner1 from "../../../../public/images/project-inner-1.jpg";
import inner2 from "../../../../public/images/project-inner-2.jpg";
import Reveal from "@/components/ui/Reveal";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({
  params,
}: PageProps<"/project-details/[id]">): Promise<Metadata> {
  const { id } = await params;
  return { title: getProject(Number(id))?.shortTitle ?? "Portfolio Details" };
}

const secText = "text-base leading-[1.667] xl2:text-lg";
const h3Class = "mb-[15px] text-[22px] font-semibold leading-[1.3] md:text-2xl xl:text-[28px]";

export default async function ProjectDetailsPage({
  params,
}: PageProps<"/project-details/[id]">) {
  const { id } = await params;
  const project = getProject(Number(id));
  if (!project) notFound();

  const idx = projects.indexOf(project);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  const info = [
    { label: "Category", value: project.category },
    { label: "Software", value: project.software },
    { label: "Service", value: project.service },
    { label: "Client", value: project.client },
    { label: "Date", value: project.date },
  ];

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/project" },
          { label: project.shortTitle },
        ]}
      />

      <section className="section-space overflow-hidden">
        <div className="container-x">
          <Reveal from="top">
            <ProjectSlider images={[inner2, project.image, inner1]} alt={project.title} />
          </Reveal>

          <div className="mt-20 flex flex-col gap-12 lg:flex-row lg:justify-between">
            <div className="lg:w-2/3">
              <h2 className={`mb-[35px] ${secTitleClass}`}>App for Business</h2>
              <p className={`mt-[30px] ${secText}`}>
                We were commissioned to rethink {project.client}&rsquo;s digital
                presence from the ground up. We helped evolve the brand strategy
                and were responsible for updating the identity, website and
                other collateral.
              </p>
              <p className={`mt-[30px] ${secText}`}>
                The goal was simple: build a product that feels effortless for
                first-time users while giving power users the depth they need,
                backed by a clean design system and a fast, modern front end.
              </p>
              <h3 className={`mt-[60px] ${h3Class}`}>Challenge &amp; Solution</h3>
              <p className={secText}>
                The existing platform was slow and confusing. We ran user
                interviews, mapped the key journeys and rebuilt the experience
                around the tasks people actually come to do.
              </p>
              <h3 className={`mt-[60px] ${h3Class}`}>Final Result</h3>
              <p className={secText}>
                The relaunch cut page load time in half and lifted sign-ups by
                over 40% in the first quarter, with a brand the team is proud to
                show off.
              </p>
            </div>

            <ul className="space-y-[30px] lg:w-1/4">
              {info.map((i) => (
                <li key={i.label}>
                  <span className="block text-lg">{i.label}:</span>
                  <span className="mt-2 block font-title text-base font-semibold uppercase">
                    {i.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-20 flex justify-between gap-6 lg:mt-[100px]">
            <Link
              href={`/project-details/${prev.id}`}
              className="group inline-flex items-center gap-3 font-title text-sm font-semibold uppercase sm:text-base"
            >
              <ArrowLeft className="size-5 transition-transform group-hover:-translate-x-1" strokeWidth={2.5} />
              Previous Post
            </Link>
            <Link
              href={`/project-details/${next.id}`}
              className="group inline-flex items-center gap-3 font-title text-sm font-semibold uppercase sm:text-base"
            >
              Next Post
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
