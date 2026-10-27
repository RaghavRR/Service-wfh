import type { StaticImageData } from "next/image";
import about from "../../public/images/about.jpg";
import service from "../../public/images/service.jpg";
import team from "../../public/images/team.jpg";
import faq from "../../public/images/faq.jpg";
import portfolio from "../../public/images/portfolio.jpg";
import blog from "../../public/images/blog.jpg";
import contact from "../../public/images/contact.jpg";

export const banners = {
  about: about,
  service: service,
  team: team,
  faq: faq,
  portfolio: portfolio,
  blog: blog,
  contact: contact,
} satisfies Record<string, StaticImageData>;
