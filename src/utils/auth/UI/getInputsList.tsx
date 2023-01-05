import { Field } from 'formik'

export const getInputsList = (
  inputs: any,
  values: any,
  errors: any,
  touched: any,
  handleChange: any,
) =>
  inputs.map(({ id, className, placeholder, type }: any) => (
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
  ))
