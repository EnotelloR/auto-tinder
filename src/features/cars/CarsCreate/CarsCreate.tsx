import React from 'react';
import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import type { FieldValues } from 'react-hook-form';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { carscreateSchema } from '@features/cars/CarsCreate/carscreate.schema';
import type { ICarCreate } from '@features/cars';
import { DetailsTypes } from '@features/cars';
import { useCreateCar, useDetails, useModels } from '@features/cars/cars.hooks';
import { DetailsSelect } from '@features/cars/components';
import { CarsList } from '@features/cars/CarsList/CarsList';
import { useAlert } from '@features/alert';

export const CarsCreate = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(carscreateSchema) });

  const selectedBrand = watch('brand', '');

  const brands = useDetails(DetailsTypes.BRAND);
  const engines = useDetails(DetailsTypes.ENGINE);
  const gearboxes = useDetails(DetailsTypes.GEARBOX);
  const bodies = useDetails(DetailsTypes.BODY);
  const drives = useDetails(DetailsTypes.DRIVE);
  const cities = useDetails(DetailsTypes.CITY);

  const { mutateAsync: createCar } = useCreateCar();

  const models = useModels(selectedBrand);

  const startAlert = useAlert();

  const onSubmit = (data: FieldValues) => {
    createCar(data as ICarCreate).then(
      () => {
        startAlert({ text: 'Автомобиль успешно добавлен!', severity: 'success' });
      },
      () => {
        startAlert({ text: 'Произошла ошибка!', severity: 'error' });
      },
    );
  };

  return (
    <Paper>
      <CarsList />
      <Container
        maxWidth={'sm'}
        component={'form'}
        onSubmit={handleSubmit(onSubmit, (data) => console.log(data))}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          alignItems: 'center',
        }}
      >
        <Typography variant={'h4'}>Добавьте автомобиль</Typography>
        <TextField
          type={'string'}
          {...register('vinCode', { required: true })}
          error={!!errors.vinCode}
          label={errors.vinCode ? errors.vinCode.message?.toString() : 'VIN'}
        />
        <TextField
          type={'string'}
          {...register('stateNumber', { required: true })}
          error={!!errors.stateNumber}
          label={errors.stateNumber ? errors.stateNumber.message?.toString() : 'Госномер'}
        />
        <TextField
          type={'input'}
          {...register('manufacturedAt', { required: true })}
          label={
            errors.manufacturedAt
              ? errors.manufacturedAt.message?.toString()
              : 'Год выпуска'
          }
        />
        <TextField
          type={'string'}
          {...register('totalOwners', { required: true })}
          error={!!errors.totalOwners}
          label={
            errors.totalOwners
              ? errors.totalOwners.message?.toString()
              : 'Количество владельцев'
          }
        />
        <TextField
          type={'string'}
          {...register('description')}
          error={!!errors.description}
          label={errors.description ? errors.description.message?.toString() : 'Описание'}
        />
        <TextField
          type={'string'}
          {...register('mileage', { required: true })}
          error={!!errors.mileage}
          label={errors.mileage ? errors.mileage.message?.toString() : 'Пробег'}
        />
        <TextField
          type={'string'}
          {...register('price', { required: true })}
          error={!!errors.price}
          label={errors.price ? errors.price.message?.toString() : 'Цена'}
        />
        <FormControlLabel
          control={
            <Controller
              name="isExchanged"
              control={control}
              defaultValue={false}
              render={({ field }) => <Checkbox {...field} />}
            />
          }
          label="Готов к обмену"
        />
        <DetailsSelect
          label={'Кузов'}
          data={bodies.data ?? []}
          registerName={'body'}
          register={register}
          requiredText={'Выберите кузов!'}
          isError={!!errors.body}
        />
        <DetailsSelect
          label={'Двигатель'}
          data={engines.data ?? []}
          registerName={'engine'}
          register={register}
          requiredText={'Выберите двигатель!'}
          isError={!!errors.engine}
        />
        <DetailsSelect
          label={'Привод'}
          data={drives.data ?? []}
          registerName={'drive'}
          register={register}
          requiredText={'Выберите привод!'}
          isError={!!errors.drive}
        />
        <DetailsSelect
          label={'Коробка передач'}
          data={gearboxes.data ?? []}
          registerName={'gearbox'}
          register={register}
          requiredText={'Выберите коробку передач!'}
          isError={!!errors.gearbox}
        />
        <DetailsSelect
          label={'Марка'}
          data={brands.data ?? []}
          registerName={'brand'}
          register={register}
          requiredText={'Выберите марку!'}
          isError={!!errors.brand}
        />
        <DetailsSelect
          label={'Модель'}
          data={models?.data ?? []}
          registerName={'model'}
          register={register}
          requiredText={'Выберите модель!'}
          isError={!!errors.model}
          disabled={!selectedBrand}
        />
        <DetailsSelect
          label={'Ваш город'}
          data={cities.data ?? []}
          registerName={'exchangeCity'}
          register={register}
          requiredText={'Выберите город!'}
          isError={!!errors.exchangeCity}
        />
        <Button
          variant={'contained'}
          size={'large'}
          sx={{ width: '20%' }}
          type={'submit'}
        >
          Создать
        </Button>
        ыыыыыsssssss
      </Container>
    </Paper>
  );
};
