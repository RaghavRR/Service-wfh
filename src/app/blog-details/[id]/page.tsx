import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/sections/Breadcrumb";
import BlogSidebar from "@/components/sections/BlogSidebar";
import CommentForm from "@/components/sections/CommentForm";
import { ArrowLink } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SocialIcons from "@/components/ui/SocialIcons";
import { blogs, getBlog } from "@/data/blogs";
import { team } from "@/data/team";
import details1 from "../../../../public/images/blog-details-1.jpg";
import details2 from "../../../../public/images/blog-details-2.jpg";
import QuoteIcon from "@/components/ui/QuoteIcon";

export const dynamicParams = false;

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
    text: "Great read! The point about keeping the checkout flow short really resonated with our team, and we are testing it next sprint.",
    reply: false,
  },
  {
    name: "Farell Colins",
    avatar: team[5].image,
    text: "Thank you for the kind words and for trusting us. Let us know how the test goes!",
    reply: true,
  },
];

const para = "mb-5 text-lg";


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
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog-2" },
          { label: blog.title },
        ]}
      />

      <section className="section-space overflow-hidden">
        <div className="container-x flex flex-col gap-y-20 lg:flex-row">
          <article className="min-w-0 lg:w-[67.5%] lg:pr-3 xl:w-[70.5%]">
            <Reveal from="top" className="relative mb-11 aspect-[856/500] min-h-[250px] overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                preload
                placeholder="blur"
                sizes="(min-width: 992px) 70vw, 100vw"
                className="object-cover"
              />
            </Reveal>

            <ul className="mb-[15px] flex flex-wrap items-center gap-x-7 gap-y-[15px] text-lg">
              {[blog.date, blog.category, `by ${blog.author}`].map((m, i) => (
                <li
                  key={m}
                  className={i > 0 ? "relative before:absolute before:-left-[15px] before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full before:bg-title" : ""}
                >
                  {m}
                </li>
              ))}
            </ul>

            <h2 className="mb-10 text-[28px] font-semibold capitalize leading-[1.208] md:text-[32px] xl:text-5xl">
              {blog.title}
            </h2>

            <p className={para}>
              Great design is more than good looks: it is a set of decisions
              that make it easier for people to find what they need and act on
              it. In this article we share the lessons we have learned from
              dozens of e-commerce launches.
            </p>
            <p className={para}>
              Start with clarity. Every page should answer three questions in
              seconds: what is this, why should I care, and what do I do next?
              When those answers are obvious, conversion follows.
            </p>

            <blockquote className="my-10 sm:flex sm:items-start sm:gap-6">
              <QuoteIcon className="mb-5 sm:mb-0" />
              <p className="text-lg capitalize leading-[1.583] tracking-[-0.48px] md:text-2xl">
                &ldquo;It&rsquo;s a pleasure working with this team. They
                understood our brand positioning guidelines and translated them
                beautifully and consistently into our ongoing marketing
                comms&rdquo;
              </p>
            </blockquote>

            <p className={para}>
              Speed, accessibility and trust signals matter as much as the
              visuals. Optimise images, keep the checkout short and show real
              reviews. Small details add up to big results.
            </p>

            <div className="my-10 grid gap-[30px] sm:grid-cols-2 sm:gap-6">
              {[details1, details2].map((img, i) => (
                <div key={i} className="relative aspect-[416/300] overflow-hidden">
                  <Image
                    src={img}
                    alt=""
                    fill
                    placeholder="blur"
                    sizes="(min-width: 992px) 35vw, (min-width: 576px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <p className={para}>
              Test with real users before you launch. A single afternoon of
              watching people shop on your site will reveal more than weeks of
              guessing in a meeting room.
            </p>
            <p className={para}>
              Always ready to push the boundaries, we keep experimenting with
              new ideas so every store we build is faster, clearer and more
              enjoyable to use.
            </p>

            <div className="mt-[35px] flex flex-col gap-5 border-b-2 border-title pb-11 md:flex-row md:items-center md:justify-between">
              <ul className="flex flex-wrap gap-x-6 gap-y-[13px]">
                {["Marketing", "Brand", "Contemporary"].map((t) => (
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
              <div className="flex items-center gap-2.5">
                <span className="mr-2.5 text-lg">Share:</span>
                <SocialIcons plain only={["facebook", "instagram", "twitter"]} />
              </div>
            </div>

            <div className="mt-5 flex justify-between">
              <Link
                href={`/blog-details/${prev.id}`}
                className="group flex items-center gap-2.5 font-title text-sm font-semibold uppercase"
              >
                <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" strokeWidth={2.5} />
                Previous Post
              </Link>
              <Link
                href={`/blog-details/${next.id}`}
                className="group flex items-center gap-2.5 font-title text-sm font-semibold uppercase"
              >
                Next Post
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
              </Link>
            </div>

            <div className="my-20 md:flex md:items-center md:gap-[35px] lg:my-[100px]">
              <div className="relative mb-[30px] aspect-[205/190] w-[205px] flex-none overflow-hidden md:mb-0">
                <Image src={team[2].image} alt={blog.author} fill sizes="205px" className="object-cover" />
              </div>
              <div>
                <h4 className="mb-4 text-2xl font-semibold">{blog.author}</h4>
                <p className="text-lg leading-[1.66]">
                  Ashton is a design lead who writes about e-commerce, branding
                  and the craft of building products people love to use.
                </p>
              </div>
            </div>

            <h3 className="mb-[35px] text-[26px] font-semibold md:text-4xl">02 Comments</h3>
            <ul className="mb-[50px]">
              {comments.map((c) => (
                <li
                  key={c.name}
                  className={`flex flex-wrap items-start gap-5 pb-12 md:flex-nowrap md:gap-[25px] ${c.reply ? "md:ml-[135px]" : ""}`}
                >
                  <div className="relative aspect-[115/105] w-[115px] flex-none overflow-hidden">
                    <Image src={c.avatar} alt={c.name} fill sizes="115px" className="object-cover" />
                  </div>
                  <div>
                    <span className="mb-1.5 block text-lg">{blog.date}</span>
                    <h6 className="mb-[15px] text-xl font-semibold">{c.name}</h6>
                    <p className="mb-5 text-lg">{c.text}</p>
                    <ArrowLink href="#comment-form">Reply</ArrowLink>
                  </div>
                </li>
              ))}
            </ul>

            <div id="comment-form" className="scroll-mt-28">
              <CommentForm />
            </div>
          </article>

          <div className="lg:w-[32.5%] lg:pl-3 xl:w-[29.5%]">
            <BlogSidebar />
          </div>
        </div>
      </section>
    </>
  );
}
