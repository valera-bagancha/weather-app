import { createBrowserRouter, redirect } from 'react-router-dom'

import { Register } from '../pages/Register'

import { ROUTES } from '../constants/routes'
import { SignIn } from '../pages/SignIn'
import { Main } from '../pages/Main';
import { City } from '../pages/City';
import { UserAccount } from '../pages/UserAccount';

export const router = createBrowserRouter([
  {
    path: ROUTES.DEFAULT,
    loader: () => redirect(ROUTES.REGISTER)
  },
  {
    path: ROUTES.REGISTER,
    element: <Register />,
  },
  {
    path: ROUTES.SIGNIN,
    element: <SignIn />,
  },
  {
    path: ROUTES.MAIN,
    element: <Main />,
  },
  {
    path: `${ROUTES.CITY}/:id`,
    element: <City />,
  },
  {
    path: ROUTES.USER_ACCOUNT,
    element: <UserAccount />,
  },
]);
