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
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,0,0)_50.47%,#0a0c00)]" />
      <div className="absolute bottom-0 left-0 px-3.5 pb-4 transition-all sm:px-7 sm:pb-9 duration-400 lg:-bottom-2.5 lg:opacity-0 lg:group-hover/card:bottom-0 lg:group-hover/card:opacity-100 lg:group-focus/card:bottom-0 lg:group-focus/card:opacity-100">
        <h3 className="text-sm font-semibold leading-tight text-white sm:text-[22px] 2xl:text-2xl">{member.name}</h3>
        <span className="mt-1.5 flex items-center gap-3 whitespace-nowrap font-title text-[9px] font-semibold uppercase tracking-[0.04em] text-white/75 sm:mt-3 sm:text-xs sm:tracking-[0.14em]">
          <span className="hidden h-px w-6 flex-none bg-theme sm:block" aria-hidden />
          {member.role}
        </span>
      </div>
    </article>
  );
}
