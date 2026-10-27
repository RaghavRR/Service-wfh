import { ArrowLink } from "@/components/ui/Button";

export default function FeatureCard({
  icon,
  title,
  text,
  linkLabel,
  href,
  stacked = false,
}: {
  icon: React.ReactNode;
  title: string;
  text: React.ReactNode;
  linkLabel: string;
  href: string;
  stacked?: boolean;
}) {
  return (
    <div
      className={`bg-smoke px-[26px] py-[30px] lg:px-9 lg:py-10 ${
        stacked ? "" : "sm:flex sm:flex-row-reverse sm:justify-between sm:gap-[50px] 2xl:gap-[100px]"
      }`}
    >
      <div className={`flex-none ${stacked ? "mb-[34px] lg:mb-[74px]" : "mb-[34px] sm:mb-0"}`}>
        {icon}
      </div>
      <div>
        <h4 className="mb-[15px] text-xl font-semibold lg:text-2xl">{title}</h4>
        <div className="mb-6 text-lg leading-[1.75]">{text}</div>
        <ArrowLink href={href}>{linkLabel}</ArrowLink>
      </div>
    </div>
  );
}
