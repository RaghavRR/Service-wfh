export const secTitleClass =
  "text-[28px] font-semibold leading-[1.2] tracking-[-0.5px] sm:text-[34px] lg:tracking-[-1px] xl:text-[40px]";

export default function SectionTitle({
  title,
  subtitle,
  light = false,
  center = false,
  className = "",
}: {
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`${center ? "mx-auto text-center lg:max-w-[640px] xl:max-w-[570px] 2xl:max-w-[660px]" : ""} ${className}`}
    >
      {subtitle && (
        <span
          className={`mb-4 inline-flex items-center gap-2 font-title text-xs font-medium uppercase tracking-[0.2em] ${
            light ? "text-theme" : "text-title"
          }`}
        >
          <span className="size-2 rounded-full bg-theme ring-2 ring-title/10" />
          {subtitle}
        </span>
      )}
      <h2 className={`${secTitleClass} ${light ? "text-white" : ""}`}>{title}</h2>
    </div>
  );
}
