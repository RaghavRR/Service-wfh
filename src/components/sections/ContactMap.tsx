import { site } from "@/data/site";

export default function ContactMap({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <iframe
        src={site.mapEmbedUrl}
        title={`${site.name} location`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="block size-full min-h-[400px] border-0"
      />
    </div>
  );
}
