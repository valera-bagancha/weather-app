import { useContext } from 'react'
import { Formik, Form } from 'formik'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { inputs } from './constants/inputs'
import { ROUTES } from '../../constants/routes/routes'
import { FooterAuth } from '../../components/FooterAuth'
import { registerUserAsync } from '../../redux/auth/actions'
import { MessageModalContext } from '../../context/messageModalContext'
import { generateInitialValues } from '../../utils/generateInitialFormikValues'
import { registerValidationSchema } from '../../utils/auth/registerValidationSchema'
import { IError } from '../../types/errorType'
import { GetInputsList } from '../../utils/auth/UI/GetInputsList'

interface IValues {
  [key: string]: string
}

export const Register = () => {
  const openModal = useContext(MessageModalContext)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const onSubmit = async (values: IValues) => {   
    try {
      const {confirmPassword, ...rest} = values
      
      await dispatch(
        registerUserAsync(rest)
      )
      navigate(ROUTES.MAIN)
    } catch (error) {
      const typedError = error as IError
      openModal(typedError.message, true)
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
              <GetInputsList inputs={inputs} errors={errors} touched={touched} handleChange={handleChange} values={values}/>
              <FooterAuth linkName={'Sign In'} linkRoute={ROUTES.SIGNIN} />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
