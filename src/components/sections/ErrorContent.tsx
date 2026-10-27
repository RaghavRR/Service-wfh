import { ArrowLink, RollLabel } from "@/components/ui/Button";

export default function ErrorContent({
  code = "404",
  title = "Look Like You’re Lost",
  text = "The link you followed probably broken or the page has been removed",
  onRetry,
}: {
  code?: string;
  title?: string;
  text?: string;
  onRetry?: () => void;
}) {
  return (
    <section
      data-hide-footer
      className="flex h-[calc(100svh-80px)] items-center justify-center overflow-hidden py-6 sm:h-[calc(100svh-90px)] lg:h-[calc(100svh-106px)]"
    >
      <div className="container-x text-center">
        <p
          className="select-none font-title text-[min(26vw,30svh,330px)] font-bold leading-none tracking-tight"
          aria-hidden
        >
          {code}
        </p>
        <h1 className="mt-[3svh] text-[min(30px,5svh)] font-semibold leading-[1.2] tracking-tight sm:text-[min(45px,6svh)] xl:text-[min(60px,7svh)]">
          {title}
        </h1>
        <p className="mt-[2svh] text-base xl:text-lg">{text}</p>
        <div className="mt-[4svh] flex flex-wrap items-center justify-center gap-10">
          {onRetry && (
            <button
              type="button"
              onClick={onRetry}
              className="group relative inline-flex pb-1.5 font-title text-sm font-semibold uppercase after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-current"
            >
              <RollLabel>Try again</RollLabel>
            </button>
          )}
          <ArrowLink href="/">Back to home</ArrowLink>
        </div>
      </div>
    </section>
  );
}
