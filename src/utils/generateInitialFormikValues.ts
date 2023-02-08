export interface IInput {
  className: string
  id: string
  placeholder: string
  type: string
}


export const generateInitialValues = (inputs: IInput[]) =>
  inputs.reduce((acc, input) => ({ ...acc, [input.id]: '' }), {})
