import React, { useState, useEffect } from 'react';
import { TemperatureData } from '../types/temperature';
import { getTemperatures } from '../services/microcmsService';
import TemperatureCard from '../components/TemperatureCard';
import LoadingSpinner from '../components/LoadingSpinner';

/**
 * ホームページコンポーネント
 * - アプリケーションのトップページとして、各都市の気温カードを一覧表示します。
 */
const HomePage: React.FC = () => {
  // --- STATE MANAGEMENT ---
  // 気温データのリストを保持するstate
  const [temperatures, setTemperatures] = useState<TemperatureData[]>([]);
  // データ取得中のローディング状態を管理するstate
  const [loading, setLoading] = useState<boolean>(true);
  // データ取得時にエラーが発生した場合のエラーメッセージを保持するstate
  const [error, setError] = useState<string | null>(null);
  // コンテンツをフェードインさせるための表示状態を管理するstate
  const [visible, setVisible] = useState<boolean>(false);

  // --- DATA FETCHING ---
  // コンポーネントがマウントされた時に一度だけ実行されるeffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // microCMSサービスから気温データを非同期で取得
        const data = await getTemperatures();
        setTemperatures(data);
        setError(null); // 成功時はエラーメッセージをクリア
      } catch (err) {
        setError('Failed to fetch temperature data. Please check your MicroCMS setup and environment variables.');
        console.error(err);
      } finally {
        setLoading(false); // 成功・失敗にかかわらずローディングを終了
      }
    };
    fetchData();

    // わずかな遅延の後に表示状態をtrueにし、CSSでのフェードインアニメーションを開始させる
    const timer = setTimeout(() => setVisible(true), 100);
    // コンポーネントがアンマウントされる際にタイマーをクリアする
    return () => clearTimeout(timer);
  }, []); // 空の依存配列は、このeffectがマウント時に一度だけ実行されることを意味します

  // --- RENDER LOGIC ---
  // ローディング中の表示
  if (loading) {
    return <LoadingSpinner />;
  }

  // エラー発生時の表示
  if (error) {
    return (
      <div className="text-center text-red-300 bg-red-900/50 p-6 rounded-lg animate-fadeIn">
        <h2 className="text-2xl font-bold mb-2">Error</h2>
        <p>{error}</p>
        <p className="mt-4 text-sm">This is a mock application. If you see this, it means the mock data service is not working as expected.</p>
      </div>
    );
  }

  // データ取得成功時の表示
  return (
    <div className={`transition-opacity duration-1000 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {temperatures.map((temp) => (
          <TemperatureCard key={temp.id} data={temp} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;