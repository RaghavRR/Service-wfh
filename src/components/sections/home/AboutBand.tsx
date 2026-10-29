import Image from "next/image";
import { ArrowLink } from "@/components/ui/Button";
import SplitBand, { bandText, bandTitle } from "@/components/sections/SplitBand";
import aboutImg from "../../../../public/images/about-1.jpg";

export default function AboutBand() {
  return (
    <SplitBand
      id="about"
      side="left"
      media={
        <Image
          src={aboutImg}
          alt="Designer working at a laptop"
          fill
          placeholder="blur"
          sizes="(min-width: 1200px) 560px, (min-width: 992px) 50vw, 100vw"
          className="object-cover"
        />
      }
    >
      <h2 className={bandTitle}>Unlock Revenue Growth for Your Business</h2>
      <p className={`mt-6 ${bandText}`}>
        If you ask our clients what it&rsquo;s like working with us,
        they&rsquo;ll talk about how much we care about their success. For us,
        real relationships fuel real success.
      </p>
      <p className={`mt-4 ${bandText}`}>
        We design and build websites and web apps with clear strategy, sharp
        interfaces and clean code.
      </p>
      <ArrowLink href="/about" className="mt-8">
        About Us
      </ArrowLink>
    </SplitBand>
  );
}
