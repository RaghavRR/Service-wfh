import Link from "next/link";
import { milestones } from "@/data/misc";

export default function MilestonesSection() {
  return (
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
  );
}
