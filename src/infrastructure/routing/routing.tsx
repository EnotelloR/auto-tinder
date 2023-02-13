import { MainLayout } from '@features/layout';
import { createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import { Login } from '@features/auth';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: routes.login,
        element: <Login />,
      },
    ],
  },
]);
