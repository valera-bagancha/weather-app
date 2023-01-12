import { ROUTES } from '../constants/routes/routes'
import { City } from '../pages/City'
import { Main } from '../pages/Main'
import { Register } from '../pages/Register'
import { SignIn } from '../pages/SignIn'
import { UserAccount } from '../pages/UserAccount'

export const routesDescription = [
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
]
