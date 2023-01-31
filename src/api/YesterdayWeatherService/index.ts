import axios from 'axios';
import { URLS } from '../../constants/api/urls';
import { headers } from '../../constants/api/headers';
import { IPastDays } from '../../types/city/yesterdayDate'  

class YesterdayWeatherService {
  async getYesterday(city: string, yesterday: string): Promise<IPastDays | void> {    
    try {
      const {data} = await axios.get<IPastDays>(URLS.getYesterday, {
        params: {
          q: city, 
          dt: yesterday, 
          lang: 'en'
        },
        headers
      })
      
      return data
    }
    catch (error) {
      console.log(error);
    }
  }
}


export default new YesterdayWeatherService()