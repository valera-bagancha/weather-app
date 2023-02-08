import  axios from 'axios'
import { URLS } from '../../constants/api/urls'
import { ILogIn } from '../../redux/auth/types'
import { IErrorMessage } from '../../types/errorType';
import { IUserData } from '../../types/userData/user';

interface IValues {
  [key: string]: string
}
class AuthService {
  async registerUser(user: IValues): Promise<IUserData> {
    try {
      const { data } = await axios.post<IUserData>(URLS.register, user)
      
      return data
    } catch (error) {
      const errorMessage = error as IErrorMessage
      throw new Error(errorMessage.response.data);
    }
  }

  async logInUser(user: ILogIn): Promise<IUserData> {
    try {
      const { data } = await axios.post<IUserData>(URLS.login, user)
      
      return data
    } catch (error) {

      const errorMessage = error as IErrorMessage
      throw new Error(errorMessage.response.data);
    }
    
  }
}

export default new AuthService()
