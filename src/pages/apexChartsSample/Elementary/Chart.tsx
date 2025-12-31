// components/Chart.tsx
import dynamic from 'next/dynamic';
import React from 'react';
import { ApexOptions } from 'apexcharts';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

type ChartProps = {
  title?: string;
  categories: string[];
  data: number[];
  type?: 'bar' | 'line' | 'area';
  width?: string;
};

export const Chart = ({
  title = 'Sales Chart',
  categories,
  data,
  type = 'bar',
  width = '600',
}: ChartProps) => {
  const options: ApexOptions = {
    chart: {
      id: 'dynamic-chart',
    },
    xaxis: {
      categories,
    },
  };

  const series = [
    {
      name: 'Sales',
      data,
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>{title}</h2>
      <ApexChart options={options} series={series} type={type} width={width} />
    </div>
  );
};
