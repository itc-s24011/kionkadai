'use client';

import React, { useState, useMemo } from 'react';
import { TemperatureData } from '@/types/temperature';
import SearchBar from './SearchBar';
import TemperatureCard from './TemperatureCard';
import styles from './ClientSearchBar.module.css';

interface ClientSearchBarProps {
  temperatureList: TemperatureData[];
}

export default function ClientSearchBar({ temperatureList }: ClientSearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [tempMin, setTempMin] = useState<number | undefined>();
  const [tempMax, setTempMax] = useState<number | undefined>();

  const filteredList = useMemo(() => {
    return temperatureList.filter((item) => {
      const matchesSearch =
        !searchQuery ||
        item.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.country.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTempMin = tempMin === undefined || item.currentTemperature >= tempMin;
      const matchesTempMax = tempMax === undefined || item.currentTemperature <= tempMax;

      return matchesSearch && matchesTempMin && matchesTempMax;
    });
  }, [temperatureList, searchQuery, tempMin, tempMax]);

  const handleSearch = (query: string, min?: number, max?: number) => {
    setSearchQuery(query);
    setTempMin(min);
    setTempMax(max);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {filteredList.length !== temperatureList.length && (
        <div className={styles.resultInfo}>
          検索結果: {filteredList.length} / {temperatureList.length} 都市
        </div>
      )}
      <div className={styles.grid}>
        {filteredList.length > 0 ? (
          filteredList.map((temperature) => (
            <TemperatureCard key={temperature.id} data={temperature} />
          ))
        ) : (
          <div className={styles.noResults}>
            <p>検索結果がありません</p>
            <p>別の条件を試してみてください</p>
          </div>
        )}
      </div>
    </>
  );
}
