import { addDays } from "date-fns";
export type SampleType = 10 | 20 | 30;

export function useApplyBarGraphData(days: SampleType) {
  // サンプルデータ生成関数
  const generateSampleData = () => {
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
        { name: "C", data: dataC },
        { name: "B", data: dataB },
        { name: "A", data: dataA },
      ],
    };
  };
  // 横軸の幅の取得
  const getTickAmount = () => {
    if (days >= 25) return 5;
    if (days >= 20) return 4;
    if (days >= 10) return 3;
    return 1;
  };

  return { generateSampleData, getTickAmount };
}
