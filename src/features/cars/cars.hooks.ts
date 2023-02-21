import {
  getMyCars,
  createCar,
  getGearboxes,
  getEngines,
  getDrives,
  getCities,
  getBrands,
  getBrandModels,
  getBodies,
} from '@features/cars/cars.service';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useAuthStore } from '@features/auth/auth.hooks';
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

const { userID } = useAuthStore();
const queryClient = useQueryClient();

export const useMyCars = () => {
  return useQuery<ICarCreate[], Error>(['myCars'], async () => {
    const { data: myCars } = await getMyCars(userID);
    return myCars;
  });
};

export const useGearboxes = () => {
  return useQuery<TGearbox[], Error>(['gearboxes'], async () => {
    const { data: gearboxes } = await getGearboxes();
    return gearboxes;
  });
};

export const useEngines = () => {
  return useQuery<TEngine[], Error>(['engines'], async () => {
    const { data: engines } = await getEngines();
    return engines;
  });
};

export const useDrives = () => {
  return useQuery<TDrive[], Error>(['drives'], async () => {
    const { data: drives } = await getDrives();
    return drives;
  });
};

export const useCities = () => {
  return useQuery<TCity[], Error>(['cities'], async () => {
    const { data: cities } = await getCities();
    return cities;
  });
};

export const useBrands = () => {
  return useQuery<TBrand[], Error>(['brands'], async () => {
    const { data: brands } = await getBrands();
    return brands;
  });
};

export const useModels = (id: string) => {
  return useQuery<TModel[], Error>(['models', id], async () => {
    const { data: models } = await getBrandModels(id);
    return models;
  });
};

export const useBodies = () => {
  return useQuery<TBody[], Error>(['bodies'], async () => {
    const { data: bodies } = await getBodies();
    return bodies;
  });
};

export const useCreateCar = () => {
  return useMutation<void, Error, ICarCreate>(async (car) => {
    return createCar(car).then(() => queryClient.invalidateQueries(['myCars', 'cars']));
  });
};
