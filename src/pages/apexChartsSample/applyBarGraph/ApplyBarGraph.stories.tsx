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
  args: { days: 10 },
};

export const Twenty: Story = {
  args: { days: 20 },
};

export const tirty: Story = {
  args: { days: 30 },
};
