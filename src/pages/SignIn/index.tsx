import { useContext } from 'react'
import { Formik, Form } from 'formik'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { inputs } from './constants/inputs'
import { ROUTES } from '../../constants/routes/routes'
import { FooterAuth } from '../../components/FooterAuth'
import { logInUserAsync } from '../../redux/auth/actions'
import { getInputsList } from '../../utils/auth/UI/getInputsList'
import { MessageModalContext } from '../../context/messageModalContext'
import { generateInitialValues } from '../../utils/generateInitialFormikValues'
import { signInValidationSchema } from '../../utils/auth/signInValidationSchema'


export const SignIn = () => {
  const openModal = useContext(MessageModalContext)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSubmit = async (values: any) => {
    try {
      await dispatch(logInUserAsync(values))
      navigate(ROUTES.MAIN)
    } catch (error: any) {
      openModal(error.message, true)
    }
  }

  return (
    <div className="app-auth">
      <div className="log-in-container">
        <h1 className="head">Sign In</h1>
        <Formik
          initialValues={generateInitialValues(inputs)}
          validationSchema={signInValidationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, values, handleChange }) => (
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
