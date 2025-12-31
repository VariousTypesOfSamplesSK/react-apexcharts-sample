// pages/index.tsx
import { Chart } from './apexChartsSample/Elementary/Chart';
import { sampleChartProps } from '@/pages/apexChartsSample/Elementary/sampleChartData';

const Home = () => {
  return (
    <div>
      <Chart {...sampleChartProps} />
    </div>
  );
};

export default Home;