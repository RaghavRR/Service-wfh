import Image from "next/image";
import SocialIcons from "@/components/ui/SocialIcons";
import type { TeamMember } from "@/data/team";

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group/card text-center">
      <div className="relative aspect-6/7 overflow-hidden rounded-3xl bg-smoke">
        <Image
          src={member.image}
          alt={member.name}
          fill
          placeholder="blur"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover grayscale transition duration-700 group-hover/card:scale-105 group-hover/card:grayscale-0"
        />
        <div className="absolute inset-x-0 bottom-0 flex justify-center pb-6 translate-y-4 opacity-0 transition-all duration-500 group-hover/card:translate-y-0 group-hover/card:opacity-100">
          <SocialIcons itemClass="border-transparent bg-white text-title hover:bg-theme" />
        </div>
      </div>
      <h3 className="mt-6 text-xl">{member.name}</h3>
      <p className="mt-1 text-title/60">{member.role}</p>
    </article>
  );
}
