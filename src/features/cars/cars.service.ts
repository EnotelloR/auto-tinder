import { AxiosResponse } from 'axios';
import { requestService } from '@infrastructure/request';
import {
  ICarCreate,
  TBody,
  TBrand,
  TCity,
  TDrive,
  TEngine,
  TGearbox,
  TModel,
} from '@features/cars/cars.entity';

export const createCar = async (newCar: ICarCreate): Promise<AxiosResponse> => {
  return await requestService.post('/cars', newCar);
};

export const getAllCars = async (): Promise<AxiosResponse> => {
  return await requestService.get(`/cars`);
};

export const getMyCars = async (userID: string | undefined): Promise<AxiosResponse> => {
  return await requestService.get(`/cars/users/${userID}`);
};

export const getGearboxes = async (): Promise<AxiosResponse<TGearbox[]>> => {
  return await requestService.get(`/cars/gearboxes`);
};

export const getEngines = async (): Promise<AxiosResponse<TEngine[]>> => {
  return await requestService.get(`/cars/engines`);
};

export const getDrives = async (): Promise<AxiosResponse<TDrive[]>> => {
  return await requestService.get(`/cars/drives`);
};

export const getCities = async (): Promise<AxiosResponse<TCity[]>> => {
  return await requestService.get(`/cars/drives`);
};

export const getBrands = async (): Promise<AxiosResponse<TBrand[]>> => {
  return await requestService.get(`/cars/brands`);
};

export const getBrandModels = async (
  modelID: string,
): Promise<AxiosResponse<TModel[]>> => {
  return await requestService.get(`/cars/brands/${modelID}/models`);
};

export const getBodies = async (): Promise<AxiosResponse<TBody[]>> => {
  return await requestService.get(`/cars/bodies`);
};
