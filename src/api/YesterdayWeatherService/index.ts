import axios from 'axios';
import { URLS } from '../../constants/api/urls';
import { headers } from '../../constants/api/headers';


class YesterdayWeatherService {
  async getYesterday(city: any, yesterday: any): Promise<any> {
    try {
      const {data} = await axios.get<any>(URLS.getYesterday, {
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