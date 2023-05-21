export interface ICarCreate {
  vinCode: string;
  stateNumber: string;
  manufacturedAt: number;
  totalOwners: number;
  description?: string;
  mileage: number;
  price: number;
  isExchanged: boolean;
  isPromoted?: boolean;
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
  id: string;
  photos: { id: number; photoLink: string }[];
  isVerified: boolean;
  totalLikes: number;
  totalViews: number;
  brand: ICarDetail;
  model: ICarDetail;
  engine: ICarDetail;
  user: IUser;
  drive: ICarDetail;
  gearbox: ICarDetail;
  body: ICarDetail;
  report: {
    isMatchCharacteristics: boolean;
    totalOwners: number;
    isBanned: boolean;
    isWanted: boolean;
    totalMileageRecords: number;
  };
  city: ICarDetail;
}

export interface IAboutCar extends ICar {
  user: {
    id: string;
    name: string;
    email: string;
    phone: string;
    authority: string;
    hasPhone: boolean;
    hasCar: boolean;
    hasCarPreference: boolean;
  };
}

export interface ICarDetail {
  id: number;
  name: string;
}

export enum DetailsTypes {
  BRAND = 'BRAND',
  ENGINE = 'ENGINE',
  GEARBOX = 'GEARBOX',
  BODY = 'BODY',
  DRIVE = 'DRIVE',
  CITY = 'CITY',
}

export enum CarFilters {
  CURRENT_USER = 'CURRENT_USER',
  ALL_RENTABLE = 'ALL_RENTABLE',
  USER_ID = 'USER_ID',
  ALL_EXCHANGED = 'ALL_EXCHANGED',
}

interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  authority: string;
  hasPhone: boolean;
  hasCar: boolean;
  hasCarPreference: boolean;
}

export enum likeType {
  LIKE = 'LIKE',
  DISLIKE = 'DISLIKE',
}

export interface ILike {
  likeType: likeType;
  carID: string;
}

export interface IChangeExchange {
  isExchange: boolean;
  carID: string;
}

export interface IRent {
  rentData: {
    rentFrom: Date;
    rentTo: Date;
    price: number;
  };
  carID: string;
}
