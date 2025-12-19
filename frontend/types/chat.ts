export type Role = "user" | "ai";

export type ConfidenceLevel = "LOW" | "MEDIUM" | "HIGH";

export type ChatMessage = {
  role: Role;
  content: string;
  confidence?: ConfidenceLevel;
};
