"use client";

import LoadingAnimate from "@/components/animate/Loading";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <main className="flex items-center justify-center w-screen h-screen">
      <LoadingAnimate />
    </main>
  );
}
