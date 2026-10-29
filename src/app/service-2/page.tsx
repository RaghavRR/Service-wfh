import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import { banners } from "@/data/banners";
import ServicesList from "@/components/sections/ServicesList";
import { services } from "@/data/services";
import VideoSection from "@/components/sections/VideoSection";
import videoPoster from "../../../public/images/video_banner.jpg";

export const metadata: Metadata = { title: "Services" };

export default function ServicePage() {
  return (
    <>
      <PageHeader image={banners.service} title="Services" />
      <section className="section-space overflow-hidden">
        <div className="container-x">
          <ServicesList services={services} />
        </div>
      </section>
      <VideoSection videoId="vvNwlRLjLkU" poster={videoPoster} />
    </>
  );
}
