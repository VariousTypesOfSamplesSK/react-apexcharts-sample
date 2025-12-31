import React from "react";
import Chart from "react-apexcharts";
import { format } from "date-fns";
import { SampleType, useApplyBarGraphData } from "./useApplyBarGraphData";

export const BarGraph = ({ days }: { days: SampleType }) => {
  const { generateSampleData, getTickAmount } = useApplyBarGraphData(days);

  const { dates, series } = generateSampleData();

  // グラフのオプションを設定できます。
  const options: ApexCharts.ApexOptions = {
    // グラフのタイプを決められます。今回は積み上げ縦棒グラフのためtypeはbar、stackedはtrueにしています。
    chart: {
      type: "bar",
      stacked: true,
    },
    // 棒に対するオプションになります。今回は上下反転はなし、幅は50%になります。
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
      },
    },
    //棒の中に数値を表示するか否かの設定ができます。今回は非表示です。
    dataLabels: {
      enabled: false,
    },
    // マウスオーバーしたときの挙動を設定します。
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    // 罫線についての設定です。
    grid: {
      // 罫線の色
      borderColor: "#000000", // 罫線を黒に
      // 横軸の罫線の表示
      xaxis: {
        lines: { show: true },
      },
    },
    // 横軸に関する設定が可能です
    yaxis: {
      // 縦軸の最大値
      max: 50,
      // 縦軸の最小値
      min: 0,
      // 間隔
      tickAmount: 5,
    },
    // 横軸に関する設定です
    xaxis: {
      //横軸の配列
      categories: dates.map((d) => format(d, "MM月dd日")),
      //間隔
      tickAmount: getTickAmount(),
      //ラベルのカスタマイズ
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
    // 棒の色を指定A:赤、B:橙、C:ピンク
    colors: ["#FF0000", "#FFA500", "#FFC0CB"],
    // 凡例の設定
    legend: {
      position: "left",
      horizontalAlign: "center",
      fontSize: "14px",
    },
    // 注釈を指定できます。特定のところにラベルを付けるとかも可能です。
    annotations: {
      yaxis: [
        {
          y: 45,
          borderColor: "#ff0000ff",
          strokeDashArray: 0,
          label: {
            text: "キケン！",
            borderColor: "transparent",
            style: {
              color: "#ff0000ff",
              background: "transparent",
            },
          },
        },
      ],
    },
    // ツールチップのカスタマイズができます。
    tooltip: {
      shared: true,
      intersect: false,
      followCursor: true,
      custom: ({ series, dataPointIndex }) => {
        // こんな感じでグラフ外のデータも利用できます。
        const date = dates[dataPointIndex];
        const A = series[0][dataPointIndex]; // 下からA
        const B = series[1][dataPointIndex]; // 真ん中B
        const C = series[2][dataPointIndex]; // 上C

        return `
        <div style="padding: 8px; font-size: 14px;">
          <div><strong>${format(date, "yyyy年MM月dd日")}</strong></div>
          <div style="color:#FFC0CB;">C: ${C + B + A}</div>
          <div style="color:#FFA500;">B: ${B + A}</div>
          <div style="color:#FF0000;">A: ${A}</div>
        </div>
      `;
      },
    },
  };

  return <Chart options={options} series={series} type="bar" height={400} />;
};
