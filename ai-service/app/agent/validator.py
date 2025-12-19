def validate_answer(answer: str, context: dict) -> str:
    """
    Ensures AI output is safe, useful, and grounded.
    """

    if not answer:
        raise ValueError("Empty AI response")

    if len(answer) < 20:
        raise ValueError("AI response too short to be meaningful")

    # Prevent hallucination when no data is present
    if not context and "revenue" in answer.lower():
        raise ValueError("Hallucinated analytics without data")

    banned_phrases = [
        "i assume",
        "might be",
        "possibly",
        "not sure"
    ]

    for phrase in banned_phrases:
        if phrase in answer.lower():
            raise ValueError("Uncertain or speculative language detected")

    return answer
