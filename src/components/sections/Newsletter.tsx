"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { site } from "@/data/site";

export default function Newsletter() {
  const [done, setDone] = useState(false);

  return (
    <section className="bg-smoke">
      <div className="container-x grid gap-10 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <h3 className="text-[26px] leading-[1.3] sm:text-[34px]">
          Get valuable strategy, culture and brand insights straight to your
          inbox
        </h3>

        <div>
          {done ? (
            <p className="flex items-center gap-3 rounded-full bg-theme px-6 py-5 font-medium">
              <Check className="size-5" /> Thanks for subscribing!
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
              className="flex items-center gap-2 border-b-2 border-title pb-3"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Your email address"
                className="min-w-0 flex-1 bg-transparent py-3 text-lg outline-none placeholder:text-title/50"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid size-14 shrink-0 place-items-center rounded-full bg-title text-theme transition-transform duration-300 hover:rotate-45"
              >
                <ArrowUpRight className="size-6" />
              </button>
            </form>
          )}
          <p className="mt-4 text-sm text-title/60">
            By signing up to receive emails from {site.name}, you agree to our{" "}
            <Link href="/faq" className="underline hover:text-title">
              Privacy Policy
            </Link>
            . We treat your info responsibly.
          </p>
        </div>
      </div>
    </section>
  );
}
