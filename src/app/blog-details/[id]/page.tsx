import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Folder, Quote, Reply, User } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import BlogSidebar from "@/components/sections/BlogSidebar";
import CommentForm from "@/components/sections/CommentForm";
import Newsletter from "@/components/sections/Newsletter";
import SocialIcons from "@/components/ui/SocialIcons";
import { blogs, getBlog } from "@/data/blogs";
import { team } from "@/data/team";
import details1 from "../../../../public/images/blog-details-1.jpg";
import details2 from "../../../../public/images/blog-details-2.jpg";

export function generateStaticParams() {
  return blogs.map((b) => ({ id: String(b.id) }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog-details/[id]">): Promise<Metadata> {
  const { id } = await params;
  return { title: getBlog(Number(id))?.title ?? "Blog Details" };
}

const comments = [
  {
    name: "Parker Strong",
    avatar: team[4].image,
    text: "Great read! The point about keeping the checkout flow short really resonated with our team — we're testing it next sprint.",
    reply: false,
  },
  {
    name: "Farell Colins",
    avatar: team[5].image,
    text: "Thank you for the kind words and for trusting us. Let us know how the test goes!",
    reply: true,
  },
];

export default async function BlogDetailsPage({
  params,
}: PageProps<"/blog-details/[id]">) {
  const { id } = await params;
  const blog = getBlog(Number(id));
  if (!blog) notFound();

  const idx = blogs.indexOf(blog);
  const prev = blogs[(idx - 1 + blogs.length) % blogs.length];
  const next = blogs[(idx + 1) % blogs.length];

  return (
    <>
      <PageHeader
        title="Blog Details"
        crumbs={[{ label: "Blog", href: "/blog-2" }, { label: blog.title }]}
      />

      <section className="section-space">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <article className="min-w-0 lg:col-span-8">
            <div className="relative aspect-16/10 overflow-hidden rounded-[32px]">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                preload
                placeholder="blur"
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-title/60">
              <span className="flex items-center gap-2">
                <Calendar className="size-4" /> {blog.date}
              </span>
              <span className="flex items-center gap-2">
                <Folder className="size-4" /> {blog.category}
              </span>
              <span className="flex items-center gap-2">
                <User className="size-4" /> by {blog.author}
              </span>
            </div>

            <h2 className="mt-6 text-[28px] leading-tight sm:text-[40px]">
              {blog.title}
            </h2>

            <div className="prose-blog mt-6">
              <p>
                Great design is more than good looks — it is a set of decisions
                that make it easier for people to find what they need and act on
                it. In this article we share the lessons we have learned from
                dozens of e-commerce launches.
              </p>
              <p>
                Start with clarity. Every page should answer three questions in
                seconds: what is this, why should I care, and what do I do next?
                When those answers are obvious, conversion follows.
              </p>
            </div>

            <div className="relative my-10 aspect-16/9 overflow-hidden rounded-3xl">
              <Image
                src={details1}
                alt=""
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover"
              />
            </div>

            <blockquote className="my-10 rounded-3xl bg-title p-8 text-white sm:p-12">
              <Quote className="size-12 fill-theme text-theme" />
              <p className="mt-6 font-title text-xl leading-relaxed sm:text-2xl">
                It&apos;s a pleasure working with this team. They understood our
                brand guidelines and applied them consistently in all our
                marketing communications.
              </p>
              <cite className="mt-6 block not-italic text-theme">
                — Daniyel Karlos
              </cite>
            </blockquote>

            <div className="prose-blog">
              <h3>Keep pushing the boundaries</h3>
              <p>
                Speed, accessibility and trust signals matter as much as the
                visuals. Optimise images, keep the checkout short and show real
                reviews. Small details add up to big results.
              </p>
            </div>

            <div className="relative my-10 aspect-16/9 overflow-hidden rounded-3xl">
              <Image
                src={details2}
                alt=""
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-between gap-6 border-y border-line py-8 sm:flex-row sm:items-center">
              <div className="flex flex-wrap items-center gap-2">
                <span className="mr-2 font-title">Tags:</span>
                {["Marketing", "Brand", "Contemporary"].map((t) => (
                  <Link
                    key={t}
                    href="/blog-2"
                    className="rounded-full bg-smoke px-4 py-1.5 text-sm hover:bg-theme"
                  >
                    {t}
                  </Link>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <span className="font-title">Share:</span>
                <SocialIcons itemClass="border-line text-title hover:bg-theme hover:border-theme" />
              </div>
            </div>

            <nav className="mt-8 flex justify-between gap-6">
              <Link href={`/blog-details/${prev.id}`} className="group flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-full border border-line group-hover:bg-theme">
                  <ArrowLeft className="size-5" />
                </span>
                Previous Post
              </Link>
              <Link href={`/blog-details/${next.id}`} className="group flex items-center gap-3">
                Next Post
                <span className="grid size-12 place-items-center rounded-full border border-line group-hover:bg-theme">
                  <ArrowRight className="size-5" />
                </span>
              </Link>
            </nav>

            {/* Author */}
            <div className="mt-12 flex flex-col gap-6 rounded-3xl bg-smoke p-8 sm:flex-row">
              <span className="relative size-24 shrink-0 overflow-hidden rounded-full">
                <Image src={team[2].image} alt={blog.author} fill sizes="96px" className="object-cover" />
              </span>
              <div>
                <h3 className="text-xl">{blog.author}</h3>
                <p className="mt-3 text-title/60">
                  Ashton is a design lead who writes about e-commerce, branding
                  and the craft of building products people love to use.
                </p>
              </div>
            </div>

            {/* Comments */}
            <div className="mt-16">
              <h3 className="text-2xl">02 Comments</h3>
              <ul className="mt-8 space-y-8">
                {comments.map((c) => (
                  <li
                    key={c.name}
                    className={`flex gap-5 border-b border-line pb-8 ${c.reply ? "sm:ml-16" : ""}`}
                  >
                    <span className="relative size-16 shrink-0 overflow-hidden rounded-full">
                      <Image src={c.avatar} alt={c.name} fill sizes="64px" className="object-cover" />
                    </span>
                    <div>
                      <span className="text-sm text-title/50">{blog.date}</span>
                      <h4 className="mt-1 text-lg">{c.name}</h4>
                      <p className="mt-2 text-title/70">{c.text}</p>
                      <button
                        type="button"
                        className="mt-3 inline-flex items-center gap-2 font-title text-xs uppercase hover:text-title/60"
                      >
                        <Reply className="size-4" /> Reply
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <CommentForm />
          </article>

          <div className="lg:col-span-4">
            <BlogSidebar />
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
