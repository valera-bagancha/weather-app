import  axios from 'axios'
import { URLS } from '../../constants/api/urls'
// import { ISetAuthData } from '../../redux/auth/types'
import { FC } from 'react'
// interface IProps {
//   email: string,
//   firstName: string,
//   lastName: string,
//   password: string,
//   phoneNumber: string,
// }

class AuthService {
  async registerUser(user: any): Promise<any> {
    try {
      const { data } = await axios.post<any>(URLS.register, user)
      
      return data
    } catch (error: any) {
      throw new Error(error.response.data);
    }
  }

  async logInUser(user: any): Promise<any> {
    try {
      const { data } = await axios.post<any>(URLS.login, user)

      return data
    } catch (error: any) {

      throw new Error(error.response.data);
    }
  }
}

export default new AuthService()
