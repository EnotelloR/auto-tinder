import type { AxiosResponse } from 'axios';
import { requestService } from '@infrastructure/request';
import type {
  IAuthResponse,
  CurrentUser,
  IRegistrationUser,
} from '@features/auth/auth.entity';

export const login = async (
  username: string,
  password: string,
): Promise<AxiosResponse<IAuthResponse>> => {
  return await requestService.post('auth/login', { username, password });
};

export const register = async (
  user: IRegistrationUser,
): Promise<AxiosResponse<IAuthResponse>> => {
  return await requestService.post('/users', {
    ...user,
  });
};

export const getUserInfo = async (): Promise<AxiosResponse<CurrentUser>> => {
  return await requestService.get('/users/me');
};

export const verifyUser = async (verificationToken: string): Promise<AxiosResponse> => {
  return await requestService.post(`/users/verify/${verificationToken}`);
};
