from typing import List


def forecast_revenue(daily_revenue: List[float], days: int = 30) -> float:
    """
    Simple moving-average forecast.
    Deterministic and explainable.
    """

    if not daily_revenue:
        return 0.0

    window = min(7, len(daily_revenue))
    avg = sum(daily_revenue[-window:]) / window

    return round(avg * days, 2)
