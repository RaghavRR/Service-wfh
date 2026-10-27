import type { StaticImageData } from "next/image";
import b1 from "../../public/images/blog-1.jpg";
import b2 from "../../public/images/blog-2.jpg";
import b3 from "../../public/images/blog-3.jpg";
import b4 from "../../public/images/blog-4.jpg";
import b5 from "../../public/images/blog-5.jpg";
import b6 from "../../public/images/blog-6.jpg";

export type Blog = {
  id: number;
  title: string;
  image: StaticImageData;
  date: string;
  category: string;
  author: string;
};

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Everything You Should Know About Return",
    image: b1,
    date: "March 26, 2024",
    category: "Branding",
    author: "Ashton Porter",
  },
  {
    id: 2,
    title: "6 Big Commerce Design Tips For Big Results",
    image: b2,
    date: "March 26, 2024",
    category: "Branding",
    author: "Ashton Porter",
  },
  {
    id: 3,
    title: "Four Steps to Conduct a Successful Usability",
    image: b3,
    date: "March 26, 2024",
    category: "Branding",
    author: "Ashton Porter",
  },
  {
    id: 4,
    title: "Five Winning Voice Search Marketing Tips",
    image: b4,
    date: "March 26, 2024",
    category: "Branding",
    author: "Ashton Porter",
  },
  {
    id: 5,
    title: "Best 15 App For Digital Transformation",
    image: b5,
    date: "March 26, 2024",
    category: "Branding",
    author: "Ashton Porter",
  },
  {
    id: 6,
    title: "Transforming Challenges Into Opportunities",
    image: b6,
    date: "March 26, 2024",
    category: "Branding",
    author: "Ashton Porter",
  },
];

export const blogCategories = [
  { name: "Archive", count: 3 },
  { name: "Branding", count: 6 },
  { name: "Company", count: 2 },
  { name: "Design", count: 1 },
  { name: "Business", count: 4 },
  { name: "Modern", count: 1 },
];

export const blogTags = [
  "Agency",
  "Awards",
  "Marketing",
  "Brand",
  "Contemporary",
  "Design",
  "Education",
  "Business",
  "Modern",
];

export const getBlog = (id: number) => blogs.find((b) => b.id === id);
