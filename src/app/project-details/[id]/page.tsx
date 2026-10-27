import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import Newsletter from "@/components/sections/Newsletter";
import { getProject, projects } from "@/data/projects";
import inner1 from "../../../../public/images/project-inner-1.jpg";
import inner2 from "../../../../public/images/project-inner-2.jpg";

export function generateStaticParams() {
  return projects.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({
  params,
}: PageProps<"/project-details/[id]">): Promise<Metadata> {
  const { id } = await params;
  return { title: getProject(Number(id))?.shortTitle ?? "Portfolio Details" };
}

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
      <PageHeader
        title="Portfolio Details"
        crumbs={[{ label: "Portfolio", href: "/project" }, { label: project.shortTitle }]}
      />

      <section className="section-space">
        <div className="container-x">
          <div className="relative aspect-16/10 overflow-hidden rounded-[32px] sm:aspect-16/7">
            <Image
              src={inner2}
              alt={project.title}
              fill
              preload
              placeholder="blur"
              sizes="(min-width: 1296px) 1248px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="rounded-3xl bg-title p-8 text-white lg:sticky lg:top-32">
                <h3 className="text-2xl text-white">{project.shortTitle}</h3>
                <ul className="mt-6 divide-y divide-white/10">
                  {info.map((i) => (
                    <li key={i.label} className="flex justify-between gap-4 py-4">
                      <span className="text-white/50">{i.label}</span>
                      <span className="text-right">{i.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-8">
              <h2 className="text-[32px] sm:text-[48px]">App for Business</h2>
              <div className="prose-blog mt-6">
                <p>
                  We were commissioned to rethink {project.client}&apos;s
                  digital presence from the ground up — brand strategy, visual
                  identity, website and supporting collateral.
                </p>
                <p>
                  The goal was simple: build a product that feels effortless
                  for first-time users while giving power users the depth they
                  need.
                </p>
              </div>

              <div className="my-10 grid gap-6 sm:grid-cols-2">
                {[project.image, inner1].map((img, i) => (
                  <div key={i} className="relative aspect-4/3 overflow-hidden rounded-3xl">
                    <Image
                      src={img}
                      alt=""
                      fill
                      placeholder="blur"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="prose-blog">
                <h3>Challenge &amp; Solution</h3>
                <p>
                  The existing platform was slow and confusing. We ran user
                  interviews, mapped the key journeys and rebuilt the experience
                  around a clean design system and a fast, modern front end.
                </p>
                <h3>Final Result</h3>
                <p>
                  The relaunch cut page load time in half and lifted sign-ups by
                  over 40% in the first quarter — with a brand the team is proud
                  to show off.
                </p>
              </div>
            </div>
          </div>

          <nav className="mt-16 flex justify-between gap-6 border-t border-line pt-10">
            <Link href={`/project-details/${prev.id}`} className="group flex items-center gap-4">
              <span className="grid size-14 place-items-center rounded-full border border-line transition-colors group-hover:bg-theme">
                <ArrowLeft className="size-5" />
              </span>
              <span>
                <span className="block text-sm text-title/50">Previous Post</span>
                <span className="hidden font-title sm:block">{prev.shortTitle}</span>
              </span>
            </Link>
            <Link href={`/project-details/${next.id}`} className="group flex items-center gap-4 text-right">
              <span>
                <span className="block text-sm text-title/50">Next Post</span>
                <span className="hidden font-title sm:block">{next.shortTitle}</span>
              </span>
              <span className="grid size-14 place-items-center rounded-full border border-line transition-colors group-hover:bg-theme">
                <ArrowRight className="size-5" />
              </span>
            </Link>
          </nav>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
