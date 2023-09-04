import React from "react";
import { Pie } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";

type Props = {
  chartData: ChartData<"pie">;
  chartOptions?: ChartOptions<"pie">;
};

const PieChart = ({ chartData, chartOptions }: Props) => {
  return (
    <div>
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};

export default PieChart;
