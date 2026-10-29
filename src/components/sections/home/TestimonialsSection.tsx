import Image from "next/image";
import TestimonialSlider from "@/components/sections/TestimonialSlider";
import SplitBand, { bandTitle } from "@/components/sections/SplitBand";
import testiImg from "../../../../public/images/about-2.jpg";

export default function TestimonialsSection() {
  return (
    <SplitBand
      id="testimonials"
      side="right"
      media={
        <Image
          src={testiImg}
          alt="Team working together"
          fill
          placeholder="blur"
          sizes="(min-width: 1200px) 560px, (min-width: 992px) 50vw, 100vw"
          className="object-cover"
        />
      }
    >
      <h2 className={`mb-8 ${bandTitle}`}>Testimonials</h2>
      <TestimonialSlider />
    </SplitBand>
  );
}
