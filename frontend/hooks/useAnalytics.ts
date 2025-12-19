"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/services/api";

type Overview = {
  revenue_today: number;
  orders_today: number;
  inventory_risk: string;
};

type Sales = {
  daily_revenue: Record<string, number>;
  total_revenue: number;
};

export function useAnalytics() {
  const [overview, setOverview] = useState<Overview | null>(null);
  const [sales, setSales] = useState<Sales | null>(null);

  useEffect(() => {
    apiFetch<Overview>("/analytics/overview?shop_id=1").then(setOverview);
    apiFetch<Sales>("/analytics/sales?shop_id=1").then(setSales);
  }, []);

  return { overview, sales };
}
