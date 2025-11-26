'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { AlertSetting } from '@/types/temperature';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem('theme-mode') === 'dark';
    setIsDarkMode(saved);
    if (saved) {
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    const newValue = !isDarkMode;
    setIsDarkMode(newValue);
    if (newValue) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme-mode', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme-mode', 'light');
    }
  };

  if (!isMounted) return children;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

// ======================== Favorites Context ========================

interface FavoritesContextType {
  favorites: string[];
  toggleFavorite: (cityId: string) => void;
  isFavorite: (cityId: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem('favorites');
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  const toggleFavorite = (cityId: string) => {
    setFavorites((prev) => {
      const updated = prev.includes(cityId) ? prev.filter((id) => id !== cityId) : [...prev, cityId];
      localStorage.setItem('favorites', JSON.stringify(updated));
      return updated;
    });
  };

  const isFavorite = (cityId: string) => favorites.includes(cityId);

  if (!isMounted) return children;

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within FavoritesProvider');
  }
  return context;
};

// ======================== Alerts Context ========================

interface AlertsContextType {
  alerts: AlertSetting[];
  addAlert: (alert: AlertSetting) => void;
  removeAlert: (cityId: string) => void;
  updateAlert: (cityId: string, alert: AlertSetting) => void;
}

const AlertsContext = createContext<AlertsContextType | undefined>(undefined);

export const AlertsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [alerts, setAlerts] = useState<AlertSetting[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem('temperature-alerts');
    if (saved) {
      setAlerts(JSON.parse(saved));
    }
  }, []);

  const addAlert = (alert: AlertSetting) => {
    setAlerts((prev) => {
      const updated = [...prev, alert];
      localStorage.setItem('temperature-alerts', JSON.stringify(updated));
      return updated;
    });
  };

  const removeAlert = (cityId: string) => {
    setAlerts((prev) => {
      const updated = prev.filter((a) => a.cityId !== cityId);
      localStorage.setItem('temperature-alerts', JSON.stringify(updated));
      return updated;
    });
  };

  const updateAlert = (cityId: string, alert: AlertSetting) => {
    setAlerts((prev) => {
      const updated = prev.map((a) => (a.cityId === cityId ? alert : a));
      localStorage.setItem('temperature-alerts', JSON.stringify(updated));
      return updated;
    });
  };

  if (!isMounted) return children;

  return (
    <AlertsContext.Provider value={{ alerts, addAlert, removeAlert, updateAlert }}>
      {children}
    </AlertsContext.Provider>
  );
};

export const useAlerts = () => {
  const context = useContext(AlertsContext);
  if (!context) {
    throw new Error('useAlerts must be used within AlertsProvider');
  }
  return context;
};
