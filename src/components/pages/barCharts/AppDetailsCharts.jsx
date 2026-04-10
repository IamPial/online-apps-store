import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AppDetailsCharts = ({ barChartData }) => {
  return (
    <div className="py-5">
      <h3 className="text-xl font-semibold mb-4">Ratings</h3>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart
          layout="vertical"
          data={barChartData}
          margin={{ top: 0, right: 30, bottom: 0, left: 0 }}
        >
          <CartesianGrid horizontal={false} />
          <XAxis type="number" />
          <YAxis type="category" dataKey="star" width={55} />
          <Tooltip />
          <Bar dataKey="count" fill="#f97316" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppDetailsCharts;
