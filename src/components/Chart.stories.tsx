// components/Chart.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Chart } from './Chart';

const meta: Meta<typeof Chart> = {
  title: 'Components/Chart',
  component: Chart,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Chart>;

export const Default: Story = {
  args: {
    title: 'Monthly Sales',
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    data: [30, 50, 40, 60, 70],
    type: 'bar',
    width: '600',
  },
};

export const LineChart: Story = {
  args: {
    title: 'Line Chart Example',
    categories: ['Q1', 'Q2', 'Q3', 'Q4'],
    data: [80, 90, 70, 100],
    type: 'line',
    width: '600',
  },
};
