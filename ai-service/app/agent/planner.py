def decide_plan(question: str, context: dict) -> str:
    """
    Very important file.
    This controls HOW the AI reasons.
    """

    q = question.lower()

    if "forecast" in q or "next" in q:
        return "FORECAST_ANALYSIS"

    if "trend" in q or "increase" in q or "decrease" in q:
        return "TREND_ANALYSIS"

    if "inventory" in q or "stock" in q:
        return "INVENTORY_RISK"

    if "why" in q or "reason" in q:
        return "EXPLANATION"

    return "GENERAL_ANALYTICS"
