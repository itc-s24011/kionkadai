import React from 'react';
import { Link } from 'react-router-dom';
import { TemperatureData } from '../types/temperature';

interface TemperatureCardProps {
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
 * 都市の気温情報を表示するカードコンポーネント
 * - ホームページに一覧表示される各都市のカード
 * - クリックすると詳細ページに遷移する
 */
const TemperatureCard: React.FC<TemperatureCardProps> = ({ data }) => {
  const tempColor = getTemperatureColor(data.currentTemperature);

  return (
    <Link to={`/temperature/${data.id}`} className="block group">
      {/* 
        カード全体のスタイル設定
        - groupクラス: 子要素でgroup-hoverを使えるようにするため
        - transition: ホバー時のアニメーションを滑らかにする
        - hover:*: ホバー時のスタイル変化
      */}
      <div className="relative p-6 bg-black/20 backdrop-blur-md border-2 border-white/20 rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:border-white/40 overflow-hidden">
        {/* 
          カード上部のアニメーションバー
          - group-hover:scale-x-100: 親要素(.group)がホバーされたときに、バーを横に伸ばす
        */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold tracking-wide">{data.city}</h3>
          <p className="text-sm text-purple-200/80 mb-4">{data.country}</p>
          <div className={`text-6xl font-extrabold ${tempColor}`}>
            {Math.round(data.currentTemperature)}°
          </div>
          <p className="text-sm text-purple-200/80 mt-2">
            H: {Math.round(data.high)}° / L: {Math.round(data.low)}°
          </p>
        </div>
      </div>
    </Link>
  );
};

export default TemperatureCard;