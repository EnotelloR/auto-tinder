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
  id: number;
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
  todayLikes: number;
  todayViews: number;
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

export enum carFilters {
  CURRENT_USER = 'CURRENT_USER',
  ALL_PROMOTED = 'ALL_PROMOTED',
  USER_ID = 'USER_ID',
  ALL = 'ALL',
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

export interface IGetCarsAnswer {
  totalElements: number;
  totalPages: number;
  size: number;
  content: ICar[];
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  pageable: {
    offset: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  };
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;

  id: string;
}
