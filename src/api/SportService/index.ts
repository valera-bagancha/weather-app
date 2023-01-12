import axios from 'axios';
import { URLS } from '../../constants/api/urls';
import { headers } from '../../constants/api/headers';


class SportService {
  async getSportsEvent(): Promise<any> {
    try {
      const { data } = await axios.get<any>(URLS.getSportsEvent, {
        params: {q: 'London'},
        headers
      })
      
      return data
    }
    catch (error) {
      console.log(error);
    }
  }
}


export default new SportService()