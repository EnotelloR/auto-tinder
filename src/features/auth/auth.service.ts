import type { AxiosResponse } from 'axios';
import { requestService } from '@infrastructure/request';
import type {
  IAuthResponse,
  CurrentUser,
  IRegistrationUser,
} from '@features/auth/auth.entity';

export const login = async (
  email: string,
  password: string,
): Promise<AxiosResponse<IAuthResponse>> => {
  return await requestService.post('/auth/login', { email, password });
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
