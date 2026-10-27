import Image from "next/image";
import Link from "next/link";
import { Clock, Search } from "lucide-react";
import { blogCategories, blogs, blogTags } from "@/data/blogs";

const widgetTitle = "mb-[30px] text-2xl font-semibold tracking-[-0.48px]";

export default function BlogSidebar() {
  return (
    <aside className="space-y-[60px]">
      <form action="/blog-2" className="relative">
        <label htmlFor="blog-search" className="sr-only">
          Search
        </label>
        <input
          id="blog-search"
          name="q"
          type="search"
          placeholder="Search . . ."
          className="h-[60px] w-full border-0 border-b border-title bg-transparent pr-[60px] text-lg outline-none placeholder:text-title/50"
        />
        <button type="submit" aria-label="Search" className="absolute right-0 top-1/2 -translate-y-1/2">
          <Search className="size-5" strokeWidth={2.2} />
        </button>
      </form>

      <div>
        <h4 className={widgetTitle}>Categories</h4>
        <ul className="space-y-[17px]">
          {blogCategories.map((c) => (
            <li key={c.name}>
              <Link href="/blog-2" className="text-lg transition-colors hover:text-success">
                {c.name} ({c.count})
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className={widgetTitle}>Recent Posts</h4>
        <ul className="space-y-[30px]">
          {blogs.slice(0, 3).map((b) => (
            <li key={b.id}>
              <Link href={`/blog-details/${b.id}`} className="group flex items-center gap-5">
                <span className="relative aspect-square w-20 flex-none overflow-hidden">
                  <Image
                    src={b.image}
                    alt=""
                    fill
                    placeholder="blur"
                    sizes="80px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </span>
                <span>
                  <span className="mb-1.5 block font-title text-base font-semibold leading-snug">
                    {b.title}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm">
                    <Clock className="size-3.5" /> Sep 15, 2024
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className={widgetTitle}>Tags</h4>
        <ul className="flex flex-wrap gap-x-6 gap-y-[13px] overflow-hidden">
          {blogTags.map((t) => (
            <li
              key={t}
              className="relative after:absolute after:-right-3.5 after:top-1/2 after:h-4 after:w-0.5 after:-translate-y-1/2 after:bg-title last:after:hidden"
            >
              <Link href="/blog-2" className="text-lg hover:text-success">
                {t}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
