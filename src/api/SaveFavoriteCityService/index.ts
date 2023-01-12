import  axios from 'axios'
import { URLS } from '../../constants/api/urls'


class SaveFavoriteCityService {
  async SaveFavoriteCity(): Promise<any> {
    try {
      const { data } = await axios.post<any>(URLS.register)
      
      return data
    } catch (error) {
      console.log(error);
    }
  }
}

export default new SaveFavoriteCityService()