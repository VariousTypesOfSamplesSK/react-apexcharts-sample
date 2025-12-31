// 必要パッケージ
// npm install apexcharts react-apexcharts date-fns

import React from "react";
import Chart from "react-apexcharts";
import { addDays, format } from "date-fns";

type SampleType = 10 | 20 | 30;

// サンプルデータ生成関数
const generateSampleData = (days: SampleType) => {
  const today = new Date();
  const dates = Array.from({ length: days }, (_, i) => addDays(today, i));

  const dataA: number[] = [];
  const dataB: number[] = [];
  const dataC: number[] = [];

  for (let i = 0; i < days; i++) {
    const maxTotal = 50;

    const a = Math.floor(Math.random() * (maxTotal + 1)); // 0〜50
    const b = Math.floor(Math.random() * (maxTotal - a + 1)); // 0〜(50-A)
    const c = Math.floor(Math.random() * (maxTotal - a - b + 1)); // 0〜(50-A-B)

    dataA.push(a);
    dataB.push(b);
    dataC.push(c);
  }

  return {
    dates,
    series: [
      { name: "A", data: dataA },
      { name: "B", data: dataB },
      { name: "C", data: dataC },
    ],
  };
};

// 横軸ラベル間隔設定
const getTickAmount = (days: number) => {
  if (days >= 25) return 5;
  if (days >= 20) return 4;
  if (days >= 10) return 3;
  return 1;
};

interface Props {
  days: SampleType;
}

const StackedBarChart: React.FC<Props> = ({ days }) => {
  const { dates, series } = generateSampleData(days);

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      stacked: true,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        dataLabels: {
          hideOverflowingLabels: true,
        },
      },
    },
    dataLabels: {
      enabled: false, // ← これで棒内の値を非表示
    },
    states: {
      hover: {
        filter: {
          type: "none", // ← hover時の強調を無効化
        },
      },
    },
    grid: {
      borderColor: "#000000", // 罫線を黒に
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
      xaxis: {
        lines: { show: true }, // 横軸の縦線を有効化
      },
    },
    // 横軸に関する設定が可能です
    yaxis: {
      // 縦軸の最大値
      max: 50,
      // 縦軸の最小値
      min: 0,
      // 幅
      tickAmount: 5,
      // タイトル
      // title: { text: "数値" },
    },
    // 横軸に関する設定です
    xaxis: {
      categories: dates.map((d) => format(d, "MM月dd日")),
      tickAmount: getTickAmount(days),
      labels: {
        rotate: 0, // ラベルを横向きに固定
        offsetX: 15,
        offsetY: 5,
        rotateAlways: true, // 多くても必ずrotateを適用
        hideOverlappingLabels: false, // ラベルが重なっても非表示にしない
        trim: false, // 長いラベルも切らずに表示
        style: { fontSize: "12px" },
      },
    },
    colors: ["#FF0000", "#FFA500", "#FFC0CB"], // A:赤、B:橙、C:ピンク
    legend: {
      position: "top",
    },
    // 注釈を指定できます。ここで特定のところにだけラベルを付けるとかも可能です。
    annotations: {
      xaxis: [
        {
          x: 0, // 一番左の縦線
          borderColor: "#000000",
          strokeDashArray: 0,
        },
      ],
    },
    // ツールチップのカスタマイズができます。
    tooltip: {
      shared: true,
      intersect: false,
      followCursor: true,
      custom: ({ series, seriesIndex, dataPointIndex, w }) => {
        // こんな感じでグラフ外のデータも利用できます。
        const date = dates[dataPointIndex];
        const A = series[0][dataPointIndex]; // 下からA
        const B = series[1][dataPointIndex]; // 真ん中B
        const C = series[2][dataPointIndex]; // 上C

        return `
        <div style="padding: 8px; font-size: 14px;">
          <div><strong>${format(date, "yyyy年MM月dd日")}</strong></div>
          <div style="color:#FFC0CB;">C: ${C}</div>
          <div style="color:#FFA500;">B: ${B}</div>
          <div style="color:#FF0000;">A: ${A}</div>
        </div>
      `;
      },
    },
  };

  // 積み上げ順を下からA→B→Cに
  const seriesStacked = [
    { name: "C", data: series[2].data },
    { name: "B", data: series[1].data },
    { name: "A", data: series[0].data },
  ];

  return <Chart options={options} series={seriesStacked} type="bar" height={400} />;
};

// 使用例
export const BarGraph = () => {
  return (
    <div>
      <h2>30日サンプル</h2>
      <StackedBarChart days={30} />

      <h2>20日サンプル</h2>
      <StackedBarChart days={20} />

      <h2>10日サンプル</h2>
      <StackedBarChart days={10} />
    </div>
  );
};
