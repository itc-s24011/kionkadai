'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '@/lib/contexts';
import { applyRandomBackground } from '@/lib/gradients';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleToggle = () => {
    toggleTheme();
    setTimeout(() => {
      applyRandomBackground();
    }, 100);
  };

  if (!isMounted) return null;

  return (
    <button
      className={styles.button}
      onClick={handleToggle}
      title={isDarkMode ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
    >
      {isDarkMode ? '🌙' : '☀️'}
    </button>
  );
}
