import type { AxiosResponse } from 'axios';
import { requestService } from '@infrastructure/request';
import type { ICarPreference, IProfile } from '@features/profile/profile.entity';

export const getProfile = async (userID: string): Promise<AxiosResponse<IProfile>> => {
  return await requestService.get(`/users/search`, {
    params: { filter: 'ID', value: userID },
  });
};

export const getPreferences = async (): Promise<AxiosResponse<ICarPreference>> => {
  return await requestService.get(`/cars/filters`);
};

export const postPreference = async (
  preference: ICarPreference,
): Promise<AxiosResponse> => {
  return await requestService.post(`/cars/filters`, preference);
};
