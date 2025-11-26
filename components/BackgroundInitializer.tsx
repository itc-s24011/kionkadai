'use client';

import { useEffect } from 'react';
import { applyRandomBackground } from '@/lib/gradients';

export default function BackgroundInitializer() {
  useEffect(() => {
    applyRandomBackground();
    
    // ページロード時に背景を変更
    window.addEventListener('load', applyRandomBackground);
    
    return () => {
      window.removeEventListener('load', applyRandomBackground);
    };
  }, []);

  return null;
}
