import { useContext } from 'react'
import { Formik, Form } from 'formik'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { inputs } from './constants/inputs'
import { ROUTES } from '../../constants/routes/routes'
import { FooterAuth } from '../../components/FooterAuth'
import { registerUserAsync } from '../../redux/auth/actions'
import { getInputsList } from '../../utils/auth/UI/getInputsList'
import { removeObjectField } from '../../utils/removeObjectField'
import { MessageModalContext } from '../../context/messageModalContext'
import { generateInitialValues } from '../../utils/generateInitialFormikValues'
import { registerValidationSchema } from '../../utils/auth/registerValidationSchema'

export const Register = () => {
  const openModal = useContext(MessageModalContext)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const onSubmit = async (values: any) => {
    try {
      await dispatch(
        registerUserAsync(removeObjectField(values, 'confirmPassword'))
      )
      navigate(ROUTES.MAIN)
    } catch (error: any) {
      openModal(error.message, true)
    }
  }

  return (
    <div className="app-auth">
      <div className="log-in-container">
        <h1 className="head">Register</h1>
        <Formik
          initialValues={generateInitialValues(inputs)}
          validationSchema={registerValidationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, values, handleChange }) => (
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
