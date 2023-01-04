import { Field } from 'formik'

export const getInputsList = ( inputs: any, errors: any, touched: any) =>
inputs.map(({ id, className, placeholder, type }: any) => (
    <div key={id}>
      <Field name={id} type={type} className={className} placeholder={placeholder} autocomplete="off" />
      {touched[id] && errors[id] && (
        <div className="auth-error">{errors[id]}</div>
      )}
    </div>
  ))
