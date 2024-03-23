import { ClimateChart } from "@/components/climate-chart";
import { Title } from "@/components/title";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Title />
      <ClimateChart />
    </main>
  );
}
