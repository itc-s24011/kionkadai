import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import Header from './components/Header';

/**
 * アプリケーションのメインコンポーネント
 * - 全体のレイアウト（背景色、フォントなど）を定義します。
 * - ヘッダーコンポーネントを常に表示します。
 * - react-router-domを使用して、ページ間のルーティングを設定します。
 *   - ルートURL ('/') にはホームページ (HomePage) を表示します。
 *   - '/temperature/:id' の形式のURLには詳細ページ (DetailPage) を表示します。
 */
const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white font-sans">
      <Header />
      <main className="p-4 md:p-8">
        <HashRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/temperature/:id" element={<DetailPage />} />
          </Routes>
        </HashRouter>
      </main>
    </div>
  );
};

export default App;