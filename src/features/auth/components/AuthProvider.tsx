import type { FC, PropsWithChildren } from 'react';

import { useAuthStore } from '@features/auth/auth.hooks';
import { useNavigate } from 'react-router-dom';
import { routes } from '@infrastructure/routing';

export let logOut = (): void => {
  throw new Error('Function "logout" was called outside of AuthProvider');
};

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const { setAuth, setUserID } = useAuthStore();
  logOut = () => {
    localStorage.removeItem('accessToken');
    setAuth(false);
    setUserID('');
    const navigate = useNavigate();
    navigate(routes.main.path);
  };
  return <>{children}</>;
};
