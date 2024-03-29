import type { AxiosResponse } from 'axios';
import { requestService } from '@infrastructure/request';
import type {
  ICarGetPreference,
  ICarPreference,
  IDriverLicense,
  IProfile,
} from '@features/profile/profile.entity';

export const getProfile = async (userID: string): Promise<AxiosResponse<IProfile>> => {
  return await requestService.get(`/users/search`, {
    params: { filter: 'ID', value: userID },
  });
};

export const getPreferences = async (): Promise<AxiosResponse<ICarGetPreference>> => {
  return await requestService.get(`/cars/filters`);
};

export const postPreference = async (
  preference: ICarPreference,
): Promise<AxiosResponse> => {
  return await requestService.post(`/cars/filters`, preference);
};

export const patchPreference = async (
  preference: ICarPreference,
): Promise<AxiosResponse> => {
  return await requestService.patch(`/cars/filters`, preference);
};

export const getDriverLicense = async (): Promise<AxiosResponse<IDriverLicense>> => {
  return await requestService.get(`/users/license/`);
};

export const postDriverLicense = async (
  driveLicense: IDriverLicense,
): Promise<AxiosResponse> => {
  return await requestService.post(`/users/license`, driveLicense);
};
