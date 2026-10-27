import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import { banners } from "@/data/banners";
import BlogSidebar from "@/components/sections/BlogSidebar";
import BlogCard from "@/components/cards/BlogCard";
import { blogs } from "@/data/blogs";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <>
      <PageHeader image={banners.blog} title="Blog" />
      <section className="section-space">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2">
              {blogs.map((b) => (
                <BlogCard
                  key={b.id}
                  blog={b}
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                />
              ))}
            </div>

            <nav aria-label="Pagination" className="mt-16 flex gap-3">
              {[1, 2, 3, 4].map((n) => (
                <span
                  key={n}
                  aria-current={n === 1 ? "page" : undefined}
                  className={`grid size-12 cursor-pointer place-items-center rounded-full font-title text-sm transition-colors ${
                    n === 1 ? "bg-title text-white" : "bg-smoke hover:bg-theme"
                  }`}
                >
                  {n}
                </span>
              ))}
              <span className="grid size-12 cursor-pointer place-items-center rounded-full bg-smoke hover:bg-theme">
                <ChevronRight className="size-5" />
              </span>
            </nav>
          </div>
          <div className="lg:col-span-4">
            <BlogSidebar />
          </div>
        </div>
      </section>
    </>
  );
}
