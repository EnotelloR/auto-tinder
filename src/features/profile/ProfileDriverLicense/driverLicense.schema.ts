import * as yup from 'yup';

export const driverLicenseSchema = yup.object().shape({
  birthdate: yup.date(),
  birthPlace: yup.string(),
  issuedAt: yup.date(),
  validityPeriod: yup.date(),
  divisionName: yup.string(),
  passportNumber: yup.string(),
  driveCategory: yup.array().of(yup.string()),
});
