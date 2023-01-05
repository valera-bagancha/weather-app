import { useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'

import { FooterAuth } from '../../components/FooterAuth'
import { signInValidationSchema } from '../../utils/auth/signInValidationSchema'
import { ROUTES } from '../../constants/routes'
import { getInputsList } from '../../utils/auth/UI/getInputsList'
import { inputs } from './constants/inputs'
import { useDispatch } from 'react-redux'
import { logInUserAsync } from '../../redux/auth/actions'

export const SignIn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const initialValues = {
    email: '',
    password: '',
  }

  return (
    <div className="app-auth">
      <div className="log-in-container">
        <h1 className="head">Sign In</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={signInValidationSchema}
          onSubmit={ values => {
            dispatch(logInUserAsync(values))
            navigate(ROUTES.MAIN)
          }}
        >
          {({ errors, touched, values, handleChange }: any) => (
            <Form>
              {getInputsList(inputs, values, errors, touched, handleChange)}
              <FooterAuth linkName={'Register'} linkRoute={ROUTES.REGISTER} />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
