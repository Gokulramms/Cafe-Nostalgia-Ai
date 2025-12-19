"use client";

export default function MessageBubble({
  role,
  text,
}: {
  role: "user" | "ai";
  text: string;
}) {
  const isUser = role === "user";

  return (
    <div
      className={`max-w-[80%] px-4 py-3 rounded-xl ${
        isUser
          ? "ml-auto bg-blue-600 text-white"
          : "mr-auto bg-neutral-800 text-neutral-100"
      }`}
    >
      {text}
    </div>
  );
}
