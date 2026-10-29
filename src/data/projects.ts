import type { StaticImageData } from "next/image";
import p1 from "../../public/images/project-1.jpg";
import p2 from "../../public/images/project-2.jpg";
import p3 from "../../public/images/project-3.jpg";
import p4 from "../../public/images/project-4.jpg";
import p5 from "../../public/images/project-5.jpg";
import p6 from "../../public/images/project-6.jpg";

export type Project = {
  id: number;
  title: string;
  shortTitle: string;
  image: StaticImageData;
  tags: string[];
  category: string;
  software: string;
  service: string;
  client: string;
  date: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Money Laundering Compliance Scanner",
    shortTitle: "Compliance Scanner",
    image: p1,
    tags: ["UI/UX Design", "Web Development"],
    category: "Development",
    software: "React, Figma",
    service: "Development",
    client: "Northwind Bank",
    date: "August 12, 2023",
  },
  {
    id: 2,
    title: "Decentralized Lending Platform for Students",
    shortTitle: "Decentralized Platform",
    image: p2,
    tags: ["UI/UX Design", "Web Development"],
    category: "Development",
    software: "WordPress, Figma",
    service: "Development",
    client: "Eunice Mills",
    date: "October 6, 2023",
  },
  {
    id: 3,
    title: "Anti Money Laundering Compliance Scanner",
    shortTitle: "AML Scanner",
    image: p3,
    tags: ["UI/UX Design", "Web Development"],
    category: "Branding",
    software: "Next.js, Figma",
    service: "Branding",
    client: "Clearpath Finance",
    date: "November 18, 2023",
  },
  {
    id: 4,
    title: "Shopify Redesign for a Nova Scotia Winery",
    shortTitle: "Winery Redesign",
    image: p4,
    tags: ["UI/UX Design", "Web Development"],
    category: "Marketing",
    software: "Shopify, Figma",
    service: "Marketing",
    client: "Blue Harbour Wines",
    date: "January 9, 2024",
  },
  {
    id: 5,
    title: "Trading Website Design & Development",
    shortTitle: "Trading Website",
    image: p5,
    tags: ["UI/UX Design", "Web Development"],
    category: "Development",
    software: "Vue, Figma",
    service: "Development",
    client: "Apex Trading",
    date: "March 2, 2024",
  },
  {
    id: 6,
    title: "Product Lineup Industrial Design for Caramba",
    shortTitle: "Caramba Lineup",
    image: p6,
    tags: ["UI/UX Design", "Web Development"],
    category: "Branding",
    software: "Blender, Figma",
    service: "Industrial Design",
    client: "Caramba",
    date: "May 21, 2024",
  },
];

export const getProject = (id: number) => projects.find((p) => p.id === id);
