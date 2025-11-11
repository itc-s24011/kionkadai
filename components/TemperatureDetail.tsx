import React from 'react';
import { TemperatureData, DailyData } from '../types/temperature';
import { HumidityIcon, PressureIcon, SunriseIcon, SunsetIcon, WindIcon } from './IconComponents';

interface TemperatureDetailProps {
  data: TemperatureData;
}

/**
 * 気温に応じてテキストの色を返すヘルパー関数
 * @param temp - 現在の気温 (摂氏)
 * @returns Tailwind CSSのカラークラス名
 */
const getTemperatureColor = (temp: number): string => {
  if (temp >= 30) return 'text-red-400';
  if (temp >= 20) return 'text-orange-400';
  if (temp >= 10) return 'text-green-400';
  if (temp >= 0) return 'text-blue-400';
  return 'text-purple-400';
};

/**
 * 湿度や気圧などの追加情報を表示するための小さなカードコンポーネント
 */
const InfoCard: React.FC<{ icon: React.ReactNode; label: string; value: string | number; unit: string }> = ({ icon, label, value, unit }) => (
    <div className="bg-black/20 p-4 rounded-lg flex flex-col items-center justify-center text-center">
      <div className="text-purple-300 mb-2">{icon}</div>
      <div className="text-sm text-purple-200/80">{label}</div>
      <div className="text-xl font-bold">{value} <span className="text-base font-normal text-purple-200/80">{unit}</span></div>
    </div>
);

/**
 * 週間予報の各日を表示するためのカードコンポーネント
 */
const DailyForecastCard: React.FC<{ day: DailyData }> = ({ day }) => (
    <div className="bg-black/20 p-4 rounded-lg flex flex-col items-center text-center space-y-1">
      <p className="font-bold text-lg">{day.day}</p>
      <p className="text-2xl font-bold">{Math.round(day.temp)}°</p>
      <p className="text-sm text-purple-200/80">{day.condition}</p>
    </div>
);

/**
 * 都市の気温詳細情報を表示するメインコンポーネント
 */
const TemperatureDetail: React.FC<TemperatureDetailProps> = ({ data }) => {
  const tempColor = getTemperatureColor(data.currentTemperature);

  return (
    <div className="space-y-8">
      {/* メインの気温表示セクション */}
      <div className="bg-black/20 border-2 border-white/20 rounded-2xl p-8 shadow-lg text-center flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold">{data.city}, {data.country}</h2>
          <p className="text-lg text-purple-200/80">{data.condition}</p>
        </div>
        <div className={`text-7xl md:text-9xl font-extrabold ${tempColor} my-4 md:my-0`}>
          {Math.round(data.currentTemperature)}°C
        </div>
        <div>
          <p className="text-xl">Feels like {Math.round(data.feelsLike)}°</p>
          <p className="text-lg text-purple-200/80">H: {Math.round(data.high)}° / L: {Math.round(data.low)}°</p>
        </div>
      </div>

      {/* 湿度や気圧などの追加情報グリッド */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <InfoCard icon={<HumidityIcon className="w-8 h-8" />} label="Humidity" value={data.humidity} unit="%" />
        <InfoCard icon={<PressureIcon className="w-8 h-8" />} label="Pressure" value={data.pressure} unit="hPa" />
        <InfoCard icon={<WindIcon className="w-8 h-8" />} label="Wind Speed" value={data.windSpeed} unit="km/h" />
        <InfoCard icon={<SunriseIcon className="w-8 h-8" />} label="Sunrise" value={data.sunrise} unit="" />
        <InfoCard icon={<SunsetIcon className="w-8 h-8" />} label="Sunset" value={data.sunset} unit="" />
      </div>

      {/* 7日間予報セクション */}
      <div>
        <h3 className="text-2xl font-bold mb-4">7-Day Forecast</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {data.weeklyForecast.map((day) => (
            <DailyForecastCard key={day.day} day={day} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemperatureDetail;