export interface ICarCreate {
  userId: string;
  vinCode: string;
  stateNumber: string;
  manufacturedAt: number;
  totalOwners: number;
  description: string;
  mileage: number;
  price: number;
  isExchanged: boolean;
  isPromoted: boolean;
  body: number;
  engine: number;
  drive: number;
  gearbox: number;
  brand: number;
  model: number;
  exchangeCity: number;
}

export interface ICar
  extends Omit<
    ICarCreate,
    'body' | 'engine' | 'drive' | 'gearbox' | 'brand' | 'model' | 'exchangeCity'
  > {
  id: number;
  photos: { id: number; photoLink: string }[];
  isVerified: boolean;
  totalLikes: number;
  totalViews: number;
  brand: TBrand;
  model: TModel;
  engine: TEngine;
  user: undefined;
  drive: TDrive;
  gearbox: TGearbox;
  body: TBody;
  report: {
    isMatchCharacteristics: boolean;
    totalOwners: number;
    isBanned: boolean;
    isWanted: boolean;
    totalMileageRecords: number;
  };
  city: TCity;
  todayLikes: number;
  todayViews: number;
}

interface ICarDetail {
  id: number;
  name: string;
}

export type TGearbox = ICarDetail;
export type TEngine = ICarDetail;
export type TDrive = ICarDetail;
export type TCity = ICarDetail;
export type TBrand = ICarDetail;
export type TModel = ICarDetail;
export type TBody = ICarDetail;
