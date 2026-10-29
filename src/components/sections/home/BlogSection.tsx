import SectionTitle from "@/components/ui/SectionTitle";
import BlogCard from "@/components/cards/BlogCard";
import { blogs } from "@/data/blogs";

// Not rendered while the blog is disabled; see src/app/page.tsx.
export default function BlogSection() {
  return (
    <section className="section-space">
      <div className="container-x">
        <SectionTitle
          center
          title="Read Our Articles and News"
          className="mb-[33px] lg:mb-[43px] xl:mb-12"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(0, 3).map((b) => (
            <BlogCard key={b.id} blog={b} />
          ))}
        </div>
      </div>
    </section>
  );
}
