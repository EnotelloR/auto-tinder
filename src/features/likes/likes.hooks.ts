import type { ICar } from '@features/cars';
import { useQuery } from '@tanstack/react-query';
import type { LikeFilter } from '@features/likes/likes.entity';
import { getCarLikes } from '@features/likes/likes.service';

export const useLikes = (likeFilter: LikeFilter, carID: string) => {
  return useQuery<ICar[], Error>([likeFilter], async () => {
    const { data: carsLikes } = await getCarLikes(carID, likeFilter);
    return carsLikes;
  });
};
