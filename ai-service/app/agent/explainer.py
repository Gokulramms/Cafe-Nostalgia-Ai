def explain_result(plan: str, context: dict) -> str:
    if not context:
        return "No business data was provided, so insights are limited."

    if plan == "FORECAST_ANALYSIS":
        return "Forecast is generated using historical order volume and revenue patterns."

    if plan == "TREND_ANALYSIS":
        return "Trends are identified by comparing recent performance against historical averages."

    if plan == "INVENTORY_RISK":
        return "Inventory risk is detected by analyzing stock levels versus sales velocity."

    return "Insights are derived from the provided business metrics."
