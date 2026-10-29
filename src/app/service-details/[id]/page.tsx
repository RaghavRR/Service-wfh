import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { secTitleClass } from "@/components/ui/SectionTitle";
import { getService, services, type ServiceIcon as IconKey } from "@/data/services";
import detailsImg from "../../../../public/images/service-details.png";
import remarkImg from "../../../../public/images/service-remark.jpg";
import Reveal from "@/components/ui/Reveal";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ id: String(s.id) }));
}

export async function generateMetadata({
  params,
}: PageProps<"/service-details/[id]">): Promise<Metadata> {
  const { id } = await params;
  return { title: getService(Number(id))?.title ?? "Service Details" };
}

const secText = "text-base leading-[1.667] xl2:text-lg";
const h3Class = "mb-[15px] text-[22px] font-semibold leading-[1.3] md:text-2xl xl:text-[28px]";

const features: { icon: IconKey; title: string }[] = [
  { icon: "illustration", title: "Custom Solution" },
  { icon: "social", title: "In-time Result" },
];

export default async function ServiceDetailsPage({
  params,
}: PageProps<"/service-details/[id]">) {
  const { id } = await params;
  const service = getService(Number(id));
  if (!service) notFound();

  return (
    <section className="section-space overflow-hidden">
      <div className="container-x">
        <Reveal from="top" className="relative mb-20 aspect-[1296/700] overflow-hidden">
          <Image
            src={detailsImg}
            alt={service.title}
            fill
            preload
            placeholder="blur"
            sizes="(min-width: 1400px) 1296px, 100vw"
            className="object-cover"
          />
        </Reveal>

        <div className="mx-auto xl:w-2/3">
          <h2 className={`mb-[35px] ${secTitleClass}`}>{service.title}</h2>
          <p className={`mt-[30px] ${secText}`}>
            {service.excerpt} Our team works closely with yours to understand
            the business, the audience and the market before a single pixel is
            designed, and we stay responsible for every detail until launch.
          </p>
          <p className={`mt-[30px] ${secText}`}>
            For more than a decade we have partnered with startups and
            established brands alike, combining international expertise with
            local insight. In that time we have delivered hundreds of projects
            that look great and perform even better.
          </p>
          <h3 className={`mt-[60px] ${h3Class}`}>Remarking Services</h3>
          <p className={secText}>
            A brand refresh helps position the company to meet the challenges of
            the future, leading with technological innovation and sustainable
            practices that deliver long-lasting value for its clients.
          </p>
        </div>

        <div className="relative my-20 aspect-[1457/719] overflow-hidden">
          <Image
            src={remarkImg}
            alt="Our team discussing a project"
            fill
            placeholder="blur"
            sizes="(min-width: 1400px) 1296px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mx-auto xl:w-2/3">
          <p className={`mb-[35px] xl:mb-10 ${secText}`}>
            A brand refresh helps position the company to meet the challenges of
            the future, leading with technological innovation and sustainable
            practices that deliver long-lasting value for its clients.
          </p>
          <h3 className={h3Class}>Making for Users Friendly</h3>
          <p className={`mt-[30px] ${secText}`}>
            Good design is invisible: it simply works. We test with real users,
            measure what matters and refine until every interaction feels
            natural on every screen.
          </p>
          <p className={`mb-[35px] mt-[30px] xl:mb-10 ${secText}`}>
            For more than a decade we have partnered with startups and
            established brands alike, combining international expertise with
            local insight. In that time we have delivered hundreds of projects
            that look great and perform even better.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="bg-smoke px-[26px] py-[30px] lg:px-9 lg:py-10">
                <ServiceIcon name={f.icon} className="mb-[34px] size-[60px] lg:mb-[74px]" />
                <h4 className="mb-[15px] text-xl font-semibold lg:text-2xl">
                  <Link href="/project">{f.title}</Link>
                </h4>
                <p className="text-lg">
                  We care success relationships fuel success we love building
                </p>
              </div>
            ))}
          </div>

          <p className={`mt-10 ${secText}`}>
            Ready to move forward? Let&apos;s talk about your goals and build a
            plan that turns ideas into measurable results.
          </p>
        </div>
      </div>
    </section>
  );
}
