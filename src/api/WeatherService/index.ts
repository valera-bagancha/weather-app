import axios from 'axios';
import { URLS } from '../../constants/api/urls';
import { headers } from '../../constants/api/headers';


class WeatherService {
  async getForecast(city: any): Promise<any> {
    try {
      const {data} = await axios.get<any>(URLS.getForecast, {
        params: {q: city, days: '3'},
        headers
      })
      
      return data
    }
    catch (error) {
      console.log(error);
    }
  }
}


export default new WeatherService()



