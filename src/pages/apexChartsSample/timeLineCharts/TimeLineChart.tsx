// components/Chart.tsx
import dynamic from "next/dynamic";
import React from "react";
import { ApexOptions } from "apexcharts";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

type Data = {
  x: string | number;
  y: number[];
};
type ChartProps = {
  title?: string;
  categories: string[] | number[];
  data: Data[];
  width?: string;
};

export const Chart = ({ title = "Sales Chart", categories, data, width = "600" }: ChartProps) => {
  const options: ApexOptions = {
    chart: {
      id: "dynamic-chart",
    },
    // 横軸についての設定
    xaxis: {
      categories,
    },
    // ツールチップをカスタマイズする。
    tooltip: {
      enabled: true,
      custom: ({ series, seriesIndex, dataPointIndex, w }) => {
        const value = series[seriesIndex][dataPointIndex];
        const label = w.globals.labels[dataPointIndex];

        return `
        <div class="custom-tooltip">
          <div class="label">${label}</div>
          <div class="value">${value}</div>
          <div class="value">${"こんな感じで自分の作りたいツールチップの作成も可能です"}</div>
        </div>
      `;
      },
    },
  };

  const series = [
    {
      name: "Sales",
      data,
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>{title}</h2>
      <ApexChart type="rangeBar" options={options} series={series} width={width} />
    </div>
  );
};
