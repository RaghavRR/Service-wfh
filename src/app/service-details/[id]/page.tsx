import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Lightbulb } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import Newsletter from "@/components/sections/Newsletter";
import VideoBox from "@/components/sections/VideoBox";
import Button from "@/components/ui/Button";
import { getService, services } from "@/data/services";
import detailsImg from "../../../../public/images/service-details.jpg";
import posterImg from "../../../../public/images/project-inner-1.jpg";

export function generateStaticParams() {
  return services.map((s) => ({ id: String(s.id) }));
}

export async function generateMetadata({
  params,
}: PageProps<"/service-details/[id]">): Promise<Metadata> {
  const { id } = await params;
  return { title: getService(Number(id))?.title ?? "Service Details" };
}

const features = [
  {
    icon: Lightbulb,
    title: "Custom Solution",
    text: "Every solution is tailored to your goals, audience and budget.",
  },
  {
    icon: Clock,
    title: "In-time Result",
    text: "Clear milestones and weekly updates so you always know where we are.",
  },
];

export default async function ServiceDetailsPage({
  params,
}: PageProps<"/service-details/[id]">) {
  const { id } = await params;
  const service = getService(Number(id));
  if (!service) notFound();

  return (
    <>
      <PageHeader
        title="Service Details"
        crumbs={[{ label: "Service", href: "/service-2" }, { label: service.title }]}
      />

      <section className="section-space">
        <div className="container-x">
          <div className="relative aspect-16/10 overflow-hidden rounded-[32px] sm:aspect-16/7">
            <Image
              src={detailsImg}
              alt={service.title}
              fill
              preload
              placeholder="blur"
              sizes="(min-width: 1296px) 1248px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <h2 className="text-[32px] sm:text-[48px]">{service.title}</h2>
            <div className="prose-blog mt-6">
              <p>
                {service.excerpt} Our team works closely with yours to understand
                the business, the audience and the market before a single pixel
                is designed.
              </p>
              <p>
                We combine research, strategy and craft to deliver work that
                looks great and performs even better — on every screen and every
                channel your customers use.
              </p>

              <h3>Remarking Services</h3>
              <p>
                Technology moves fast, and so do your customers. We help prepare
                your brand for future challenges by leading with innovation,
                sustainable processes and a culture of continuous improvement.
              </p>
            </div>

            <div className="my-12">
              <VideoBox videoId="vvNwlRLjLkU" poster={posterImg} />
            </div>

            <div className="prose-blog">
              <h3>Making for Users Friendly</h3>
              <p>
                Good design is invisible: it simply works. We test with real
                users, measure what matters and refine until every interaction
                feels natural.
              </p>
            </div>

            <div className="my-10 grid gap-6 sm:grid-cols-2">
              {features.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-5 rounded-3xl bg-smoke p-8">
                  <span className="grid size-14 shrink-0 place-items-center rounded-full bg-theme">
                    <Icon className="size-6" />
                  </span>
                  <div>
                    <h4 className="text-xl">
                      <Link href="/project">{title}</Link>
                    </h4>
                    <p className="mt-2 text-title/60">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="prose-blog">
              <p>
                Ready to move forward? Let&apos;s talk about your goals and build
                a plan that turns ideas into measurable results.
              </p>
            </div>
            <Button href="/contact" variant="dark" arrow className="mt-4">
              Work With Us
            </Button>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
