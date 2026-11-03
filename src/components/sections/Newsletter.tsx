"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { site } from "@/data/site";

// Footer newsletter signup, styled for the dark footer.
export default function Newsletter() {
  const [done, setDone] = useState(false);

  return (
    <div className="max-w-[440px]">
      <h3 className="mb-6 text-lg font-semibold leading-[1.5] text-white lg:text-xl">
        Get valuable strategy, culture and brand insights straight to your inbox
      </h3>
      {done ? (
        <p className="mb-5 flex h-14 items-center gap-3 border-b border-theme text-base text-white">
          <Check className="size-5 text-theme" strokeWidth={3} /> Thanks for subscribing!
        </p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
          className="relative mb-5"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="Your email here"
            className="h-14 w-full border-0 border-b border-white/40 bg-transparent pr-12 text-lg text-white outline-none transition-colors placeholder:text-white/40 focus:border-theme"
          />
          <button
            type="submit"
            aria-label="Subscribe"
            className="absolute right-0 top-1/2 grid size-10 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-theme text-title transition-transform duration-300 hover:rotate-45"
          >
            <ArrowUpRight className="size-5" strokeWidth={2.5} />
          </button>
        </form>
      )}
      <p className="text-sm leading-[1.75] text-white/55">
        By signing up to receive emails from {site.name}, you agree to our Privacy
        Policy. We treat your info responsibly.
      </p>
    </div>
  );
}
