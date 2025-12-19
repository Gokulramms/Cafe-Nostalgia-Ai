from app.services.forecast import forecast_revenue


def enrich_context(plan: str, context: dict) -> dict:
    """
    Adds computed metrics BEFORE sending to Gemini.
    """

    enriched = context.copy()

    if plan == "FORECAST_ANALYSIS":
        revenue_series = context.get("daily_revenue", [])
        enriched["forecast_30_days"] = forecast_revenue(revenue_series)

    return enriched
