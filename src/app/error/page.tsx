import type { Metadata } from "next";
import ErrorContent from "@/components/sections/ErrorContent";

export const metadata: Metadata = { title: "Error" };

export default function ErrorPage() {
  return <ErrorContent />;
}
