"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/services/api";

type HistoryItem = {
  id: number;
  question: string;
  answer: string;
  confidence: number;
};

export function useHistory() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFetch<HistoryItem[]>("/history?shop_id=1")
      .then(setHistory)
      .finally(() => setLoading(false));
  }, []);

  return { history, loading };
}
