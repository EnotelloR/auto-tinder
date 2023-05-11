import * as yup from 'yup';

export const carPreferenceSchema = yup.object().shape({
  city: yup.array().of(yup.number()),
  priceStart: yup.number(),
  priceFinish: yup.number(),
  brands: yup.array().of(yup.number()),
  // models: yup.array().of(yup.number()),
  bodies: yup.array().of(yup.number()),
  gearboxes: yup.array().of(yup.number()),
  engines: yup.array().of(yup.number()),
  drives: yup.array().of(yup.number()),
  manufacturedAtStart: yup.number(),
  manufacturedAtFinish: yup.number(),
  mileageStart: yup.number(),
  mileageFinish: yup.number(),
});
