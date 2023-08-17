/* eslint-disable prettier/prettier */
import React from 'react';
import Chart from "chart.js/auto";
import { CategoryScale } from 'chart.js';
import type { ChartData, ChartOptions } from 'chart.js';
import PieChart from './PieChart';

Chart.register(CategoryScale);

const Data = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234
  }
];


const DiffSegmentation = () => {
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
          "#4436f5"
        ],
        borderColor: "black",
        borderWidth: 2
      }
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

  return (
    <div className={`
      relative h-[400px] w-[400px]
      flex flex-row justify-center
    `}>
      <PieChart
        chartData={chartData} 
        chartOptions={chartOptions} 
      />
    </div>
  );
}

export default DiffSegmentation