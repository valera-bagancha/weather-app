import axios from 'axios';
import { URLS } from '../../constants/api/urls';
import { headers } from '../../constants/api/headers';
import { ISportEvents } from '../../types/city/sportEvents'

class SportService {
  async getSportsEvent(): Promise<ISportEvents | void> {
    try {
      const { data } = await axios.get<ISportEvents>(URLS.getSportsEvent, {
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