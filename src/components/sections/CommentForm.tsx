"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { RollLabel, btnClass } from "@/components/ui/Button";

const fieldClass =
  "h-[55px] w-full border-0 border-b-2 border-title bg-transparent text-lg text-title outline-none placeholder:text-title";

export default function CommentForm() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <h3 className="mb-2.5 text-[26px] font-semibold md:text-4xl">Leave a Reply</h3>
      <p className="mb-[35px] text-lg">
        Your email address will not be published. Required fields are marked *
      </p>
      {sent ? (
        <p className="flex items-center gap-3 font-title text-lg font-semibold">
          <Check className="size-5" strokeWidth={3} /> Thanks! Your comment is awaiting moderation.
        </p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="grid gap-5 md:grid-cols-2 md:gap-x-6"
        >
          <input name="name" required placeholder="Full name*" aria-label="Full name" className={fieldClass} />
          <input name="email" type="email" required placeholder="Email address*" aria-label="Email address" className={fieldClass} />
          <textarea
            name="comment"
            required
            placeholder="Write your comment *"
            aria-label="Comment"
            className={`${fieldClass} h-[180px] resize-y pt-3 md:col-span-2`}
          />
          <div className="mt-[25px] md:col-span-2">
            <button type="submit" className={btnClass("dark")}>
              <RollLabel>Post Comment</RollLabel>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
