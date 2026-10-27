"use client";

import { usePathname } from "next/navigation";

export default function FooterSwitch({
  home,
  inner,
}: {
  home: React.ReactNode;
  inner: React.ReactNode;
}) {
  return usePathname() === "/" ? home : inner;
}
