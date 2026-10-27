export const site = {
  name: "Frisk",
  tagline:
    "We are a digital agency that helps businesses develop immersive and engaging user experiences that drive top-level growth.",
  address: "27 Division St, New York, NY 10002, USA",
  phone: "+1 800 123 654 987",
  phoneHref: "tel:1800123654987",
  phone2: "+1 800 223 984 002",
  email: "frisk.agency@mail.com",
  emailHref: "mailto:frisk.agency@mail.com",
  mapUrl: "https://maps.google.com/?q=27+Division+St,+New+York,+NY+10002",
};

export type SocialName = "facebook" | "instagram" | "twitter" | "dribbble";

export const socials: { name: SocialName; href: string }[] = [
  { name: "facebook", href: "https://www.facebook.com/" },
  { name: "instagram", href: "https://instagram.com/" },
  { name: "twitter", href: "https://twitter.com/" },
  { name: "dribbble", href: "https://dribbble.com/" },
];

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Pages",
    href: "#",
    children: [
      { label: "About Page", href: "/about" },
      { label: "Service Page", href: "/service-2" },
      { label: "Service Details", href: "/service-details/2" },
      { label: "Team Page", href: "/team" },
      { label: "FAQ Page", href: "/faq" },
      { label: "Error Page", href: "/error" },
    ],
  },
  {
    label: "Portfolio",
    href: "#",
    children: [
      { label: "Portfolio", href: "/project" },
      { label: "Portfolio Details", href: "/project-details/2" },
    ],
  },
  {
    label: "Blog",
    href: "#",
    children: [
      { label: "Blog", href: "/blog-2" },
      { label: "Blog Details", href: "/blog-details/2" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Portfolios", href: "/project" },
  { label: "Services", href: "/service-2" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Careers", href: "/team" },
];
