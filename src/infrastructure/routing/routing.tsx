import { MainLayout } from '@features/layout';
import { createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import { LoginScreen } from '@screens/LoginScreen';
import { RegistrationScreen } from '@screens/RegistrationScreen';
import { MainScreen } from '@screens/MainScreen';
import { MyCarsScreen } from '@screens/MyCarsScreen/MyCarsScreen';
import { CarCreateScreen } from '@screens/CarCreateScreen';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <MainScreen /> },
      { path: routes.myCars.path, element: <MyCarsScreen /> },
      {
        path: routes.login.path,
        element: <LoginScreen />,
      },
      {
        path: routes.signup.path,
        element: <RegistrationScreen />,
      },
      {
        path: routes.carsCreate.path,
        element: <CarCreateScreen />,
      },
    ],
  },
]);
