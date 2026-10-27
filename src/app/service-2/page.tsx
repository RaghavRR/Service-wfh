import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import { banners } from "@/data/banners";
import FeatureCard from "@/components/cards/FeatureCard";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { services } from "@/data/services";
import VideoSection from "@/components/sections/VideoSection";
import videoPoster from "../../../public/images/video_banner.jpg";

export const metadata: Metadata = { title: "Service" };

export default function ServicePage() {
  return (
    <>
      <PageHeader image={banners.service} title="Service" />
      <section className="section-space overflow-hidden">
        <div className="container-x grid gap-6 xl:grid-cols-2">
          {services.map((s) => (
            <FeatureCard
              key={s.id}
              icon={<ServiceIcon name={s.icon} />}
              title={s.title}
              text={s.excerpt}
              linkLabel="View Details"
              href={`/service-details/${s.id}`}
            />
          ))}
        </div>
      </section>
      <VideoSection videoId="vvNwlRLjLkU" poster={videoPoster} />
    </>
  );
}
