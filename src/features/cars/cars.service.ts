import type { AxiosResponse } from 'axios';
import { requestService } from '@infrastructure/request';
import type {
  DetailsTypes,
  ICarCreate,
  ICarDetail,
  IGetCarsAnswer,
} from '@features/cars/cars.entity';
import type { carFilters } from '@features/cars/cars.entity';

export const createCar = async (newCar: ICarCreate): Promise<AxiosResponse> => {
  return await requestService.post('/cars', newCar);
};

// export const getAllCars = async (): Promise<AxiosResponse<IGetCarsAnswer>> => {
//   return await requestService.get(`/cars`);
// };

export const getCars = async (
  carFilter: carFilters,
  page?: number,
  size?: number,
): Promise<AxiosResponse<IGetCarsAnswer>> => {
  return await requestService.get(`/cars/search`, { params: { carFilter, page, size } });
};

// export const getMyCars = async (): Promise<AxiosResponse<ICar[]>> => {
//   return await requestService.get(`/cars/users/current`);
// };

export const getUserCars = async (userID: string | undefined): Promise<AxiosResponse> => {
  return await requestService.get(`/cars/users/${userID}`);
};

export const getDetails = async (
  type: DetailsTypes,
): Promise<AxiosResponse<ICarDetail[]>> => {
  return await requestService.get(`/cars/details`, { params: { type } });
};

export const getBrandModels = async (
  brandID: string,
): Promise<AxiosResponse<ICarDetail[]>> => {
  return await requestService.get(`/cars/brands/${brandID}/models`);
};
