export interface IProps {
  className: string;
  id: string;
  placeholder: string;
  type: string;
}


export const generateInitialValues = (
  inputs: IProps[],
) => 
  inputs.reduce((acc: any, input: any) => ({...acc, [input.id]: ''}), {})
  