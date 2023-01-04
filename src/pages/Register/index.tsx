import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'

import { FooterAuth } from '../../components/FooterAuth'
import { ROUTES } from '../../constants/routes'
import { registerValidationSchema } from '../../utils/auth/registerValidationSchema'
import { getInputsList } from '../../utils/auth/UI/getInputsList'
import { inputs } from './constants/inputs'

export const Register = () => {
  const navigate = useNavigate()

  const initialValues = {
    email: '',
    phoneNumber: '',
    name: '',
    lastName: '',
    password: '',
    confirmPassword: '',
  }
  // const showInputs = inputs.map(({ placeholder, className, type }) => (
  //   <Input
  //     key={placeholder}
  //     className={className}
  //     type={type}
  //     placeholder={placeholder}
  //   />
  // ))

  return (
    <div className="app-auth">
      <div className="log-in-container">
        <h1 className="head">Register</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={registerValidationSchema}
          onSubmit={() => {
            navigate(ROUTES.MAIN)
          }}
        >
          {({ errors, touched }: any) => (
            <Form>
              {getInputsList(inputs, errors, touched)}
              <FooterAuth linkName={'Sign In'} linkRoute={ROUTES.SIGNIN}/>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
