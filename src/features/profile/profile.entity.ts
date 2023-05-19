export interface IProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  authority: string;
  hasPhone: boolean;
  hasCar: boolean;
  hasCarPreference: boolean;
}

export interface ICarPreference {
  city: number[];
  priceStart: number;
  priceFinish: number;
  brands: number[];
  // models: number[];
  bodies: number[];
  gearboxes: number[];
  engines: number[];
  drives: number[];
  manufacturedAtStart: number;
  manufacturedAtFinish: number;
  mileageStart: number;
  mileageFinish: number;
}

export interface ICarGetPreference extends ICarPreference {
  id: string;
}

export interface IDriverLicense {
  birthdate: Date;
  birthPlace: string;
  issuedAt: Date;
  validityPeriod: number;
  divisionName: string;
  passportNumber: string;
  driveCategory: string;
}
