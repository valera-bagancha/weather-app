import { useContext } from 'react'
import { Formik, Form } from 'formik'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { inputs } from './constants/inputs'
import { ROUTES } from '../../constants/routes/routes'
import { FooterAuth } from '../../components/FooterAuth'
import { registerUserAsync } from '../../redux/auth/actions'
// import { GetInputsList } from '../../utils/auth/UI/GetInputsList'
import { removeObjectField } from '../../utils/removeObjectField'
import { MessageModalContext } from '../../context/messageModalContext'
import { generateInitialValues } from '../../utils/generateInitialFormikValues'
import { registerValidationSchema } from '../../utils/auth/registerValidationSchema'
import { IError } from '../../types/errorType'
import { GetInputsList } from '../../utils/auth/UI/GetInputsList'

interface IProps {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export const Register = () => {
  const openModal = useContext(MessageModalContext)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const onSubmit = async (values: IProps) => {   
    try {
      await dispatch(
        registerUserAsync(removeObjectField(values, 'confirmPassword'))
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
              {/* {getInputsList(inputs, values, errors, touched, handleChange)} */}
              <FooterAuth linkName={'Sign In'} linkRoute={ROUTES.SIGNIN} />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}


// errors={errors} touched={touched} handleChange={handleChange} values={values}