"use client";

import { useSearchParams } from "next/navigation";

export default function ContactSuccessBanner() {
  const searchParams = useSearchParams();
  const isSent = searchParams.get("sent") === "1";

  if (!isSent) {
    return null;
  }

  return (
    <div className="mb-6 rounded-2xl bg-white/10 p-4 text-sm text-white ring-1 ring-white/15">
      Thanks — we’ve received your request. We’ll review your photos and get
      back to you.
    </div>
  );
}
