'use client';

import React, { useState } from 'react';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSearch: (query: string, tempMin?: number, tempMax?: number) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [tempMin, setTempMin] = useState('');
  const [tempMax, setTempMax] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value, tempMin ? parseInt(tempMin) : undefined, tempMax ? parseInt(tempMax) : undefined);
  };

  const handleTempMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTempMin(value);
    onSearch(searchQuery, value ? parseInt(value) : undefined, tempMax ? parseInt(tempMax) : undefined);
  };

  const handleTempMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTempMax(value);
    onSearch(searchQuery, tempMin ? parseInt(tempMin) : undefined, value ? parseInt(value) : undefined);
  };

  const handleClear = () => {
    setSearchQuery('');
    setTempMin('');
    setTempMax('');
    onSearch('', undefined, undefined);
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="都市名で検索..."
          value={searchQuery}
          onChange={handleSearch}
          className={styles.searchInput}
        />
        <button
          className={styles.filterButton}
          onClick={() => setShowFilters(!showFilters)}
          title="フィルター"
        >
          🔍
        </button>
      </div>

      {showFilters && (
        <div className={styles.filterPanel}>
          <div className={styles.filterGroup}>
            <label htmlFor="tempMin">最低気温:</label>
            <input
              id="tempMin"
              type="number"
              placeholder="°C"
              value={tempMin}
              onChange={handleTempMinChange}
              className={styles.filterInput}
            />
          </div>
          <div className={styles.filterGroup}>
            <label htmlFor="tempMax">最高気温:</label>
            <input
              id="tempMax"
              type="number"
              placeholder="°C"
              value={tempMax}
              onChange={handleTempMaxChange}
              className={styles.filterInput}
            />
          </div>
          <button className={styles.clearButton} onClick={handleClear}>
            クリア
          </button>
        </div>
      )}
    </div>
  );
}
