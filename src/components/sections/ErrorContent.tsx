import Button from "@/components/ui/Button";

export default function ErrorContent() {
  return (
    <section className="section-space">
      <div className="container-x text-center">
        <p
          className="select-none font-title text-[120px] font-bold leading-none text-transparent sm:text-[220px] lg:text-[300px]"
          style={{ WebkitTextStroke: "2px var(--color-title)" }}
          aria-hidden
        >
          4<span className="text-theme [-webkit-text-stroke:0]">0</span>4
        </p>
        <h1 className="mt-6 text-[32px] sm:text-[48px]">
          Look Like You&rsquo;re Lost
        </h1>
        <p className="mx-auto mt-4 max-w-md text-title/60">
          The link you followed is probably broken or the page has been removed.
        </p>
        <Button href="/" variant="dark" arrow className="mt-10">
          Back to home
        </Button>
      </div>
    </section>
  );
}
