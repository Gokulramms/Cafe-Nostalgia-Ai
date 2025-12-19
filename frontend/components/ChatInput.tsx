"use client";

import { useState } from "react";

export default function ChatInput({
  onSend,
  loading,
}: {
  onSend: (text: string) => void;
  loading: boolean;
}) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <div className="flex gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        placeholder="Ask about sales, trends, forecasts..."
        className="flex-1 px-4 py-3 rounded-lg bg-neutral-900 text-white outline-none"
        disabled={loading}
      />

      <button
        onClick={handleSend}
        disabled={loading}
        className="px-6 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Thinking..." : "Ask"}
      </button>
    </div>
  );
}
