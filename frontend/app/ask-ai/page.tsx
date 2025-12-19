"use client";

import DashboardShell from "@/components/DashboardShell";
import ChatInput from "@/components/ChatInput";
import AnswerCard from "@/components/AnswerCard";
import { useChat } from "@/hooks/useChat";

export default function AskAIPage() {
  const { messages, loading, sendMessage } = useChat();

  return (
    <DashboardShell title="Ask AI">
      <div className="flex flex-col h-[75vh]">
        <div className="flex-1 overflow-y-auto space-y-4 mb-4">
          {messages.map((msg, i) => (
            <AnswerCard key={i} message={msg} />
          ))}
        </div>

        <ChatInput onSend={sendMessage} loading={loading} />
      </div>
    </DashboardShell>
  );
}
