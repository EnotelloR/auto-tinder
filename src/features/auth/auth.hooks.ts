import { create } from 'zustand';
import type {
  IAuthResponse,
  IAuthStore,
  IRegistrationUser,
} from '@features/auth/auth.entity';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getUserInfo, register } from '@features/auth/auth.service';
import { getAccessToken, getLocalUserID } from '@infrastructure/request';
import type { AxiosResponse } from 'axios';

export const useAuthStore = create<IAuthStore>((set) => ({
  isAuth: !!getAccessToken(),
  userID: getLocalUserID(),
  setAuth: (bool: boolean) => set(() => ({ isAuth: bool })),
  setUserID: (id) => set(() => ({ userID: id })),
}));

export const useCurrentUser = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  return useQuery(
    ['currentUser'],
    async () => {
      const { data } = await getUserInfo();
      return data;
    },
    { enabled: isAuth },
  );
};

export const useRegistration = () => {
  return useMutation<AxiosResponse<IAuthResponse>, Error, IRegistrationUser>((user) => {
    return register(user);
  });
};
