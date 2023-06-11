export interface ICarCriteria {
  cleanCondition: number;
  safety: number;
  state: number;
  techRate: number;
  comfort: number;
}

export interface ITenantCriteria {
  chat: number;
  neatness: number;
  returnQuality: number;
}

export interface IRenterCriteria {
  pricing: number;
  service: number;
  safety: number;
  carQuality: number;
  rentConditions: number;
}

export interface IFeedback {
  carId: string;
  userId: string;
  totalRating: number;
  criteria: ICarCriteria | ITenantCriteria | IRenterCriteria;
  comment: string;
  isAnonymous: boolean;
}

export enum Criteria {
  Tenant = 'Tenant',
  Car = 'Car',
  Renter = 'Renter',
}

export enum FeedbackType {
  RENTER = 'RENTER',
  TENANT = 'TENANT',
  CAR = 'CAR',
}

export interface IFeedbackResponse {
  carId: string;
  commentOwner: {
    userId: string;
    username: string;
    createdAt: Date;
    updatedAt: Date;
  };
  totalRating: number;
  criteria: ICarCriteria | ITenantCriteria | IRenterCriteria;
  comment: string;
}
