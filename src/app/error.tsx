"use client";

import { useEffect } from "react";
import ErrorContent from "@/components/sections/ErrorContent";

export default function Error({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorContent
      code="500"
      title="Something Went Wrong"
      text="An unexpected error occurred while loading this page. Please try again."
      onRetry={retry}
    />
  );
}
