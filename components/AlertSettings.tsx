'use client';

import React, { useEffect, useState } from 'react';
import { useAlerts } from '@/lib/contexts';
import { AlertSetting } from '@/types/temperature';
import styles from './AlertSettings.module.css';

interface AlertSettingsProps {
  cityId: string;
  cityName: string;
  currentTemp: number;
}

export default function AlertSettings({ cityId, cityName, currentTemp }: AlertSettingsProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [maxTemp, setMaxTemp] = useState('');
  const [minTemp, setMinTemp] = useState('');
  const [isAlertActive, setIsAlertActive] = useState(false);
  const { alerts, addAlert, removeAlert, updateAlert } = useAlerts();

  useEffect(() => {
    setIsMounted(true);
    const alert = alerts.find((a) => a.cityId === cityId);
    if (alert) {
      setMaxTemp(alert.maxTemp.toString());
      setMinTemp(alert.minTemp.toString());
      setIsAlertActive(alert.enabled);
    }
  }, [cityId, alerts]);

  const handleSave = () => {
    if (!maxTemp && !minTemp) {
      removeAlert(cityId);
      setIsAlertActive(false);
      return;
    }

    const alert: AlertSetting = {
      cityId,
      maxTemp: maxTemp ? parseInt(maxTemp) : currentTemp + 5,
      minTemp: minTemp ? parseInt(minTemp) : currentTemp - 5,
      enabled: true,
    };

    const existing = alerts.find((a) => a.cityId === cityId);
    if (existing) {
      updateAlert(cityId, alert);
    } else {
      addAlert(alert);
    }

    setIsAlertActive(true);
    checkAlert(alert);
    setIsOpen(false);
  };

  const checkAlert = (alert: AlertSetting) => {
    if (currentTemp > alert.maxTemp || currentTemp < alert.minTemp) {
      showAlertNotification(alert);
    }
  };

  const showAlertNotification = (alert: AlertSetting) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(`⚠️ ${cityName} の気温アラート`, {
        body: `現在の気温: ${Math.round(currentTemp)}°C`,
        icon: '🌡️',
      });
    }
  };

  if (!isMounted) {
    return (
      <button className={styles.alertButton} disabled title="読み込み中...">
        🔔
      </button>
    );
  }

  return (
    <div className={styles.container}>
      <button
        className={`${styles.alertButton} ${isAlertActive ? styles.active : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        title="アラート設定"
      >
        {isAlertActive ? '🚨' : '🔔'}
      </button>

      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>{cityName} - アラート設定</h3>
            <p className={styles.currentTemp}>現在の気温: {Math.round(currentTemp)}°C</p>

            <div className={styles.inputGroup}>
              <label htmlFor={`max-${cityId}`}>最高気温アラート:</label>
              <input
                id={`max-${cityId}`}
                type="number"
                placeholder={`${Math.round(currentTemp + 5)}°C`}
                value={maxTemp}
                onChange={(e) => setMaxTemp(e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor={`min-${cityId}`}>最低気温アラート:</label>
              <input
                id={`min-${cityId}`}
                type="number"
                placeholder={`${Math.round(currentTemp - 5)}°C`}
                value={minTemp}
                onChange={(e) => setMinTemp(e.target.value)}
              />
            </div>

            <div className={styles.buttonGroup}>
              <button className={styles.saveButton} onClick={handleSave}>
                保存
              </button>
              <button
                className={styles.cancelButton}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                キャンセル
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
