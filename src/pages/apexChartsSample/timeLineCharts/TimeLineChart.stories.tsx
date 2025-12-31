// components/Chart.stories.tsx
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Chart } from "./TimeLineChart";
import { addDays, format, getDate, getTime } from "date-fns";

const meta: Meta<typeof Chart> = {
  title: "apexChartsSample/TimeLineCharts",
  component: Chart,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Chart>;

export const Default: Story = {
  args: {
    title: "月日による範囲棒グラフ",
    categories: [
      format(new Date(), "yyyy年MM月dd日"),
      format(addDays(new Date(), 1), "yyyy年MM月dd日"),
      format(addDays(new Date(), 2), "yyyy年MM月dd日"),
    ],
    data: [
      {
        x: format(new Date(), "yyyy年MM月dd日"),
        y: [1358447400000, 1358620200000],
      },
      {
        x: format(addDays(new Date(), 1), "yyyy年MM月dd日"),
        y: [1358447400000, 1358620200000],
      },
      {
        x: format(addDays(new Date(), 2), "yyyy年MM月dd日"),
        y: [1358447400000, 1358620200000],
      },
    ],
    width: "600",
  },
};

export const LineChart: Story = {
  args: {
    title: "Line Chart Example",
    categories: ["TEAM A", "TEAM B", "TEAM C", "TEAM D"],
    data: [
      {
        x: "TEAM A",
        y: [1358447400000, 1358620200000],
      },
      {
        x: "TEAM B",
        y: [1358447400000, 1358620200000],
      },
    ],
    width: "600",
  },
};
