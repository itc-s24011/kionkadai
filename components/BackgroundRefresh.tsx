'use client';

import React from 'react';
import { applyRandomBackground } from '@/lib/gradients';
import styles from './BackgroundRefresh.module.css';

export default function BackgroundRefresh() {
  const handleRefresh = () => {
    applyRandomBackground();
  };

  return (
    <button
      className={styles.button}
      onClick={handleRefresh}
      title="背景をリロード"
    >
      🎨
    </button>
  );
}
