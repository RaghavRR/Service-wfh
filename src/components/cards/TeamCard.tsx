import Image from "next/image";
import type { TeamMember } from "@/data/team";

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article
      tabIndex={0}
      className="group/card relative aspect-[261/324] cursor-pointer overflow-hidden bg-title outline-none"
    >
      <Image
        src={member.image}
        alt={member.name}
        fill
        placeholder="blur"
        sizes="(min-width: 992px) 25vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover grayscale transition duration-400 group-hover/card:scale-105 group-hover/card:grayscale-0 group-focus/card:scale-105 group-focus/card:grayscale-0"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,0,0)_50.47%,#0a0c00)]" />
      <div className="absolute bottom-0 left-0 px-7 pb-9 transition-all duration-400 lg:-bottom-2.5 lg:opacity-0 lg:group-hover/card:bottom-0 lg:group-hover/card:opacity-100 lg:group-focus/card:bottom-0 lg:group-focus/card:opacity-100">
        <h3 className="mb-1.5 text-[22px] font-semibold text-white 2xl:text-2xl">{member.name}</h3>
        <span className="block text-lg text-white">{member.role}</span>
      </div>
    </article>
  );
}
