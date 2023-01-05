import { FC, useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

interface IProps {
  linkName: string;
  linkRoute: string
}


export const FooterAuth: FC<IProps> = ({linkName, linkRoute}) => {
  return (
    <footer>
      <div className='links-log-in'>
        <Link to={linkRoute}>
          {linkName}
        </Link>
      </div>
      <div className='box-button-auth'> 
        <button type='submit' className='button-auth'>Sign In</button>
      </div>
    </footer>
  ) 
}

