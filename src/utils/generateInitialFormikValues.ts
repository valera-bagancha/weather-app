export interface IInput {
  className: string
  id: string
  placeholder: string
  type: string
}

// interface IAcc {
//   // email: string;
//   // firstName: string;
//   // lastName: string;
//   // password: string;
//   // phoneNumber: string;
//   [key: string]: string
// }

export const generateInitialValues = (inputs: IInput[]) =>
  inputs.reduce((acc, input) => ({ ...acc, [input.id]: '' }), {})
