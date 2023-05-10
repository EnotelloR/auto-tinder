import { useQuery } from '@tanstack/react-query';
import type { IProfile } from '@features/profile/profile.entity';
import { getProfile } from '@features/profile/profile.service';

export const useProfile = (userID: string) => {
  return useQuery<IProfile, Error>(['profile', userID], async () => {
    const { data: profile } = await getProfile(userID);
    return profile;
  });
};
