// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider, FavoritesProvider, AlertsProvider } from '@/lib/contexts';
import BackgroundInitializer from '@/components/BackgroundInitializer';

export const metadata: Metadata = {
  title: '世界の気温 - Temperature App',
  description: '世界各国の都市の気温情報を表示するアプリケーション',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <BackgroundInitializer />
        <ThemeProvider>
          <FavoritesProvider>
            <AlertsProvider>
              {children}
            </AlertsProvider>
          </FavoritesProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
