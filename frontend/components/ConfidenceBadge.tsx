"use client";

export default function ConfidenceBadge({ value }: { value: number }) {
  const percent = Math.round(value * 100);

  const color =
    percent > 80
      ? "bg-green-600"
      : percent > 60
      ? "bg-yellow-600"
      : "bg-red-600";

  return (
    <span className={`px-2 py-1 text-xs rounded ${color}`}>
      Confidence {percent}%
    </span>
  );
}
