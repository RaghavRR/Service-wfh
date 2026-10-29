import HeroSection from "@/components/sections/home/HeroSection";
import AboutBand from "@/components/sections/home/AboutBand";
import ServicesSection from "@/components/sections/home/ServicesSection";
import FeaturedProjects from "@/components/sections/home/FeaturedProjects";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
// import BlogSection from "@/components/sections/home/BlogSection";
import CtaSection from "@/components/sections/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutBand />
      <ServicesSection />
      <FeaturedProjects />
      <TeamSection />
      <TestimonialsSection />
      {/* Blog is disabled for now; re-enable together with src/app/_blog-2. */}
      {/* <BlogSection /> */}
      <CtaSection />
    </>
  );
}
