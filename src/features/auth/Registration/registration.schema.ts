import * as yup from 'yup';
export const registrationSchema = yup.object().shape({
  email: yup
    .string()
    .max(255, 'Слишком много символов.')
    .matches(
      /^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$/,
      'Вы должны ввести действительную почту.',
    ),
  name: yup
    .string()
    .required('Вы не ввели ваше имя!')
    .max(50, 'Вы превысили максимальное количество символов.'),
  password: yup
    .string()
    .required('Вы не ввели пароль!')
    .min(8, 'Пароль должен содержать от 8 символов!')
    .matches(/[0-9]/, 'Пароль должен содержать хотя бы 1 цифру!')
    .matches(/[a-z]/, 'В пароле должна быть 1 строчная буква!')
    .matches(/[A-Z]/, 'В пароле должна быть 1 заглавная буква!'),
  // .matches(/[^\w]/, 'Пароль должен содержать специальный символ!')
  passwordRepeat: yup
    .string()
    .required('Вы не ввели пароль!')
    .oneOf([yup.ref('password')], 'Пароли не совпадают!'),
});
