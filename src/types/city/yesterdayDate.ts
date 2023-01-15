import { IForecastDay } from './forecast';

export interface IPastDays {
  forecast: {
    forecastday: IForecastDay[];
  };
  location: { 
    country: string;
    lat: number;
    localtime: string;
    localtime_epoch: number;
    lon: number;
    name: string;
    region: string;
    tz_id: string;
  }
}