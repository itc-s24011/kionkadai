// app/page.tsx
import { getTemperatureList } from '@/lib/microcms';
import HomeClient from '@/components/HomeClient';

export const revalidate = 60;

export default async function HomePage() {
  const temperatureList = await getTemperatureList();

  return <HomeClient temperatureList={temperatureList} />;
}