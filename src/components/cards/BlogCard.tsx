import Image from "next/image";
import Link from "next/link";
import { ArrowLink } from "@/components/ui/Button";
import type { Blog } from "@/data/blogs";

export default function BlogCard({
  blog,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
}: {
  blog: Blog;
  sizes?: string;
}) {
  const href = `/blog-details/${blog.id}`;
  return (
    <article className="group/card">
      <Link
        href={href}
        className="relative block aspect-4/3 overflow-hidden rounded-3xl bg-smoke"
      >
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          placeholder="blur"
          sizes={sizes}
          className="object-cover transition-transform duration-700 group-hover/card:scale-105"
        />
      </Link>
      <div className="mt-6 flex items-center gap-3 text-sm text-title/60">
        <span>{blog.date}</span>
        <span className="size-1.5 rounded-full bg-title/40" />
        <span className="rounded-full bg-theme px-3 py-0.5 text-title">
          {blog.category}
        </span>
      </div>
      <h3 className="mt-4 text-xl leading-snug">
        <Link href={href} className="transition-colors hover:text-title/60">
          {blog.title}
        </Link>
      </h3>
      <ArrowLink href={href} className="mt-5">
        Read More
      </ArrowLink>
    </article>
  );
}
