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
  tags: string[];
};

export const services: Service[] = [
  {
    id: 1,
    title: "UI/UX Design",
    icon: "branding",
    excerpt:
      "Research-led interfaces that feel effortless: user flows, wireframes and high-fidelity prototypes tested with real users.",
    tags: ["User Research", "Wireframes", "Prototyping"],
  },
  {
    id: 2,
    title: "Web Development",
    icon: "web",
    excerpt:
      "Fast, accessible and SEO-ready websites built with modern frameworks and a CMS your team can actually use.",
    tags: ["Next.js", "React", "Headless CMS"],
  },
  {
    id: 3,
    title: "Web Applications",
    icon: "illustration",
    excerpt:
      "Dashboards, portals and SaaS products engineered for scale, with clean architecture and reliable APIs.",
    tags: ["SaaS", "Dashboards", "APIs"],
  },
  {
    id: 4,
    title: "Design Systems",
    icon: "content",
    excerpt:
      "Reusable components, tokens and documentation that keep design and code consistent as your product grows.",
    tags: ["Components", "Tokens", "Docs"],
  },
  {
    id: 5,
    title: "Website Redesign",
    icon: "marketing",
    excerpt:
      "We audit what is holding your current site back, then rebuild it to look sharper and convert better.",
    tags: ["UX Audit", "Rebrand", "Migration"],
  },
  {
    id: 6,
    title: "Performance & SEO",
    icon: "social",
    excerpt:
      "Core Web Vitals, technical SEO and analytics so your site loads instantly and ranks where customers search.",
    tags: ["Core Web Vitals", "Technical SEO", "Analytics"],
  },
];

export const homeServiceIds = [1, 2, 3, 4];

export const getService = (id: number) => services.find((s) => s.id === id);
