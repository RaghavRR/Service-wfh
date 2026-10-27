"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { RollLabel, btnClass } from "@/components/ui/Button";

const fieldClass =
  "w-full rounded-2xl border border-line bg-smoke px-6 py-4 outline-none transition-colors placeholder:text-title/50 focus:border-title";

export default function CommentForm() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mt-16">
      <h3 className="text-2xl">Leave a Reply</h3>
      <p className="mt-2 text-title/60">
        Your email address will not be published. Required fields are marked *
      </p>
      {sent ? (
        <p className="mt-8 flex items-center gap-3 rounded-2xl bg-theme px-6 py-5 font-medium">
          <Check className="size-5" /> Thanks! Your comment is awaiting moderation.
        </p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="mt-8 grid gap-5 sm:grid-cols-2"
        >
          <textarea
            name="comment"
            required
            rows={5}
            placeholder="Write your comment*"
            aria-label="Comment"
            className={`${fieldClass} resize-none sm:col-span-2`}
          />
          <input name="name" required placeholder="Your Name*" aria-label="Your name" className={fieldClass} />
          <input name="email" type="email" required placeholder="Your Email*" aria-label="Your email" className={fieldClass} />
          <label className="flex items-center gap-3 text-sm text-title/60 sm:col-span-2">
            <input type="checkbox" className="size-4 accent-title" />
            Save my name and email in this browser for the next time I comment.
          </label>
          <button type="submit" className={btnClass("dark", "sm:justify-self-start")}>
            <RollLabel>Post Comment</RollLabel>
          </button>
        </form>
      )}
    </div>
  );
}
