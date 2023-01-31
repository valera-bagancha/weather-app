import axios from 'axios'
import { URLS } from '../../constants/api/urls'
import { headers } from '../../constants/api/headers'
import { ICity } from '../../types/city/forecast'
import { IErrorMessageForecast } from '../../types/errorType'

class WeatherService {
  async getForecast(city: string): Promise<ICity> {
    try {
      const { data } = await axios.get<ICity>(URLS.getForecast, {
        params: { q: city, days: '3' },
        headers,
      })
      
      return data
    } catch (error) {
      const errorMessage = error as IErrorMessageForecast
      throw new Error(errorMessage.response.data.error.message)
    }
  }
}

export default new WeatherService()
