import type { BannerVideo } from "@/components/sections/PageHeader";

type Banner = { video: BannerVideo; eyebrow: string; title: string; accent: string; text: string };

// Copy and background video for each inner-page banner.
export const banners = {
  about: {
    video: "about",
    eyebrow: "About Kodrava",
    title: "Big ideas,",
    accent: "sharp work.",
    text: "Designers and developers building websites and products that look good and keep working.",
  },
  service: {
    video: "service",
    eyebrow: "Our Services",
    title: "Design, build",
    accent: "and grow.",
    text: "UI/UX design, web development and everything in between, from first sketch to launch.",
  },
  portfolio: {
    video: "project",
    eyebrow: "Portfolio",
    title: "Projects we're",
    accent: "proud of.",
    text: "A selection of websites and products we've designed and built with our clients.",
  },
  team: {
    video: "team",
    eyebrow: "Our Team",
    title: "The people",
    accent: "behind the pixels.",
    text: "A small, senior team. The people you talk to are the people doing the work.",
  },
  faq: {
    video: "faq",
    eyebrow: "FAQs",
    title: "Good to",
    accent: "know.",
    text: "How we work, timelines, pricing and support, answered up front.",
  },
  blog: {
    video: "about",
    eyebrow: "Journal",
    title: "Notes from",
    accent: "the studio.",
    text: "Thoughts on design, development and building for the web.",
  },
  contact: {
    video: "contact",
    eyebrow: "Contact",
    title: "Let's build",
    accent: "something.",
    text: "Tell us about your project. We usually reply within one working day.",
  },
} satisfies Record<string, Banner>;
