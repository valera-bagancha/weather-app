import { FC } from 'react'

interface IProps {
  linkName: string
}

export const FooterAuth: FC<IProps> = ({linkName}: any) => {
  return (
    <footer>
      <div className='links-log-in'>
        <a>{linkName}</a>
      </div>
      <div className='box-button-auth'>
        <button className='button-auth'>Sign In</button>
      </div>
    </footer>
  ) 
}

