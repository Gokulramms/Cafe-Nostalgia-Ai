from datetime import datetime, timedelta


def last_n_days(n: int):
    end = datetime.utcnow()
    start = end - timedelta(days=n)
    return start.isoformat(), end.isoformat()
