def calculate_total_sales(data):
    return sum(day["revenue"] for day in data)

def calculate_growth_rate(data):
    if len(data) < 2:
        return 0

    first = data[0]["revenue"]
    last = data[-1]["revenue"]

    return round(((last - first) / first) * 100, 2)
