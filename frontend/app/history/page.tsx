"use client";

import { useEffect, useState } from "react";
import DashboardShell from "@/components/DashboardShell";
import { apiFetch } from "@/services/api";

type HistoryItem = {
  id: number;
  question: string;
  answer: string;
  created_at: string;
};

export default function HistoryPage() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const data = await apiFetch<HistoryItem[]>("/history");
        setHistory(data);
      } catch (err: any) {
        // ✅ EMPTY / FIRST TIME USER
        if (err.message === "EMPTY_STATE") {
          setHistory([]);
        }
      } finally {
        setLoading(false);
      }
    };

    loadHistory();
  }, []);

  return (
    <DashboardShell title="Chat History">
      {loading && <p className="text-neutral-400">Loading history...</p>}

      {!loading && history.length === 0 && (
        <p className="text-neutral-500">
          No chat history yet. Ask the AI something first.
        </p>
      )}

      <div className="space-y-4">
        {history.map((item) => (
          <div
            key={item.id}
            className="p-4 bg-neutral-900 rounded-lg"
          >
            <p className="text-sm text-neutral-400">
              {new Date(item.created_at).toLocaleString()}
            </p>
            <p className="font-semibold mt-2">Q: {item.question}</p>
            <p className="text-neutral-300 mt-1">A: {item.answer}</p>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
