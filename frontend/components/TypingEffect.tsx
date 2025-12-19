"use client";

import { useEffect, useState } from "react";

interface Props {
  text: string;
}

export default function TypingEffect({ text }: Props) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 20);

    return () => clearInterval(interval);
  }, [text]);

  return <p>{displayed}</p>;
}
