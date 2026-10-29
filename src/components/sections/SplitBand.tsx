import Reveal from "@/components/ui/Reveal";

export const bandTitle =
  "text-[28px] font-semibold leading-[1.2] tracking-[-0.5px] sm:text-[34px] lg:tracking-[-1px] xl:text-[40px]";
export const bandText = "text-base leading-[1.75] text-title/80";

// Full-width lime band with media and copy kept inside the content column.
export default function SplitBand({
  media,
  side = "left",
  id,
  mediaClassName = "aspect-4/3 lg:aspect-5/4",
  children,
}: {
  media: React.ReactNode;
  side?: "left" | "right";
  id?: string;
  /** Sizing for the media box; defaults to a fixed aspect ratio. */
  mediaClassName?: string;
  children: React.ReactNode;
}) {
  const right = side === "right";

  return (
    <section id={id} className="scroll-mt-24 bg-theme py-16 lg:py-24">
      <div className="container-x grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal
          from={side}
          className={`relative overflow-hidden bg-title/10 lg:col-span-6 ${mediaClassName} ${
            right ? "lg:order-2" : ""
          }`}
        >
          {media}
        </Reveal>
        <div className={`lg:col-span-6 ${right ? "lg:order-1" : ""}`}>{children}</div>
      </div>
    </section>
  );
}
