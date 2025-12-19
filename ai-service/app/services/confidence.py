def score_confidence(context: dict, answer: str) -> float:
    """
    Confidence is NOT random.
    It is based on data completeness.
    """

    score = 0.3

    if context.get("orders"):
        score += 0.3

    if context.get("revenue"):
        score += 0.2

    if len(answer) > 100:
        score += 0.2

    return round(min(score, 0.95), 2)
