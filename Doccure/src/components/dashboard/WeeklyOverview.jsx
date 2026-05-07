import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { CartesianGrid } from "recharts";

const data = [
  { day: "M", value: 50 },
  { day: "T", value: 40 },
  { day: "W", value: 20 },
  { day: "T", value: 45 },
  { day: "F", value: 35 },
  { day: "S", value: 48 },
  { day: "S", value: 65 },
];

// 🎨 colors for each bar
const colors = [
  "#3b82f6", // blue
  "#10b981", // green
  "#f59e0b", // orange
  "#ef4444", // red
  "#8b5cf6", // purple
  "#06b6d4", // cyan
  "#f97316", // orange-dark
];

const WeeklyOverview = () => {
  return (
    <div className="bg-white p-4 rounded-2xl  border border-gray-300 shadow-md w-full max-w-md">
      <h2 className="font-semibold mb-3">Weekly Overview</h2>

      <div className="w-full h-60">
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="day" />
            <Tooltip />

            <Bar dataKey="value" barSize={35} radius={[6, 6, 0, 0]}>
                 <CartesianGrid stroke="#e5e7eb" vertical={false} />
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeeklyOverview;