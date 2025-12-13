// pages/index.tsx
import { Chart } from '../components/Chart';
import { sampleChartProps } from '@/components/sampleChartData';

const Home = () => {
  return (
    <div>
      <Chart {...sampleChartProps} />
    </div>
  );
};

export default Home;