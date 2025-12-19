"use client";

import { useState } from "react";
import { apiFetch } from "@/services/api";

type Message = {
  role: "user" | "ai";
  text: string;
  confidence?: number;
  reasoning?: string;
};

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [shopId, setShopId] = useState<number | null>(null);

  const sendMessage = async (text: string) => {
    if (!shopId) return;

    setMessages((prev) => [...prev, { role: "user", text }]);
    setLoading(true);

    try {
      const res = await apiFetch<any>("/ask", {
        method: "POST",
        body: JSON.stringify({
          shop_id: shopId,
          question: text,
        }),
      });

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: res.answer,
          confidence: res.confidence,
          reasoning: res.reasoning,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return {
    messages,
    loading,
    sendMessage,
    setShopId,
  };
}
