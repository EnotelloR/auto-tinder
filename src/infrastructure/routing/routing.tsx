import { MainLayout } from '@features/layout';
import { createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import { LoginScreen } from '@screens/LoginScreen';
import { RegistrationScreen } from '@screens/RegistrationScreen';
import { MainScreen } from '@screens/MainScreen';
import { MyCarsScreen } from '@screens/MyCarsScreen/MyCarsScreen';
import { CarCreateScreen } from '@screens/CarCreateScreen';
import { VerifyScreen } from '@screens/VerifyScreen';
import { CarAllExchangedScreen } from '@screens/CarAllExchangedScreen';
import { AboutCarScreen } from '@screens/AboutCarScreen';
import { ProfileScreen } from '@screens/ProfileScreen';
import { RentCarsScreen } from '@screens/RentCarsScreen';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <MainScreen /> },
      { path: routes.myCars.path, element: <MyCarsScreen /> },
      { path: routes.allExchangedCarsScreen.path, element: <CarAllExchangedScreen /> },
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
      {
        path: routes.verify.path,
        element: <VerifyScreen />,
      },
      {
        path: routes.aboutCar.path,
        element: <AboutCarScreen />,
      },
      {
        path: routes.profile.path,
        element: <ProfileScreen />,
      },
      {
        path: routes.rentCars.path,
        element: <RentCarsScreen />,
      },
    ],
  },
]);
