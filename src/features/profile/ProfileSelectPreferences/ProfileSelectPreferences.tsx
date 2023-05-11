// @flow
import * as React from 'react';
import { Box, Button, Paper, Stack, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import type { ICarPreference } from '@features/profile/profile.entity';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { carPreferenceSchema } from '@features/profile/ProfileSelectPreferences/carPreference.schema';
import { PreferenceSelect } from '@features/profile/ProfileSelectPreferences/components';
import { useDetails } from '@features/cars/cars.hooks';
import { DetailsTypes } from '@features/cars';
import { useAddPreference, usePreference } from '@features/profile';
import { useAlert } from '@features/alert';

export const ProfileSelectPreferences = () => {
  const preference = usePreference();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ICarPreference>({
    resolver: yupResolver(carPreferenceSchema),
    defaultValues: preference.data,
  });

  const alert = useAlert();

  const brands = useDetails(DetailsTypes.BRAND);
  const engines = useDetails(DetailsTypes.ENGINE);
  const gearboxes = useDetails(DetailsTypes.GEARBOX);
  const bodies = useDetails(DetailsTypes.BODY);
  const drives = useDetails(DetailsTypes.DRIVE);
  const cities = useDetails(DetailsTypes.CITY);
  const { mutateAsync } = useAddPreference();

  const onSubmit = (data: ICarPreference) => {
    mutateAsync(data)
      .then(() =>
        alert({ text: 'Вы успешно добавили предпочтение!', severity: 'success' }),
      )
      .catch((error) => alert({ text: error.message, severity: 'error' }));
  };

  return (
    <Paper sx={{ borderRadius: '1em', my: 1 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={'1em'} sx={{ p: 2 }}>
          <Stack flexDirection={'row'} px={4} gap={4}>
            <TextField
              {...register('priceStart', { required: true })}
              error={!!errors.priceStart}
              label={
                errors.priceStart
                  ? errors.priceStart.message?.toString()
                  : 'Минимальная цена'
              }
              sx={{ flex: 1 }}
            />
            <TextField
              {...register('priceFinish', { required: true })}
              error={!!errors.priceFinish}
              label={
                errors.priceFinish
                  ? errors.priceFinish.message?.toString()
                  : 'Максимальная цена'
              }
              sx={{ flex: 1 }}
            />
          </Stack>
          <Stack flexDirection={'row'} px={4} gap={4}>
            {brands.data && (
              <PreferenceSelect
                label={'Брэнд'}
                control={control}
                formName={'brands'}
                data={brands.data}
              />
            )}
            {bodies.data && (
              <PreferenceSelect
                label={'Кузов'}
                control={control}
                formName={'bodies'}
                data={bodies.data}
              />
            )}
          </Stack>
          <Stack flexDirection={'row'} px={4} gap={4}>
            {gearboxes.data && (
              <PreferenceSelect
                label={'Коробка передач'}
                control={control}
                formName={'gearboxes'}
                data={gearboxes.data}
              />
            )}
            {engines.data && (
              <PreferenceSelect
                label={'Двигатель'}
                control={control}
                formName={'engines'}
                data={engines.data}
              />
            )}
          </Stack>
          <Stack flexDirection={'row'} px={4} gap={4}>
            {drives.data && (
              <PreferenceSelect
                label={'Привод'}
                control={control}
                formName={'drives'}
                data={drives.data}
              />
            )}
            {cities.data && (
              <PreferenceSelect
                label={'Город'}
                control={control}
                formName={'city'}
                data={cities.data}
              />
            )}
          </Stack>
          <Stack flexDirection={'row'} px={4} gap={4}>
            <TextField
              {...register('manufacturedAtStart', { required: true })}
              error={!!errors.manufacturedAtStart}
              label={
                errors.manufacturedAtStart
                  ? errors.manufacturedAtStart.message?.toString()
                  : 'Минимальный год выпуска'
              }
              sx={{ flex: 1 }}
            />
            <TextField
              {...register('manufacturedAtFinish', { required: true })}
              error={!!errors.manufacturedAtFinish}
              label={
                errors.manufacturedAtFinish
                  ? errors.manufacturedAtFinish.message?.toString()
                  : 'Максимальный год выпуска'
              }
              sx={{ flex: 1 }}
            />
          </Stack>
          <Stack flexDirection={'row'} px={4} gap={4}>
            <TextField
              {...register('mileageStart', { required: true })}
              error={!!errors.mileageStart}
              label={
                errors.mileageStart
                  ? errors.mileageStart.message?.toString()
                  : 'Минимальный пробег (км.)'
              }
              sx={{ flex: 1 }}
            />
            <TextField
              {...register('mileageFinish', { required: true })}
              error={!!errors.mileageFinish}
              label={
                errors.mileageFinish
                  ? errors.mileageFinish.message?.toString()
                  : 'Максимальный пробег (км.)'
              }
              sx={{ flex: 1 }}
            />
          </Stack>
          <Box mx={'auto'}>
            <Button type={'submit'} variant={'contained'} size={'large'}>
              Сохранить
            </Button>
          </Box>
        </Stack>
      </form>
    </Paper>
  );
};
