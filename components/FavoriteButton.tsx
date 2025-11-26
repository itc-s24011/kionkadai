'use client';

import React, { useEffect, useState } from 'react';
import { useFavorites } from '@/lib/contexts';
import styles from './FavoriteButton.module.css';

interface FavoriteButtonProps {
  cityId: string;
}

export default function FavoriteButton({ cityId }: FavoriteButtonProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    setIsMounted(true);
    setFavorite(isFavorite(cityId));
  }, [cityId, isFavorite]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(cityId);
    setFavorite(!favorite);
  };

  if (!isMounted) {
    return (
      <button className={styles.button} disabled title="読み込み中...">
        ☆
      </button>
    );
  }

  return (
    <button
      className={`${styles.button} ${favorite ? styles.active : ''}`}
      onClick={handleClick}
      title={favorite ? 'お気に入りから削除' : 'お気に入りに追加'}
    >
      {favorite ? '⭐' : '☆'}
    </button>
  );
}
