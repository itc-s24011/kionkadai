// --- モックサービスについての注意 ---
// このファイルは、microCMSとの通信をシミュレートするためのモック（ダミー）サービスです。
// 実際のアプリケーションでは、'microcms-js-sdk'をインストールし、
// コメントアウトされている部分を有効にして、環境変数に実際のAPIキーとサービスドメインを設定する必要があります。
//
// 開発段階では、このモックデータを使用することで、バックエンドの準備ができていなくても
// フロントエンドの開発を進めることができます。

// import { createClient } from 'microcms-js-sdk';
import { TemperatureData } from '../types/temperature';

/*
// --- 本番用のコード例 ---
// 実際のmicroCMSクライアントを初期化
const client = createClient({
  // 環境変数からサービスドメインとAPIキーを取得
  // .env.localファイルなどに定義します:
  // REACT_APP_MICROCMS_SERVICE_DOMAIN=your-service-domain
  // REACT_APP_MICROCMS_API_KEY=your-api-key
  serviceDomain: process.env.REACT_APP_MICROCMS_SERVICE_DOMAIN || '',
  apiKey: process.env.REACT_APP_MICROCMS_API_KEY || '',
});
*/

// --- 開発用のモックデータ ---
// アプリケーションで表示するための静的なダミーデータ
const mockData: TemperatureData[] = [
  {
    id: 'tokyo',
    city: 'Tokyo',
    country: 'Japan',
    currentTemperature: 28,
    high: 32,
    low: 25,
    feelsLike: 31,
    condition: 'Sunny',
    humidity: 75,
    pressure: 1012,
    windSpeed: 15,
    sunrise: '4:45 AM',
    sunset: '6:50 PM',
    weeklyForecast: [
      { day: 'Mon', temp: 29, condition: 'Sunny' },
      { day: 'Tue', temp: 30, condition: 'Partly Cloudy' },
      { day: 'Wed', temp: 31, condition: 'Sunny' },
      { day: 'Thu', temp: 28, condition: 'Showers' },
      { day: 'Fri', temp: 29, condition: 'Sunny' },
      { day: 'Sat', temp: 32, condition: 'Hot' },
      { day: 'Sun', temp: 30, condition: 'Sunny' },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: new Date().toISOString(),
    revisedAt: new Date().toISOString(),
  },
  {
    id: 'new-york',
    city: 'New York',
    country: 'USA',
    currentTemperature: 24,
    high: 27,
    low: 19,
    feelsLike: 24,
    condition: 'Partly Cloudy',
    humidity: 60,
    pressure: 1015,
    windSpeed: 20,
    sunrise: '5:30 AM',
    sunset: '8:15 PM',
    weeklyForecast: [
      { day: 'Mon', temp: 25, condition: 'Cloudy' },
      { day: 'Tue', temp: 26, condition: 'Sunny' },
      { day: 'Wed', temp: 27, condition: 'Sunny' },
      { day: 'Thu', temp: 24, condition: 'Rain' },
      { day: 'Fri', temp: 23, condition: 'Cloudy' },
      { day: 'Sat', temp: 26, condition: 'Sunny' },
      { day: 'Sun', temp: 25, condition: 'Partly Cloudy' },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: new Date().toISOString(),
    revisedAt: new Date().toISOString(),
  },
  {
    id: 'london',
    city: 'London',
    country: 'UK',
    currentTemperature: 18,
    high: 21,
    low: 14,
    feelsLike: 17,
    condition: 'Cloudy',
    humidity: 80,
    pressure: 1009,
    windSpeed: 25,
    sunrise: '5:00 AM',
    sunset: '9:00 PM',
    weeklyForecast: [
      { day: 'Mon', temp: 19, condition: 'Cloudy' },
      { day: 'Tue', temp: 20, condition: 'Showers' },
      { day: 'Wed', temp: 21, condition: 'Sunny' },
      { day: 'Thu', temp: 18, condition: 'Rain' },
      { day: 'Fri', temp: 19, condition: 'Cloudy' },
      { day: 'Sat', temp: 20, condition: 'Partly Cloudy' },
      { day: 'Sun', temp: 19, condition: 'Cloudy' },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: new Date().toISOString(),
    revisedAt: new Date().toISOString(),
  },
   {
    id: 'sydney',
    city: 'Sydney',
    country: 'Australia',
    currentTemperature: 15,
    high: 18,
    low: 9,
    feelsLike: 14,
    condition: 'Showers',
    humidity: 85,
    pressure: 1020,
    windSpeed: 30,
    sunrise: '6:55 AM',
    sunset: '5:00 PM',
    weeklyForecast: [
      { day: 'Mon', temp: 16, condition: 'Rain' },
      { day: 'Tue', temp: 17, condition: 'Showers' },
      { day: 'Wed', temp: 18, condition: 'Partly Cloudy' },
      { day: 'Thu', temp: 17, condition: 'Sunny' },
      { day: 'Fri', temp: 16, condition: 'Cloudy' },
      { day: 'Sat', temp: 15, condition: 'Rain' },
      { day: 'Sun', temp: 16, condition: 'Showers' },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: new Date().toISOString(),
    revisedAt: new Date().toISOString(),
  },
  {
    id: 'cairo',
    city: 'Cairo',
    country: 'Egypt',
    currentTemperature: 35,
    high: 40,
    low: 28,
    feelsLike: 38,
    condition: 'Hot',
    humidity: 40,
    pressure: 1005,
    windSpeed: 10,
    sunrise: '5:00 AM',
    sunset: '6:45 PM',
    weeklyForecast: [
      { day: 'Mon', temp: 36, condition: 'Sunny' },
      { day: 'Tue', temp: 37, condition: 'Sunny' },
      { day: 'Wed', temp: 38, condition: 'Hot' },
      { day: 'Thu', temp: 40, condition: 'Very Hot' },
      { day: 'Fri', temp: 39, condition: 'Sunny' },
      { day: 'Sat', temp: 38, condition: 'Hot' },
      { day: 'Sun', temp: 37, condition: 'Sunny' },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: new Date().toISOString(),
    revisedAt: new Date().toISOString(),
  }
];

/**
 * モックAPI: すべての都市の気温データを取得します。
 * 実際のAPI呼び出しをシミュレートするために、意図的に遅延を発生させます。
 * @returns {Promise<TemperatureData[]>} すべての都市のデータを含むPromise
 */
export const getTemperatures = (): Promise<TemperatureData[]> => {
  return new Promise((resolve) => {
    // 500ミリ秒のネットワーク遅延をシミュレート
    setTimeout(() => {
      resolve(mockData);
    }, 500);
  });
};

/**
 * モックAPI: 指定されたIDを持つ単一の都市の気温データを取得します。
 * @param {string} id - 取得したい都市のID (例: "tokyo")
 * @returns {Promise<TemperatureData>} 指定された都市のデータを含むPromise
 */
export const getTemperatureById = (id: string): Promise<TemperatureData> => {
  return new Promise((resolve, reject) => {
    // 500ミリ秒のネットワーク遅延をシミュレート
    setTimeout(() => {
      const data = mockData.find((item) => item.id === id);
      if (data) {
        resolve(data);
      } else {
        reject(new Error('Temperature data not found'));
      }
    }, 500);
  });
};