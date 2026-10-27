"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { site } from "@/data/site";

export default function Newsletter() {
  const [done, setDone] = useState(false);

  return (
    <div>
      <h3 className="mb-8 text-xl font-semibold leading-[30px]">
        Get valuable strategy, culture and brand insights straight to your inbox
      </h3>
      {done ? (
        <p className="mb-[22px] flex h-[60px] items-center gap-3 border-b-2 border-title text-lg">
          <Check className="size-5" strokeWidth={3} /> Thanks for subscribing!
        </p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
          className="relative mb-[22px]"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="Your email here"
            className="h-[60px] w-full border-0 border-b-2 border-title bg-transparent pr-10 text-2xl tracking-[-0.48px] outline-none placeholder:text-title/50"
          />
          <button
            type="submit"
            aria-label="Subscribe"
            className="absolute right-0 top-0 grid h-[60px] place-items-center"
          >
            <ArrowUpRight className="size-5 transition-transform duration-300 hover:rotate-45" strokeWidth={2.5} />
          </button>
        </form>
      )}
      <p className="text-base leading-[1.75] xl:text-lg">
        By signing up to receive emails from {site.name}, you agree to our Privacy
        Policy. We treat your info responsibly.
      </p>
    </div>
  );
}
