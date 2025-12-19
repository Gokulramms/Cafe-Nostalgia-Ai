interface Props {
  onSelect: (prompt: string) => void;
}

const suggestions = [
  "Show total sales for last 7 days",
  "Which product is selling the most?",
  "Predict next week's revenue",
  "Any inventory risk?",
];

export default function PromptSuggestions({ onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {suggestions.map((s, i) => (
        <button
          key={i}
          onClick={() => onSelect(s)}
          className="text-sm bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-full text-gray-300"
        >
          {s}
        </button>
      ))}
    </div>
  );
}
