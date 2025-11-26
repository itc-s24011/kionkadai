'use client';

import React from 'react';
import { TemperatureData } from '@/types/temperature';
import styles from './TemperatureRanking.module.css';

interface TemperatureRankingProps {
  data: TemperatureData[];
}

export default function TemperatureRanking({ data }: TemperatureRankingProps) {
  if (data.length === 0) {
    return null;
  }

  const sorted = [...data].sort((a, b) => b.currentTemperature - a.currentTemperature);
  const highest = sorted[0];
  const lowest = sorted[sorted.length - 1];
  const average = (sorted.reduce((sum, item) => sum + item.currentTemperature, 0) / sorted.length).toFixed(1);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.label}>🔥 最高気温</div>
        <div className={styles.city}>{highest.city}</div>
        <div className={styles.temp}>{Math.round(highest.currentTemperature)}°C</div>
        <div className={styles.country}>{highest.country}</div>
      </div>

      <div className={styles.card}>
        <div className={styles.label}>❄️ 最低気温</div>
        <div className={styles.city}>{lowest.city}</div>
        <div className={styles.temp}>{Math.round(lowest.currentTemperature)}°C</div>
        <div className={styles.country}>{lowest.country}</div>
      </div>

      <div className={styles.card}>
        <div className={styles.label}>📊 平均気温</div>
        <div className={styles.tempAverage}>{average}°C</div>
        <div className={styles.count}>({data.length}都市)</div>
      </div>
    </div>
  );
}
