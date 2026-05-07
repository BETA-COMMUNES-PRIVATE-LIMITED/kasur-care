// components/Analytics.jsx

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { day: "Mon", value: 140 },
    { day: "Tue", value: 100 },
    { day: "Wed", value: 180 },
    { day: "Thu", value: 130 },
    { day: "Fri", value: 100 },
    { day: "Sat", value: 130 },
];

const Analytics = () => {
    return (
        <div className="bg-white rounded-xl border border-gray-300 shadow-sm p-4">
            <div className="flex justify-between mb-4">
                <h2 className="text-lg font-semibold">Analytics</h2>

                <select className="border rounded-lg px-3 py-1 text-sm">
                    <option>Mar 14 - Mar 21</option>
                </select>
            </div>

            <div className="flex gap-4 mb-4 text-sm">
                <span className="text-blue-500 font-medium">
                    Heart Rate
                </span>
                <span className="text-gray-500">Blood Pressure</span>
            </div>

            <ResponsiveContainer width="100%" height={350} className='pt-5'>
                <BarChart data={data} barSize={45}
                    barCategoryGap="45%">
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" radius={[6, 6, 0, 0]} fill="#3b82f6" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Analytics;