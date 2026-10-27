import Image, { type StaticImageData } from "next/image";
import { banners } from "@/data/banners";

export default function PageHeader({
  title,
  image = banners.about,
}: {
  title: string;
  image?: StaticImageData;
}) {
  return (
    <section className="relative overflow-hidden bg-smoke py-[100px] text-center sm:py-[120px] md:py-[180px] 2xl:py-[200px] 3xl:py-[240px]">
      <Image
        src={image}
        alt=""
        fill
        preload
        placeholder="blur"
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-title/20" />
      <div className="container-x relative">
        <h1 className="text-[40px] font-semibold leading-[1.1] text-white sm:text-[56px] md:text-[60px] md:tracking-[-2.4px] xl:text-[70px] 2xl:text-[80px]">
          {title}
        </h1>
      </div>
    </section>
  );
}
