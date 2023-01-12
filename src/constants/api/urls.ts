import { urlsApi } from './urlsApi'

export const URLS = {
  register: `${urlsApi.authApi}/register`,
  login: `${urlsApi.authApi}/login`,
  getForecast: urlsApi.forecastWeatherApi,
  getSportsEvent: urlsApi.sportEventApi,
  getYesterday: urlsApi.getYesterdayApi,
}