import * as Yup from 'yup'
import { confirmPassword, email, password, phoneNumber, firstName, lastName } from '../../../pages/Register/constants/inputs'

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const registerValidationSchema = Yup.object().shape({
  [email.id]: Yup.string().email('Invalid email').required('Required'),
  [phoneNumber.id]: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  [password.id]: Yup.string()
    .min(5, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  [confirmPassword.id]: Yup.string().oneOf(
    [Yup.ref('password')],
    'Passwords must match'
  ),
  [firstName.id]: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
  [lastName.id]: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
})
