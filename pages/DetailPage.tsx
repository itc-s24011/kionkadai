import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TemperatureData } from '../types/temperature';
import { getTemperatureById } from '../services/microcmsService';
import TemperatureDetail from '../components/TemperatureDetail';
import LoadingSpinner from '../components/LoadingSpinner';

/**
 * 詳細ページコンポーネント
 * - URLに含まれる都市のIDに基づいて、特定の都市の詳細な気温情報を表示します。
 */
const DetailPage: React.FC = () => {
  // --- HOOKS ---
  // react-routerからURLパラメータ（例: /temperature/tokyo の 'tokyo'）を取得
  const { id } = useParams<{ id: string }>();

  // --- STATE MANAGEMENT ---
  // 特定の都市の気温データを保持するstate
  const [temperature, setTemperature] = useState<TemperatureData | null>(null);
  // データ取得中のローディング状態を管理するstate
  const [loading, setLoading] = useState<boolean>(true);
  // データ取得時にエラーが発生した場合のエラーメッセージを保持するstate
  const [error, setError] = useState<string | null>(null);
  // コンテンツをフェードインさせるための表示状態を管理するstate
  const [visible, setVisible] = useState<boolean>(false);

  // --- DATA FETCHING ---
  // URLのidが変更された時に実行されるeffect
  useEffect(() => {
    if (!id) return; // idが存在しない場合は何もしない

    const fetchData = async () => {
      try {
        setLoading(true);
        // microCMSサービスから指定されたIDの気温データを非同期で取得
        const data = await getTemperatureById(id);
        setTemperature(data);
        setError(null); // 成功時はエラーメッセージをクリア
      } catch (err) {
        setError(`Failed to fetch data for city ID: ${id}. Please ensure the data exists in MicroCMS.`);
        console.error(err);
      } finally {
        setLoading(false); // 成功・失敗にかかわらずローディングを終了
      }
    };
    fetchData();
    
    // わずかな遅延の後に表示状態をtrueにし、CSSでのフェードインアニメーションを開始させる
    const timer = setTimeout(() => setVisible(true), 100);
    // コンポーネントがアンマウントされるか、idが変更される際にタイマーをクリアする
    return () => clearTimeout(timer);
  }, [id]); // idが変更されるたびにこのeffectが再実行されます

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
        <Link to="/" className="mt-4 inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors">
          Back to Home
        </Link>
      </div>
    );
  }

  // データ取得成功時の表示
  return (
    <div className={`max-w-7xl mx-auto transition-opacity duration-1000 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="mb-8">
        <Link to="/" className="text-purple-300 hover:text-white transition-colors duration-300 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Back to Dashboard
        </Link>
      </div>
      {temperature && <TemperatureDetail data={temperature} />}
    </div>
  );
};

export default DetailPage;