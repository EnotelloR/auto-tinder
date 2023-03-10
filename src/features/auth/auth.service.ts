import { AxiosResponse } from 'axios';
import { requestService } from '@infrastructure/request';
import { AuthResponse, CurrentUser, RegistrationUser } from '@features/auth/auth.entity';

export const login = async (
  email: string,
  password: string,
): Promise<AxiosResponse<AuthResponse>> => {
  return await requestService.post('/auth/login', { email, password });
};

export const registration = async (
  user: RegistrationUser,
): Promise<AxiosResponse<AuthResponse>> => {
  return await requestService.post('/users', {
    ...user,
  });
};

export const getUserInfo = async (): Promise<AxiosResponse<CurrentUser>> => {
  return await requestService.get('/users/me');
};
