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
        sizes="(min-width: 992px) 25vw, 50vw"
        className="object-cover grayscale transition duration-400 group-hover/card:scale-105 group-hover/card:grayscale-0 group-focus/card:scale-105 group-focus/card:grayscale-0"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,0,0)_55%,rgba(10,12,0,0.85))]" />
      {/* Name and role always visible, same size; the role is set apart by weight and colour only. */}
      <div className="absolute inset-x-0 bottom-0 px-3 pb-2 text-[13px] leading-snug font-body sm:px-5 sm:pb-3 sm:text-[15px] lg:text-base">
        <h3 className="truncate font-body font-semibold text-white">{member.name}</h3>
        <p className="mt-0.5 truncate text-white/70">{member.role}</p>
      </div>
    </article>
  );
}
