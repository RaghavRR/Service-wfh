import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Globe } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/cards/ProjectCard";
import TeamCard from "@/components/cards/TeamCard";
import BlogCard from "@/components/cards/BlogCard";
import Testimonials from "@/components/sections/Testimonials";
import Cta from "@/components/sections/Cta";
import { projects } from "@/data/projects";
import { team } from "@/data/team";
import { blogs } from "@/data/blogs";
import { getService, homeServiceIds } from "@/data/services";
import aboutImg from "../../public/images/about-1.jpg";

export default function HomePage() {
  const homeServices = homeServiceIds.map((id) => getService(id)!);

  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden pb-20 pt-16 lg:pb-32 lg:pt-28">
        <div className="container-x">
          {/* Line 1 slides in from the left, line 2 from the right */}
          <h1 className="whitespace-nowrap text-[clamp(32px,10vw,132px)] font-semibold leading-[1.15] tracking-tight">
            <span className="block animate-slide-left">Next Generation</span>
            <span className="block animate-slide-right text-right [animation-delay:150ms]">
              Digital Agency
            </span>
          </h1>

          <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-2 lg:items-end">
            <div className="flex animate-slide-left items-center gap-4 [animation-delay:450ms] max-lg:order-2">
              <Globe className="size-14 shrink-0" strokeWidth={2.2} />
              <span className="max-w-75 font-title text-lg font-semibold uppercase leading-snug">
                Agency of this year worldwide
              </span>
            </div>

            <div className="animate-slide-right [animation-delay:300ms] lg:pb-16">
              <p className="max-w-150 text-lg leading-loose">
                We are digital agency that helps businesses develop immersive
                and engaging user experiences that drive top level growth
              </p>
              <Button href="/project" variant="dark" square className="mt-10">
                View Our Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About intro */}
      <section className="section-space pt-0 lg:pt-0">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-9/10 overflow-hidden rounded-[32px]">
            <Image
              src={aboutImg}
              alt="Modern office workspace"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionTitle
              subtitle="About us"
              title="Unlock Revenue Growth for Your Business"
            />
            <p className="mt-8 text-title/70">
              If you ask our clients what it&apos;s like working with us,
              they&apos;ll talk about how much we care about their success. For
              us, real relationships fuel real success — and we love building
              brands that last.
            </p>
            <p className="mt-4 text-title/70">
              We combine strategy, unique design and solid engineering to create
              value at every step. From the first workshop to the final launch,
              your growth stays at the centre of everything we do.
            </p>
            <Button href="/about" arrow className="mt-10">
              About Us
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-space bg-title">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionTitle
              light
              subtitle="Our services"
              title="What We Can Do for Our Clients"
              className="max-w-2xl"
            />
            <Button href="/service-2" variant="white" arrow>
              All Services
            </Button>
          </div>

          <ul className="mt-16 border-t border-white/10">
            {homeServices.map((s, i) => (
              <li key={s.id} className="border-b border-white/10">
                <Link
                  href={`/service-details/${s.id}`}
                  className="group grid items-center gap-4 py-8 md:grid-cols-12 lg:py-10"
                >
                  <span className="font-title text-lg text-theme md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl text-white transition-colors group-hover:text-theme md:col-span-4 lg:text-[32px]">
                    {s.title}
                  </h3>
                  <p className="text-white/60 md:col-span-6">{s.excerpt}</p>
                  <span className="grid size-14 place-items-center rounded-full border border-white/20 text-white transition-all duration-300 group-hover:rotate-45 group-hover:border-theme group-hover:bg-theme group-hover:text-title md:col-span-1 md:justify-self-end">
                    <ArrowUpRight className="size-6" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-space">
        <div className="container-x">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionTitle
              subtitle="Portfolio"
              title="Our Featured Works"
              className="max-w-2xl"
            />
            <Button href="/project" variant="dark" arrow>
              View All
            </Button>
          </div>
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
            {projects.slice(0, 4).map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-space bg-smoke">
        <div className="container-x">
          <SectionTitle
            subtitle="Our team"
            title="Our Team Behind The Studio"
            className="mb-16 max-w-2xl"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.slice(0, 4).map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Blog */}
      <section className="section-space pt-0 lg:pt-0">
        <div className="container-x">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionTitle
              subtitle="Blog"
              title="Read Our Articles and News"
              className="max-w-2xl"
            />
            <Button href="/blog-2" variant="dark" arrow>
              View All
            </Button>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.slice(0, 3).map((b) => (
              <BlogCard key={b.id} blog={b} />
            ))}
          </div>
        </div>
      </section>

      <Cta
        title="Let's Work Together"
        text="We are a digital agency that helps businesses develop immersive and engaging user experiences."
        button="Let's Talk with us"
        href="/contact"
      />
    </>
  );
}
