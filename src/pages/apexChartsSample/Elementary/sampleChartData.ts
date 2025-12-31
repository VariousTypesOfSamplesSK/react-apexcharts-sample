// components/sampleChartData.ts

export const sampleChartProps = {
  title: 'Monthly Sales',
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  data: [30, 50, 40, 60, 70],
  type: 'bar' as const,
  width: '600',
};
