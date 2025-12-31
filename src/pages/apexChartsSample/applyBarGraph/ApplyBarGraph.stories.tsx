// components/Chart.stories.tsx
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { BarGraph } from "./ApplyBarGraph";
import { addDays, format, getDate, getTime } from "date-fns";

const meta: Meta<typeof BarGraph> = {
  title: "apexChartsSample/ApplyBarGraph",
  component: BarGraph,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BarGraph>;

export const Default: Story = {
  args: {},
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
