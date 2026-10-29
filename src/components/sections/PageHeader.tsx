import Image, { type StaticImageData } from "next/image";
import { banners } from "@/data/banners";

// Inner-page banner, kept inside the content column like the rest of the layout.
export default function PageHeader({
  title,
  image = banners.about,
}: {
  title: string;
  image?: StaticImageData;
}) {
  return (
    <section className="container-x">
      <div className="relative overflow-hidden bg-smoke py-[90px] text-center sm:py-[110px] md:py-[140px] xl:py-[160px]">
        <Image
          src={image}
          alt=""
          fill
          preload
          placeholder="blur"
          sizes="(min-width: 1200px) 1104px, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-title/20" />
        <div className="relative px-6">
          <h1 className="text-[34px] font-semibold leading-[1.1] tracking-[-0.5px] text-white sm:text-[44px] md:tracking-[-1.5px] xl:text-[56px]">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
