import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import Button, { ArrowLink, RollLabel } from "@/components/ui/Button";
import SectionTitle, { secTitleClass } from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/cards/ProjectCard";
import TeamCard from "@/components/cards/TeamCard";
import BlogCard from "@/components/cards/BlogCard";
import ServicesAccordion from "@/components/sections/ServicesAccordion";
import TestimonialSlider from "@/components/sections/TestimonialSlider";
import { getProject } from "@/data/projects";
import { team } from "@/data/team";
import { blogs } from "@/data/blogs";
import { getService, homeServiceIds } from "@/data/services";
import aboutImg from "../../public/images/about-1.jpg";
import testiImg from "../../public/images/about-2.jpg";
import Reveal from "@/components/ui/Reveal";

const secText = "text-base leading-[1.667] xl2:text-lg";
const bandImg =
  "relative aspect-4/3 w-full lg:absolute lg:top-[-100px] lg:bottom-[140px] lg:aspect-auto lg:w-[42%] 3xl:w-[44%]";

export default function HomePage() {
  const homeServices = homeServiceIds.map((id) => getService(id)!);
  const [p1, p2, p3, p4] = [1, 2, 3, 4].map((id) => getProject(id)!);

  return (
    <>
      <section className="overflow-hidden">
        <div className="container-x pb-20 pt-[60px] lg:pt-[45px] xl:pt-[75px]">
          <h1 className="text-[34px] font-semibold leading-[1.167] xs:text-[39px] sm:text-[56px] sm:tracking-[-1.2px] md:text-[70px] lg:text-[80px] lg:tracking-[-3.6px] xl:text-[90px] xl2:text-[100px] 2xl:text-[120px]">
            <span className="block animate-slide-left">Next Generation</span>
            <span className="block animate-slide-right [animation-delay:150ms] lg:text-right">
              Digital Agency
            </span>
          </h1>

          <div className="animate-slide-right [animation-delay:300ms] lg:ml-[50%] lg:pl-3">
            <p className="mt-[23px] text-base leading-[30px] xl2:text-lg">
              We are digital agency that helps businesses develop immersive and
              engaging user experiences that drive top level growth
            </p>
            <Button href="/project" variant="dark" className="mt-[30px]">
              View Our Works
            </Button>
          </div>

          <div className="mt-10 flex max-w-[254px] animate-slide-left items-center gap-4 [animation-delay:450ms] lg:mt-0">
            <Globe className="size-10 flex-none" strokeWidth={2.4} />
            <h6 className="text-sm font-semibold uppercase">Agency of this year worldwide</h6>
          </div>
        </div>
      </section>

      <section className="relative bg-theme pb-20 lg:mt-[100px] lg:py-[140px]">
        <Reveal from="left" className={bandImg}>
          <Image
            src={aboutImg}
            alt="Designer working at a laptop"
            fill
            loading="eager"
            placeholder="blur"
            sizes="(min-width: 992px) 44vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <div className="container-x pt-20 lg:pt-0">
          <div className="lg:ml-auto lg:w-1/2 lg:pl-3">
            <h2 className={`mb-[17px] ${secTitleClass}`}>
              Unlock Revenue Growth for Your Business
            </h2>
            <p className={`mt-[35px] ${secText}`}>
              If you ask our clients what it&rsquo;s like working with us,
              they&rsquo;ll talk about how much we care about their success. For
              us, real relationships fuel real success. We love building brands
            </p>
            <p className={`mt-[30px] ${secText}`}>
              We are a creative agency working with brands building insightful
              strategy, creating unique designs and crafting value
            </p>
            <ArrowLink href="/about" className="mt-[50px]">
              About Us
            </ArrowLink>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-x">
          <SectionTitle
            center
            title="What We Can Do for Our Clients"
            className="mb-[33px] lg:mb-[43px] xl:mb-12"
          />
          <ServicesAccordion services={homeServices} />
        </div>
      </section>

      <section className="bg-[linear-gradient(to_bottom,transparent_240px,var(--color-smoke)_240px)] pb-20 lg:pb-[140px]">
        <div className="container-x">
          <div className="flex flex-col gap-[60px] lg:flex-row lg:gap-6">
            <div className="contents lg:flex lg:flex-1 lg:flex-col lg:gap-[60px]">
              <ProjectCard project={p1} className="order-1 lg:mt-[100px] xl:mt-[140px]" />
              <ProjectCard project={p4} className="order-4" />
            </div>
            <div className="contents lg:flex lg:flex-1 lg:flex-col lg:gap-[60px]">
              <ProjectCard project={p2} className="order-2" />
              <ProjectCard project={p3} className="order-3" />
              <div className="order-5 lg:mx-12 lg:mt-[20px] xl:mt-[80px]">
                <Link
                  href="/project"
                  className="group inline-flex size-[180px] items-center justify-center rounded-full bg-title font-title text-sm font-semibold uppercase text-white transition-colors duration-300 hover:bg-theme hover:text-title"
                >
                  <RollLabel>View All</RollLabel>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-x">
          <SectionTitle
            center
            title="Our Team Behind The Studio"
            className="mb-[33px] lg:mb-[43px] xl:mb-12"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {team.slice(0, 4).map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="relative scroll-mt-24 bg-theme pb-20 lg:mt-[100px] lg:py-[140px]"
      >
        <Reveal from="right" className={`${bandImg} lg:right-0`}>
          <Image
            src={testiImg}
            alt="Team working together"
            fill
            placeholder="blur"
            sizes="(min-width: 992px) 44vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <div className="container-x pt-20 lg:pt-0">
          <div className="lg:w-1/2 lg:pr-3">
            <h2 className={`mb-[33px] lg:mb-[43px] xl:mb-12 ${secTitleClass}`}>Testimonials</h2>
            <TestimonialSlider />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-x">
          <SectionTitle
            center
            title="Read Our Articles and News"
            className="mb-[33px] lg:mb-[43px] xl:mb-12"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.slice(0, 3).map((b) => (
              <BlogCard key={b.id} blog={b} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-smoke pb-10 pt-20 lg:pb-[100px] lg:pt-[140px]">
        <div className="container-x lg:grid lg:grid-cols-12 lg:gap-6">
          <h2 className="mb-[30px] text-[40px] font-semibold leading-[1.1] sm:text-[50px] lg:col-span-6 lg:mb-0 lg:text-[60px] xl:text-[70px] xl2:text-[80px]">
            Let&rsquo;s Work Together
          </h2>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-lg leading-[1.667]">
              We are digital agency that helps businesses develop immersive and
              engaging user experiences
            </p>
            <Button href="/contact" variant="dark" className="mt-10">
              Let&apos;s Talk with us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
