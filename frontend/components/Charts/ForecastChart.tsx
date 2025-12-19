"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const forecast = [
  { week: "Next W1", value: 780 },
  { week: "Next W2", value: 850 },
  { week: "Next W3", value: 920 },
  { week: "Next W4", value: 1000 },
];

export default function ForecastChart() {
  return (
    <div className="bg-gray-900 p-4 rounded-xl">
      <h2 className="text-lg font-semibold mb-3">🔮 Sales Forecast</h2>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={forecast}>
          <XAxis dataKey="week" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip />
          <Bar dataKey="value" fill="#22c55e" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
