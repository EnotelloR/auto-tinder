import * as yup from 'yup';
import type { ICarCreate } from '@features/cars';

export const carscreateSchema: yup.Schema<ICarCreate> = yup.object().shape({
  vinCode: yup
    .string()
    .required('Вы не указали VIN!')
    .test('length', 'VIN должен содержать 17 символов.', (val) => val.length === 17)
    .matches(/^[A-Za-z0-9]+$/, 'Проверьте VIN на корректность.'),
  stateNumber: yup
    .string()
    .required('Вы не указали госномер!')
    .matches(
      /^[АВЕКМНОРСТУХ|авекмнорстух]\d{3}(?<!000)[АВЕКМНОРСТУХ|авекмнорстух]{2}\d{2,3}$/,
      // /^[а-я]\d{3}[а-я]{2}\d{2,3}/,
      'Проверьте госномер на корректность.',
    ),
  manufacturedAt: yup
    .number()
    .typeError('Вы не указали год производства!')
    .min(1886, 'Проверьте год выпуска!')
    .max(new Date().getFullYear(), 'Проверьте год выпуска!')
    .required('Вы не указали год производства!'),
  totalOwners: yup
    .number()
    .typeError('Вы не указали количество владельце!')
    .required('Вы не указали количество владельцев!'),
  description: yup.string(),
  mileage: yup
    .number()
    .typeError('Вы не указали пробег!')
    .required('Вы не указали пробег!')
    .max(999999, 'Проверьте пробег на корректность!'),
  price: yup
    .number()
    .typeError('Вы не указали цену!')
    .required()
    .max(999999999, 'Цена несколько завышена :)'),
  isExchanged: yup.boolean().required(),
  isPromoted: yup.boolean(),
  body: yup.number().required('Вы не выбрали кузов!'),
  engine: yup.number().required('Вы не выбрали двигатель!'),
  drive: yup.number().required('Вы не выбрали привод'),
  gearbox: yup.number().required('Вы не выбрали коробку передач!'),
  brand: yup.number().required('Вы не выбрали бренд!'),
  model: yup.number().required('Вы не выбрали модель!'),
  exchangeCity: yup.number().required('Вы не выбрали город!'),
});
