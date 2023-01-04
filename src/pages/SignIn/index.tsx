import { useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'

import { FooterAuth } from '../../components/FooterAuth'
import { signInValidationSchema } from '../../utils/auth/signInValidationSchema'
import { ROUTES } from '../../constants/routes'
import { getInputsList } from '../../utils/auth/UI/getInputsList'
import { inputs } from './constants/inputs'

export const SignIn = () => {
  const navigate = useNavigate()

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
          onSubmit={() => {
            navigate(ROUTES.MAIN)
          }}
        >
          {({ errors, touched }: any) => (
            <Form>
              {getInputsList(inputs, errors, touched)}
              <FooterAuth linkName={'Register'} linkRoute={ROUTES.REGISTER} />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}