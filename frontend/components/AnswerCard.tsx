"use client";

import { useState } from "react";
import MessageBubble from "./MessageBubble";
import ConfidenceBadge from "./ConfidenceBadge";

export default function AnswerCard({
  message,
}: {
  message: {
    role: "user" | "ai";
    text: string;
    confidence?: number;
    reasoning?: string;
  };
}) {
  const [showWhy, setShowWhy] = useState(false);

  return (
    <div className="space-y-2">
      <MessageBubble role={message.role} text={message.text} />

      {message.role === "ai" && message.confidence !== undefined && (
        <div className="flex items-center gap-3 text-xs text-neutral-400">
          <ConfidenceBadge value={message.confidence} />

          {message.reasoning && (
            <button
              onClick={() => setShowWhy(!showWhy)}
              className="underline"
            >
              Why?
            </button>
          )}
        </div>
      )}

      {showWhy && message.reasoning && (
        <div className="text-xs text-neutral-300 bg-neutral-900 p-3 rounded">
          {message.reasoning}
        </div>
      )}
    </div>
  );
}
