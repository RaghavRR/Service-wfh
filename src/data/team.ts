import type { StaticImageData } from "next/image";
import t1 from "../../public/images/team-1.jpg";
import t2 from "../../public/images/team-2.jpg";
import t3 from "../../public/images/team-3.jpg";
import t4 from "../../public/images/team-4.jpg";
import t5 from "../../public/images/team-5.jpg";
import t6 from "../../public/images/team-6.jpg";
import t7 from "../../public/images/team-7.jpg";
import t8 from "../../public/images/team-8.jpg";

export type TeamMember = {
  name: string;
  role: string;
  image: StaticImageData;
};

export const team: TeamMember[] = [
  { name: "Daniyel Karlos", role: "Web Developer", image: t1 },
  { name: "Sophia Bennett", role: "UI/UX Designer", image: t2 },
  { name: "Marcus Hale", role: "Creative Director", image: t3 },
  { name: "Olivia Carter", role: "Brand Strategist", image: t4 },
  { name: "Ethan Brooks", role: "Project Manager", image: t5 },
  { name: "Mia Thompson", role: "Marketing Lead", image: t6 },
  { name: "Lucas Reed", role: "Motion Designer", image: t7 },
  { name: "Emma Collins", role: "Content Writer", image: t8 },
];
