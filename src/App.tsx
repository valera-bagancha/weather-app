import { RouterProvider } from 'react-router-dom';

import { router } from './routes'

import './styles/reset.css'
import './styles/pages/auth.css'
import './styles/pages/userAccount.css'
import './styles/pages/main.css'
import './styles/pages/city.css'

export const App = () => <RouterProvider router={router} />


