interface Props {
  message: string;
}

export default function ErrorState({ message }: Props) {
  return (
    <div className="bg-red-900/30 border border-red-600 text-red-300 p-4 rounded-xl">
      ⚠️ {message}
    </div>
  );
}
