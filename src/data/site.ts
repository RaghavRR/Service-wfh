export const site = {
  name: "Kodrava",
  tagline:
    "A web development and UI/UX studio that designs interfaces people love and engineers them into fast, scalable products.",
  address: "27 Division St, New York, NY 10002, USA",
  phone: "+1 800 123 654 987",
  phoneHref: "tel:1800123654987",
  phone2: "+1 800 223 984 002",
  email: "hello@kodrava.studio",
  emailHref: "mailto:hello@kodrava.studio",
  mapUrl: "https://maps.google.com/?q=27+Division+St,+New+York,+NY+10002",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=10&output=embed&iwloc=near",
};

export type SocialName = "facebook" | "instagram" | "twitter" | "dribbble";

export const socials: { name: SocialName; href: string }[] = [
  { name: "facebook", href: "https://www.facebook.com/" },
  { name: "instagram", href: "https://instagram.com/" },
  { name: "twitter", href: "https://twitter.com/" },
  { name: "dribbble", href: "https://dribbble.com/" },
];

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/project" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Portfolios", href: "/project" },
  { label: "Services", href: "/service-2" },
  { label: "Our Team", href: "/team" },
  { label: "FAQ", href: "/faq" },
  { label: "Testimonials", href: "/#testimonials" },
  // Blog is disabled for now (routes live in src/app/_blog-2 and src/app/_blog-details).
  // { label: "Blog", href: "/blog-2" },
];
