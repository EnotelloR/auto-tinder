import type { ICar } from '@features/cars';
import type { AxiosResponse } from 'axios';
import { requestService } from '@infrastructure/request';
import type { LikeFilter } from '@features/likes/likes.entity';

export const getCarLikes = async (
  carID: string,
  likeFilter: LikeFilter,
): Promise<AxiosResponse<ICar[]>> => {
  return await requestService.get(`/cars/${carID}/likes`, {
    params: { likeFilter: likeFilter },
  });
};
