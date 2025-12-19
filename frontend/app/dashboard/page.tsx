"use client";

import DashboardShell from "@/components/DashboardShell";
import SalesChart from "@/components/Charts/SalesChart";
import { useAnalytics } from "@/hooks/useAnalytics";

export default function DashboardPage() {
  const { overview, sales, loading, error } = useAnalytics();

  const revenueToday = overview?.revenue_today ?? 0;
  const ordersToday = overview?.orders_today ?? 0;
  const inventoryRisk = overview?.inventory_risk ?? "LOW";

  return (
    <DashboardShell title="Dashboard">
      {loading && (
        <p className="text-neutral-400 mb-6">Loading analytics…</p>
      )}

      {error && (
        <div className="mb-6 p-4 rounded bg-red-900/30 text-red-400 text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="p-4 bg-neutral-900 rounded-lg">
          <p className="text-sm text-neutral-400">Revenue Today</p>
          <p className="text-2xl font-bold">₹{revenueToday}</p>
        </div>

        <div className="p-4 bg-neutral-900 rounded-lg">
          <p className="text-sm text-neutral-400">Orders Today</p>
          <p className="text-2xl font-bold">{ordersToday}</p>
        </div>

        <div className="p-4 bg-neutral-900 rounded-lg">
          <p className="text-sm text-neutral-400">Inventory Risk</p>
          <p className="text-2xl font-bold">{inventoryRisk}</p>
        </div>
      </div>

      <div className="p-6 bg-neutral-900 rounded-lg min-h-[280px]">
        {sales?.daily_revenue?.length ? (
          <SalesChart data={sales.daily_revenue} />
        ) : (
          <div className="h-full flex items-center justify-center text-neutral-500 text-sm">
            No sales data yet
          </div>
        )}
      </div>
    </DashboardShell>
  );
}
