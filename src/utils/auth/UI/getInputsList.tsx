import { Field, useFormikContext } from 'formik'
import { FC } from 'react'

interface IInputs {
  className: string
  id: string
  placeholder: string
  type: string
}

interface IValues {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  [key: string]: string;
}

interface ITouched {
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
  firstName: boolean;
  lastName: boolean;
  phoneNumber: boolean;
  // confirmPassword: boolean;
  // firstName: boolean;
  // lastName: boolean;
  // phoneNumberts:boolean;
  [key: string]: boolean
}
interface IProps {
  inputs: IInputs[]
  values: any
  errors: any
  touched: any
  handleChange: any // (e: React.ChangeEvent) => void
}

interface IErrorInput {
  email: string;
  password: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
}

// interface IGeneral {
//   errors: IErrorInput;
//   values: IValues;
//   touched: ITouched;
//   handleChange: () => void
// }

export const GetInputsList: FC<IProps> = ({
  inputs,
  values,
  errors,
  touched,
  handleChange,
}) => {
  // const { values, errors, touched, handleChange}: any = useFormikContext()

  
  return (
    <>
      {inputs.map(({ id, className, placeholder, type }: any) => (
        <div key={id}>
          <Field
            name={id}
            type={type}
            className={className}
            placeholder={placeholder}
            autoComplete="off"
            value={values[id]}
            onChange={handleChange}
          />
          {touched[id] && errors[id] && (
            <div className="auth-error">{errors[id]}</div>
          )}
        </div>
      ))}
    </>
  )
}
