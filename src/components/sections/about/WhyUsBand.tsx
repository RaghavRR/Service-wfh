import Image from "next/image";
import SplitBand, { bandText, bandTitle } from "@/components/sections/SplitBand";
import whyImg from "../../../../public/images/whyImg.jpg";

const subTitle = "mb-3 text-lg font-semibold xl:text-xl";

export default function WhyUsBand() {
  return (
    <SplitBand
      side="right"
      media={
        <Image
          src={whyImg}
          alt="Our team at work"
          fill
          placeholder="blur"
          sizes="(min-width: 1200px) 560px, (min-width: 992px) 50vw, 100vw"
          className="object-cover"
        />
      }
    >
      <h2 className={`mb-8 ${bandTitle}`}>Passionate About Creating Quality Design</h2>
      <h3 className={subTitle}>We Love What We Do</h3>
      <p className={bandText}>
        We design and build digital products with insightful strategy, unique
        interfaces and code that lasts.
      </p>
      <h3 className={`mt-7 ${subTitle}`}>Why Work With Us</h3>
      <p className={bandText}>
        If you ask our clients what it&rsquo;s like working with us,
        they&rsquo;ll talk about how much we care about their success. For us,
        real relationships fuel real success.
      </p>
    </SplitBand>
  );
}
