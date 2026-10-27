export default function SectionTitle({
  title,
  subtitle,
  light = false,
  className = "",
}: {
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
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
      <h2
        className={`text-[32px] leading-[1.2] sm:text-[44px] lg:text-[56px] ${
          light ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
