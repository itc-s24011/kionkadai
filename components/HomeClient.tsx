'use client';

import React, { useEffect, useState } from 'react';
import { TemperatureData } from '@/types/temperature';
import Header from './Header';
import ThemeToggle from './ThemeToggle';
import BackgroundRefresh from './BackgroundRefresh';
import TemperatureRanking from './TemperatureRanking';
import ClientSearchBar from './ClientSearchBar';
import styles from '../app/page.module.css';

interface HomeClientProps {
  temperatureList: TemperatureData[];
}

export default function HomeClient({ temperatureList }: HomeClientProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <>
        <Header />
        <main className={styles.container}>
          <div className={styles.hero}>
            <h1 className={styles.title}>🌡️ 世界の気温</h1>
            <p className={styles.subtitle}>リアルタイムで世界中の気温情報をチェック</p>
          </div>
          <ClientSearchBar temperatureList={temperatureList} />
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <ThemeToggle />
      <BackgroundRefresh />
      <main className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>🌡️ 世界の気温</h1>
          <p className={styles.subtitle}>リアルタイムで世界中の気温情報をチェック</p>
        </div>

        {temperatureList.length > 0 && (
          <>
            <TemperatureRanking data={temperatureList} />

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>{temperatureList.length}</span>
                <span className={styles.statLabel}>都市</span>
              </div>
            </div>
          </>
        )}

        <ClientSearchBar temperatureList={temperatureList} />

        {temperatureList.length === 0 && (
          <div className={styles.empty}>
            <p>気温情報がありません</p>
            <p>microCMSに気温データを追加してください</p>
          </div>
        )}
      </main>
    </>
  );
}
