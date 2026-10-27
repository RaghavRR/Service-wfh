import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Search } from "lucide-react";
import { blogCategories, blogs, blogTags } from "@/data/blogs";

function Widget({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl bg-smoke p-8">
      <h3 className="mb-6 text-xl">{title}</h3>
      {children}
    </div>
  );
}

export default function BlogSidebar() {
  return (
    <aside className="space-y-8">
      <form action="/blog-2" className="relative">
        <label htmlFor="blog-search" className="sr-only">
          Search
        </label>
        <input
          id="blog-search"
          name="q"
          type="search"
          placeholder="Search..."
          className="w-full rounded-full bg-smoke py-5 pl-7 pr-16 outline-none focus:ring-2 focus:ring-title"
        />
        <button
          type="submit"
          aria-label="Search"
          className="absolute right-2 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-theme"
        >
          <Search className="size-5" />
        </button>
      </form>

      <Widget title="Categories">
        <ul className="space-y-1">
          {blogCategories.map((c) => (
            <li key={c.name}>
              <Link
                href="/blog-2"
                className="group flex items-center justify-between rounded-xl px-3 py-2 text-title/70 transition-colors hover:bg-white hover:text-title"
              >
                <span className="flex items-center gap-2">
                  <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
                  {c.name}
                </span>
                <span>({c.count})</span>
              </Link>
            </li>
          ))}
        </ul>
      </Widget>

      <Widget title="Recent Posts">
        <ul className="space-y-6">
          {blogs.slice(0, 3).map((b) => (
            <li key={b.id}>
              <Link href={`/blog-details/${b.id}`} className="group flex gap-4">
                <span className="relative size-20 shrink-0 overflow-hidden rounded-2xl">
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
                  <span className="text-sm text-title/50">{b.date}</span>
                  <span className="mt-1 line-clamp-2 block font-title text-[15px] leading-snug group-hover:text-title/60">
                    {b.title}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Widget>

      <Widget title="Tags">
        <div className="flex flex-wrap gap-2">
          {blogTags.map((t) => (
            <Link
              key={t}
              href="/blog-2"
              className="rounded-full bg-white px-4 py-2 text-sm transition-colors hover:bg-theme"
            >
              {t}
            </Link>
          ))}
        </div>
      </Widget>
    </aside>
  );
}
