/**
 * 週間予報の1日分のデータを表すインターフェース
 */
export interface DailyData {
  /** 曜日 (例: "Mon", "Tue") */
  day: string;
  /** その日の平均気温 */
  temp: number;
  /** 天気の状態 (例: "Sunny", "Cloudy") */
  condition: string;
}

/**
 * 都市の包括的な気温データを表すインターフェース
 * microCMSのAPIスキーマに対応します。
 */
export interface TemperatureData {
  /** microCMSで自動的に付与されるコンテンツID */
  id: string;
  /** 都市名 */
  city: string;
  /** 国名 */
  country: string;
  /** 現在の気温 (摂氏) */
  currentTemperature: number;
  /** その日の最高気温 (摂氏) */
  high: number;
  /** その日の最低気温 (摂氏) */
  low: number;
  /** 体感温度 (摂氏) */
  feelsLike: number;
  /** 天気の状態 (例: "Sunny", "Cloudy") */
  condition: string;
  /** 湿度 (%) */
  humidity: number;
  /** 気圧 (hPa) */
  pressure: number;
  /** 風速 (km/h) */
  windSpeed: number;
  /** 日の出時刻 (例: "4:45 AM") */
  sunrise: string;
  /** 日の入り時刻 (例: "6:50 PM") */
  sunset: string;
  /** 7日間の週間予報データ */
  weeklyForecast: DailyData[];
  /** コンテンツ作成日時 (ISO 8601形式) */
  createdAt: string;
  /** コンテンツ更新日時 (ISO 8601形式) */
  updatedAt: string;
  /** コンテンツ公開日時 (ISO 8601形式) */
  publishedAt: string;
  /** コンテンツ改定日時 (ISO 8601形式) */
  revisedAt: string;
}

/**
 * microCMSのリスト形式APIレスポンスの型
 */
export interface TemperaturesListResponse {
  contents: TemperatureData[];
  totalCount: number;
  offset: number;
  limit: number;
}