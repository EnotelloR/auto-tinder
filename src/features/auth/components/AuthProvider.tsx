import { FC, PropsWithChildren } from 'react';

import { useAuthStore } from '@features/auth/auth.hooks';

export let logOut = (): void => {
  throw new Error('Function "logout" was called outside of AuthProvider');
};

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const { setAuth, setUserID } = useAuthStore();
  logOut = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userID');
    setAuth(false);
    setUserID('');
  };
  return <>{children}</>;
};
