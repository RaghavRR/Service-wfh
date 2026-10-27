import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";
import { banners } from "@/data/banners";
import Counters from "@/components/sections/Counters";
import ContactSection from "@/components/sections/ContactSection";
import ClientLogos from "@/components/sections/ClientLogos";
import TeamCard from "@/components/cards/TeamCard";
import SectionTitle, { secTitleClass } from "@/components/ui/SectionTitle";
import { milestones } from "@/data/misc";
import { team } from "@/data/team";
import whyImg from "../../../public/images/whyImg.jpg";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHeader image={banners.about} title="About" />

      <section className="section-space overflow-hidden">
        <div className="container-x">
          <Counters />
        </div>
      </section>

      <section className="relative bg-theme pb-20 lg:mt-[100px] lg:py-[140px]">
        <Reveal from="right" className="relative aspect-4/3 w-full lg:absolute lg:right-0 lg:top-[-100px] lg:bottom-[140px] lg:aspect-auto lg:w-[42%] 3xl:w-[44%]">
          <Image
            src={whyImg}
            alt="Our team at work"
            fill
            placeholder="blur"
            sizes="(min-width: 992px) 44vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <div className="container-x pt-20 lg:pt-0">
          <div className="lg:w-1/2 lg:pr-3">
            <h2 className={`mb-[35px] xl:mb-9 2xl:mb-[45px] ${secTitleClass}`}>
              Passionate About Creating Quality Design
            </h2>
            <h4 className="mb-[15px] text-[22px] font-semibold xl:text-2xl">We Love What We Do</h4>
            <p className="text-base 2xl:text-lg">
              We are a creative agency working with brands building insightful
              strategy, creating unique designs and crafting value
            </p>
            <h4 className="mb-[15px] mt-[35px] text-[22px] font-semibold xl:text-2xl">Why Work With Us</h4>
            <p className="text-base 2xl:text-lg">
              If you ask our clients what it&rsquo;s like working with us,
              they&rsquo;ll talk about how much we care about their success. For
              us, real relationships fuel real success. We love building brands
            </p>
          </div>
        </div>
      </section>

      <section className="section-space overflow-hidden">
        <div className="container-x">
          <ul className="mx-auto lg:w-5/6">
            {milestones.map((m) => (
              <li
                key={m.title}
                className="group border-b-2 border-title pb-[31px] pt-[26px] first:border-t-2 md:flex"
              >
                <span className="font-title text-sm font-semibold tracking-[-0.14px] transition-transform duration-400 md:group-hover:translate-x-6">
                  {m.year}
                </span>
                <div className="mb-5 mt-2.5 transition-transform duration-400 md:my-0 md:ml-[50px] md:group-hover:translate-x-6 xl:ml-[100px]">
                  <h4 className="mb-[3px] text-[22px] font-semibold sm:text-2xl">
                    <Link href="/about">{m.title}</Link>
                  </h4>
                  <p className="text-sm sm:text-base lg:text-lg">
                    We bring to life the most complex projects, specialize
                  </p>
                </div>
                <span className="block font-title text-sm font-semibold uppercase tracking-[-0.14px] transition-transform duration-400 md:ml-auto md:group-hover:-translate-x-6">
                  {m.role}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="overflow-hidden pb-20 lg:pb-[140px]">
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

      <ContactSection />
      <ClientLogos />
    </>
  );
}
