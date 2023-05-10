import {
  addCarPhoto,
  changeExchange,
  createCar,
  getBrandModels,
  getCar,
  getCars,
  getDetails,
  likeCar,
} from '@features/cars/cars.service';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type {
  DetailsTypes,
  ICarCreate,
  ICarDetail,
  ILike,
  ICar,
} from '@features/cars/cars.entity';
import { CarFilters } from '@features/cars/cars.entity';
import type { IChangeExchange } from '@features/cars/cars.entity';

export const useCars = (type: CarFilters) => {
  return useQuery<ICar[], Error>([type], async () => {
    const { data: myCars } = await getCars(type);
    return myCars;
  });
};

export const useCar = (carID: string) => {
  return useQuery<ICar, Error>(['aboutCar'], async () => {
    const { data: car } = await getCar(carID);
    return car;
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
  // return useMutation<void, Error, ICarCreate>({
  //   mutationFn: (car) => {
  //     return createCar(car).then((answer) => return answer.data.id);
  //   },
  //   onSuccess: () => queryClient.invalidateQueries(['myCars', 'allCars']),
  // });
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (car: ICarCreate) => {
      return createCar(car).then((answer) => answer.data.id);
    },
    onSuccess: () => queryClient.invalidateQueries(['myCars', 'allCars']),
  });
};
export const useAddCarPhoto = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (props: { photo: FileList; carID: string }) => {
      return addCarPhoto(props);
    },
    onSuccess: () => queryClient.invalidateQueries(['myCars', 'allCars']),
  });
};

export const UseLike = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (like: ILike) => {
      return likeCar(like);
    },
    onSuccess: () => {
      queryClient.invalidateQueries([CarFilters.CURRENT_USER]);
      queryClient.invalidateQueries([CarFilters.ALL_EXCHANGED]);
    },
  });
};

export const useChangeExchange = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (exchange: IChangeExchange) => {
      return changeExchange(exchange);
    },
    onSuccess: () => {
      console.log('Запускаю инвалидацию');
      queryClient.invalidateQueries([CarFilters.CURRENT_USER]);
      queryClient.invalidateQueries([CarFilters.ALL_EXCHANGED]);
    },
  });
};
