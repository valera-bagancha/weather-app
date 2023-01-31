interface IProps {
  confirmPassword: string
  email: string
  firstName: string
  lastName: string
  password: string
  phoneNumber: string
  [key: string]: any
}

export const removeObjectField = (object: any, fieldName: string) => {
  
  const objectCopy = { ...object }
  delete objectCopy[fieldName]
  return objectCopy
}
