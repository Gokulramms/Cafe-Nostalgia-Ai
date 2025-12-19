"use client";

export default function LoadingState({ label }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-10 text-neutral-400">
      {label || "Loading..."}
    </div>
  );
}
