"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { RollLabel, btnClass } from "@/components/ui/Button";

const fieldClass =
  "w-full rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-white outline-none transition-colors placeholder:text-white/40 focus:border-theme";

/** Frontend-only form: no backend, it just shows a success message */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl bg-white/5 p-12 text-center">
        <span className="grid size-16 place-items-center rounded-full bg-theme text-title">
          <Check className="size-8" />
        </span>
        <h3 className="text-2xl text-white">Message sent!</h3>
        <p className="text-white/60">We will get back to you within one business day.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid gap-5 sm:grid-cols-2"
    >
      <input name="name" required placeholder="Your Name*" aria-label="Your name" className={fieldClass} />
      <input name="email" type="email" required placeholder="Email Address*" aria-label="Email address" className={fieldClass} />
      <input name="phone" type="tel" placeholder="Phone Number" aria-label="Phone number" className={fieldClass} />
      <select name="service" defaultValue="" aria-label="Service" className={`${fieldClass} [&>option]:text-title`}>
        <option value="" disabled>
          Select a Service
        </option>
        <option>Branding Design</option>
        <option>Web Development</option>
        <option>Digital Marketing</option>
        <option>Content Marketing</option>
      </select>
      <textarea
        name="message"
        required
        rows={5}
        placeholder="Tell us about your project*"
        aria-label="Message"
        className={`${fieldClass} resize-none sm:col-span-2`}
      />
      <button type="submit" className={btnClass("theme", "sm:col-span-2 sm:justify-self-start")}>
        <RollLabel>Send Message</RollLabel>
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
      </button>
    </form>
  );
}
