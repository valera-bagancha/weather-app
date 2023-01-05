import { axiosInstance } from '../../axios'
import { URLS } from '../../constants/urls'
import { IUserLogIn, IUserRegister } from '../../redux/auth/types'

class AuthService {
  async registerUser(user: IUserRegister): Promise<any> {
    try {
      const { data } = await axiosInstance.post<any>(URLS.register, user)

      return data
    } catch (error: any) {
      console.log('error', error);
      
      throw new Error(error.response.data);
    }
  }

  async logInUser(user: IUserLogIn): Promise<any> {
    try {
      const { data } = await axiosInstance.post<any>(URLS.login, user)

      return data
    } catch (error) {
      console.log(error)
    }
  }
}

export default new AuthService()
