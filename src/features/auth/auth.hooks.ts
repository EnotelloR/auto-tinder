import { create } from 'zustand';
import { IAuthStore } from '@features/auth/auth.entity';
import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '@features/auth/auth.service';
import { getAccessToken, getLocalUserID } from '@infrastructure/request';

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
