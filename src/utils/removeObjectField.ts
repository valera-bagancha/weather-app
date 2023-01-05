export const removeObjectField = (object: any, fieldName: string) => {
  const objectCopy = { ...object }
  delete objectCopy[fieldName]
  return objectCopy
}
