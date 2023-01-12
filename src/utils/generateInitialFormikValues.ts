
export const generateInitialValues = (
  inputs: any,
) => 
  inputs.reduce((acc: any, input: any) => ({...acc, [input.id]: ''}), {})