import type { StaticImageData } from "next/image";
import t1 from "../../public/images/team-1.png";
import t2 from "../../public/images/team-2.png";
import t3 from "../../public/images/team-3.png";
import t4 from "../../public/images/team-4.png";
import t5 from "../../public/images/team-5.png";
import t6 from "../../public/images/team-6.png";
import t7 from "../../public/images/team-7.png";
import t8 from "../../public/images/team-8.png";
import founderImg from "../../public/images/founderimg.jpg"

export type TeamMember = {
  name: string;
  role: string;
  image: StaticImageData;
};

export type Founder = TeamMember & {
  quote: string;
  story: string;
};

// Placeholder founder profile; replace the name, photo and words with the real ones.
export const founder: Founder = {
  name: "Aarav Malhotra",
  role: "Founder & Creative Director",
  image: founderImg,
  quote:
    "Great products aren't decorated, they're designed. Every pixel we place has to earn its spot by making someone's day easier.",
  story:
    "I started Kodrava to close the gap between beautiful design and solid engineering. Today our team designs and builds websites and web apps for brands that care about both.",
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
