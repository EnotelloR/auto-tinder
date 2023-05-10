import type { AxiosResponse } from 'axios';
import { requestService } from '@infrastructure/request';
import type { IProfile } from '@features/profile/profile.entity';

export const getProfile = async (userID: string): Promise<AxiosResponse<IProfile>> => {
  return await requestService.get(`/users/search`, {
    params: { filter: 'ID', value: userID },
  });
};
