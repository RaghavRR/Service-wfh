"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { RollLabel, btnClass } from "@/components/ui/Button";

const fieldClass =
  "h-[55px] w-full border-0 border-b-2 border-title bg-transparent text-lg text-title outline-none placeholder:text-title";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <p className="flex items-center gap-3 font-title text-xl font-semibold">
        <Check className="size-6" strokeWidth={3} /> Thanks! We&apos;ll get back to you soon.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid gap-5 md:grid-cols-2 md:gap-x-6"
    >
      <input name="name" required placeholder="Full name*" aria-label="Full name" className={fieldClass} />
      <input name="email" type="email" required placeholder="Email address*" aria-label="Email address" className={fieldClass} />
      <input name="website" type="url" placeholder="Website link" aria-label="Website link" className={`${fieldClass} md:col-span-2`} />
      <textarea
        name="message"
        required
        placeholder="How Can We Help You*"
        aria-label="How can we help you"
        className={`${fieldClass} h-auto min-h-[100px] resize-y pt-3 md:col-span-2`}
      />
      <div className="mt-5 md:col-span-2">
        <button type="submit" className={btnClass("dark")}>
          <RollLabel>Send Message</RollLabel>
        </button>
      </div>
    </form>
  );
}
