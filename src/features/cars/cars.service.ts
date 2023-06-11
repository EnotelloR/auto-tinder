import type { AxiosResponse } from 'axios';
import { requestService } from '@infrastructure/request';
import type {
  CarFilters,
  DetailsTypes,
  IAboutCar,
  ICar,
  ICarCreate,
  ICarDetail,
  IChangeExchange,
  ILike,
  IRent,
} from '@features/cars/cars.entity';

export const createCar = async (
  newCar: ICarCreate,
): Promise<AxiosResponse<{ id: 'string' }>> => {
  return await requestService.post('/cars', newCar);
};

export const addCarPhoto = async (props: {
  carID: string;
  photo: FileList;
}): Promise<AxiosResponse> => {
  const formData = new FormData();
  formData.append('images', props.photo[0]);
  return await requestService.post(`/cars/${props.carID}/photos`, formData, {
    headers: {
      'content-type': 'multipart/form-data',
    },
  });
};

// export const getAllCars = async (): Promise<AxiosResponse<IGetCarsAnswer>> => {
//   return await requestService.get(`/cars`);
// };

export const getCars = async (
  carFilter: CarFilters,
  page?: number,
  size?: number,
): Promise<AxiosResponse<ICar[]>> => {
  return await requestService.get(`/cars/search`, { params: { carFilter, page, size } });
};

export const getTinderCars = async (
  page?: number,
  size?: number,
): Promise<AxiosResponse<ICar[]>> => {
  return await requestService.get(`/cars/tinder`, { params: { page, size } });
};

export const getCar = async (carID: string): Promise<AxiosResponse<IAboutCar>> => {
  return await requestService.get(`/cars/${carID}`);
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

export const likeCar = async (like: ILike): Promise<AxiosResponse> => {
  return await requestService.post(
    `/cars/${like.carID}/rate`,
    {},
    { params: { rateType: like.likeType } },
  );
};

export const changeExchange = async (
  exchange: IChangeExchange,
): Promise<AxiosResponse> => {
  return await requestService.patch(`/cars/${exchange.carID}`, {
    isExchanged: exchange.isExchange,
  });
};
export const rentCar = async (rent: IRent): Promise<AxiosResponse> => {
  return await requestService.patch(`/cars/${rent.carID}`, {
    ...rent.rentData,
  });
};

export const sendIssue = async (
  carID: string,
  issueText: string,
): Promise<AxiosResponse> => {
  return await requestService.post(`/issues`, issueText, {
    params: { key: 'CAR_ID', id: carID },
  });
};
