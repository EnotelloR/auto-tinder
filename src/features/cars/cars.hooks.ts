import {
  createCar,
  getBrandModels,
  getCars,
  getDetails,
} from '@features/cars/cars.service';
import { useMutation, useQuery } from '@tanstack/react-query';
import type {
  DetailsTypes,
  ICarCreate,
  ICarDetail,
  IGetCarsAnswer,
} from '@features/cars/cars.entity';
import { carFilters } from '@features/cars/cars.entity';
import { queryClient } from '@infrastructure/query-client';

export const useMyCars = () => {
  return useQuery<IGetCarsAnswer, Error>(['myCars'], async () => {
    const { data: myCars } = await getCars(carFilters.CURRENT_USER);
    return myCars;
  });
};

export const useDetails = (detailsType: DetailsTypes) => {
  return useQuery<ICarDetail[], Error>([detailsType], async () => {
    const { data: details } = await getDetails(detailsType);
    return details;
  });
};

export const useModels = (brandID: string) => {
  return useQuery<ICarDetail[], Error>(['models', brandID], async () => {
    if (!brandID) return [];
    const { data: models } = await getBrandModels(brandID);
    return models;
  });
};

export const useCreateCar = () => {
  // return useMutation<void, Error, ICarCreate>(async (car) => {
  //   return createCar(car).then(() =>
  //     queryClient.invalidateQueries(['myCars', 'allCars']),
  //   );
  // });
  return useMutation<void, Error, ICarCreate>({
    mutationFn: async (car) => {
      return createCar(car).then(() =>
        queryClient.invalidateQueries(['myCars', 'allCars']),
      );
    },
  });
};
