import { Formik, Form } from 'formik'
import { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { inputs } from './constants/inputs'
import { ROUTES } from '../../constants/routes/routes'
import { FooterAuth } from '../../components/FooterAuth'
import { logInUserAsync } from '../../redux/auth/actions'
import { GetInputsList } from '../../utils/auth/UI/GetInputsList'
import { MessageModalContext } from '../../context/messageModalContext'
import { generateInitialValues } from '../../utils/generateInitialFormikValues'
import { signInValidationSchema } from '../../utils/auth/signInValidationSchema'
import { IError } from '../../types/errorType'
import { ILogIn } from '../../redux/auth/types'

export const SignIn = () => {
  const openModal = useContext(MessageModalContext)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSubmit = async (values: ILogIn) => {
    try {
      await dispatch(logInUserAsync(values))
      navigate(ROUTES.MAIN)
    } catch (error) {
      console.dir(error)

      const typedError = error as IError
      openModal(typedError.message, true)
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
              <GetInputsList
                inputs={inputs}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
                values={values}
              />
              {/* {getInputsList(inputs, values, errors, touched, handleChange)} */}
              <FooterAuth linkName={'Register'} linkRoute={ROUTES.REGISTER} />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

// errors={errors} touched={touched} handleChange={handleChange} values={values}
