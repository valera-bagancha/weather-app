import { Field, FormikTouched, FormikValues } from 'formik'
import { FC } from 'react'

interface IInputs {
  className: string
  id: string
  placeholder: string
  type: string
}

interface IProps {
  inputs: IInputs[]
  values: FormikValues
  errors: FormikValues 
  touched: FormikTouched<FormikValues> 
  handleChange: (e: React.ChangeEvent) => void 
}

export const GetInputsList: FC<IProps> = ({
  inputs,
  values,
  errors,
  touched,
  handleChange,
}) => {
  
  return (
    <>
      {inputs.map(({ id, className, placeholder, type }: IInputs) => (
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
