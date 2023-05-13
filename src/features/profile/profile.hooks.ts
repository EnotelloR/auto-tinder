import { useMutation, useQuery } from '@tanstack/react-query';
import type {
  ICarPreference,
  IDriverLicense,
  IProfile,
} from '@features/profile/profile.entity';
import {
  getDriverLicense,
  getPreferences,
  getProfile,
  postDriverLicense,
  postPreference,
} from '@features/profile/profile.service';

export const useProfile = (userID: string) => {
  return useQuery<IProfile, Error>(['profile', userID], async () => {
    const { data: profile } = await getProfile(userID);
    return profile;
  });
};
export const usePreference = () => {
  return useQuery<ICarPreference, Error>(['preference'], async () => {
    const { data: preference } = await getPreferences();
    return preference;
  });
};

export const useAddPreference = () => {
  return useMutation({
    mutationFn: async (preference: ICarPreference) => {
      return postPreference(preference);
    },
  });
};

export const useDriverLicense = (userID: string) => {
  return useQuery<IDriverLicense, Error>(['driveLicense', userID], async () => {
    const { data: driverLicense } = await getDriverLicense();
    return driverLicense;
  });
};

export const useAddDriveLicense = () => {
  return useMutation({
    mutationFn: async (driverLicense: IDriverLicense) => {
      return postDriverLicense(driverLicense);
    },
  });
};
