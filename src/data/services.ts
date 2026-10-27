export type ServiceIcon =
  | "branding"
  | "web"
  | "marketing"
  | "illustration"
  | "content"
  | "social";

export type Service = {
  id: number;
  title: string;
  icon: ServiceIcon;
  excerpt: string;
};

export const services: Service[] = [
  {
    id: 1,
    title: "Branding Design",
    icon: "branding",
    excerpt:
      "We craft memorable identities — logos, colour systems and guidelines that make your brand instantly recognisable.",
  },
  {
    id: 2,
    title: "Web Development",
    icon: "web",
    excerpt:
      "Fast, accessible and scalable websites built with modern frameworks that make users come back for more.",
  },
  {
    id: 3,
    title: "Digital Marketing",
    icon: "marketing",
    excerpt:
      "Data-driven campaigns across search, social and email that turn attention into measurable revenue growth.",
  },
  {
    id: 4,
    title: "Illustration Modelling",
    icon: "illustration",
    excerpt:
      "Custom illustrations and 3D models that give your product a distinctive personality and tell its story.",
  },
  {
    id: 5,
    title: "Content Marketing",
    icon: "content",
    excerpt:
      "Stories, articles and videos that build trust with your audience and keep them engaged with your brand.",
  },
  {
    id: 6,
    title: "Social Advertising",
    icon: "social",
    excerpt:
      "Targeted ad campaigns on every major platform, optimised daily to get the most out of every dollar spent.",
  },
];

// Order used for the numbered list on the home page
export const homeServiceIds = [1, 4, 2, 3];

export const getService = (id: number) => services.find((s) => s.id === id);
