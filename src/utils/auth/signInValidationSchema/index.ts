import * as Yup from 'yup'
import { email, password } from '../../../pages/Register/constants/inputs'

export const signInValidationSchema = Yup.object().shape({
  [email.id]: Yup.string().email('Invalid email').required('Required'),
  [password.id]: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
})