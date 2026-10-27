import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/sections/PageHeader";
import Counters from "@/components/sections/Counters";
import Cta from "@/components/sections/Cta";
import ClientLogos from "@/components/sections/ClientLogos";
import Newsletter from "@/components/sections/Newsletter";
import TeamCard from "@/components/cards/TeamCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { milestones } from "@/data/misc";
import { team } from "@/data/team";
import whyImg from "../../../public/images/about-2.jpg";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About" crumbs={[{ label: "About" }]} />

      <section className="section-space">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-9/11 overflow-hidden rounded-[32px]">
            <Image
              src={whyImg}
              alt="Our team at work"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <Counters />
        </div>
      </section>

      <section className="section-space bg-smoke">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionTitle
            subtitle="Who we are"
            title="Passionate About Creating Quality Design"
          />
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl">We Love What We Do</h3>
              <p className="mt-4 text-title/70">
                We are a team of strategists, designers and developers who
                believe great work comes from curiosity and care. Every brief is
                a chance to learn something new about our clients and their
                customers.
              </p>
            </div>
            <div>
              <h3 className="text-2xl">Why Work With Us</h3>
              <p className="mt-4 text-title/70">
                Over the years we have partnered with more than 36 industries —
                from fintech to fashion. We bring that experience to every
                project, with clear communication, honest timelines and results
                you can measure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-x">
          <SectionTitle
            subtitle="Awards"
            title="Milestones & Recognition"
            className="mb-14"
          />
          <ul className="border-t border-line">
            {milestones.map((m) => (
              <li
                key={m.title}
                className="group grid gap-3 border-b border-line py-8 transition-colors hover:bg-smoke md:grid-cols-12 md:items-center md:px-6"
              >
                <span className="font-title text-xl text-title/40 md:col-span-2">
                  {m.year}
                </span>
                <h3 className="text-xl md:col-span-4 lg:text-2xl">{m.title}</h3>
                <p className="text-title/60 md:col-span-4">
                  Recognised for outstanding creative and technical work.
                </p>
                <span className="w-fit rounded-full bg-theme px-4 py-1 text-sm md:col-span-2 md:justify-self-end">
                  {m.role}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

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

      <Cta />
      <ClientLogos />
      <Newsletter />
    </>
  );
}
