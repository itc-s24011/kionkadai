// components/TemperatureCard.tsx
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { TemperatureData } from '@/types/temperature';
import FavoriteButton from './FavoriteButton';
import AlertSettings from './AlertSettings';
import styles from './TemperatureCard.module.css';

interface TemperatureCardProps {
  data: TemperatureData;
}

const getTemperatureColor = (temp: number): string => {
  if (temp >= 30) return styles.red;
  if (temp >= 20) return styles.orange;
  if (temp >= 10) return styles.green;
  if (temp >= 0) return styles.blue;
  return styles.purple;
};

const TemperatureCard: React.FC<TemperatureCardProps> = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // データを取得（nullチェック付き）
  const currentTemp = data.currentTemperature ?? 0;
  const high = data.high ?? 0;
  const low = data.low ?? 0;
  
  const tempColor = getTemperatureColor(currentTemp);

  return (
    <Link href={`/temperature/${data.id}`} className={styles.card}>
      <div className={styles.topBar}></div>
      
      {isMounted && <FavoriteButton cityId={data.id} />}
      
      <div className={styles.content}>
        <h3 className={styles.city}>{data.city}</h3>
        <p className={styles.country}>{data.country}</p>
        <div className={`${styles.temperature} ${tempColor}`}>
          {Math.round(currentTemp)}°
        </div>
        <p className={styles.range}>
          H: {Math.round(high)}° / L: {Math.round(low)}°
        </p>
      </div>

      {isMounted && (
        <div className={styles.alertContainer} onClick={(e) => e.preventDefault()}>
          <AlertSettings cityId={data.id} cityName={data.city} currentTemp={currentTemp} />
        </div>
      )}
    </Link>
  );
};

export default TemperatureCard;