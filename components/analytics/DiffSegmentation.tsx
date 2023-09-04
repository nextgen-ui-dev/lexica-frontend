/* eslint-disable prettier/prettier */
import React from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";
import PieChart from "./PieChart";

Chart.register(CategoryScale);

const CategoryData = [
  {
    id: 1,
    category: "Umum",
    count: 5,
  },
  {
    id: 2,
    category: "Keuangan",
    count: 2,
  },
  {
    id: 3,
    category: "Olahraga",
    count: 7,
  },
  {
    id: 4,
    category: "Seni",
    count: 3,
  },
  {
    id: 5,
    category: "Politik",
    count: 4,
  },
];

const DiffData = [
  {
    id: 1,
    diff: "Hard",
    count: 10,
  },
  {
    id: 2,
    diff: "Medium",
    count: 12,
  },
  {
    id: 3,
    diff: "Easy",
    count: 20,
  },
];

const Data = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234,
  },
];

const DiffSegmentation = () => {
  // TODO https://www.chartjs.org/docs/latest/configuration/canvas-background.html

  // Dummy data
  const [chartData, setChartData] = React.useState<ChartData<"pie">>({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users gained",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "#c2ceff",
          "#9cacff",
          "#7580ff",
          "#5152ff",
          "#4436f5",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const [chartDataCategory, setChartDataCategory] = React.useState<
    ChartData<"pie">
  >({
    labels: CategoryData.map((data) => data.category),
    datasets: [
      {
        label: "Category Reads",
        data: CategoryData.map((data) => data.count),
        backgroundColor: [
          "#c2ceff",
          "#9cacff",
          "#7580ff",
          "#5152ff",
          "#4436f5",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const [chartDataDiff, setChartDataDiff] = React.useState<ChartData<"pie">>({
    labels: DiffData.map((data) => data.diff),
    datasets: [
      {
        label: "Diff Reads",
        data: DiffData.map((data) => data.count),
        backgroundColor: [
          "#c2ceff",
          "#9cacff",
          "#7580ff",
          "#5152ff",
          "#4436f5",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const [chartOptions, setChartOptions] = React.useState<ChartOptions<"pie">>({
    plugins: {
      title: {
        display: true,
        text: "Users Gained between 2016-2020",
      },
    },
    responsive: true,
    maintainAspectRatio: true,
  });

  const [chartOptionsCategory, setChartOptionsCategory] = React.useState<
    ChartOptions<"pie">
  >({
    plugins: {
      title: {
        display: true,
        text: "Reads based on category",
      },
    },
    responsive: true,
    maintainAspectRatio: true,
  });

  const [chartOptionsDiff, setChartOptionsDiff] = React.useState<
    ChartOptions<"pie">
  >({
    plugins: {
      title: {
        display: true,
        text: "Reads based on Diff",
      },
    },
    responsive: true,
    maintainAspectRatio: true,
  });

  return (
    <div
      className={`
      relative w-[400px]
      flex flex-col justify-center
    `}
    >
      <PieChart
        chartData={chartDataCategory}
        chartOptions={chartOptionsCategory}
      />

      <div className="py-2 md:py-4"></div>

      <PieChart chartData={chartDataDiff} chartOptions={chartOptionsDiff} />
    </div>
  );
};

export default DiffSegmentation;
