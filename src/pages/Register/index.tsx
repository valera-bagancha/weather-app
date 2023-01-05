import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'

import { FooterAuth } from '../../components/FooterAuth'
import { ROUTES } from '../../constants/routes'
import { registerValidationSchema } from '../../utils/auth/registerValidationSchema'
import { getInputsList } from '../../utils/auth/UI/getInputsList'
import { confirmPassword, inputs } from './constants/inputs'
import { useDispatch } from 'react-redux'
import { registerUserAsync } from '../../redux/auth/actions'
import { IUserRegister } from '../../redux/auth/types'
import { removeObjectField } from '../../utils/removeObjectField'

export const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const initialValues: IUserRegister = {
    email: '',
    phoneNumber: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
  }

  return (
    <div className="app-auth">
      <div className="log-in-container">
        <h1 className="head">Register</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={registerValidationSchema}
          onSubmit={async (values) => {
            try {
              console.log('before dispatch');
              
              await dispatch(registerUserAsync(removeObjectField(values, 'confirmPassword')))


             
              console.log('after dispatch');
              

              navigate(ROUTES.MAIN)
            } catch (error) {
              console.log();
              
              alert(error)
            }
            // dispatch(registerUserAsync(removeObjectField(values, 'confirmPassword')))
            // navigate(ROUTES.MAIN)
          }}
        >
          {({ errors, touched, values, handleChange }: any) => (
            <Form>
              {getInputsList(inputs, values, errors, touched, handleChange)}
              <FooterAuth linkName={'Sign In'} linkRoute={ROUTES.SIGNIN} />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
