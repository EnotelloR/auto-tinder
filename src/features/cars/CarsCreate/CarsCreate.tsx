import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Input,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import type { FieldValues } from 'react-hook-form';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { carscreateSchema } from '@features/cars/CarsCreate/carscreate.schema';
import type { ICarCreate } from '@features/cars';
import { DetailsTypes } from '@features/cars';
import {
  useAddCarPhoto,
  useCreateCar,
  useDetails,
  useModels,
} from '@features/cars/cars.hooks';
import { DetailsSelect } from '@features/cars/components';
import { CarsList } from '@features/cars/CarsList/CarsList';
import { useAlert } from '@features/alert';

export const CarsCreate = () => {
  const [image, setImage] = useState<FileList>();
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(carscreateSchema), mode: 'onChange' });

  const selectedBrand = watch('brand', '');

  const brands = useDetails(DetailsTypes.BRAND);
  const engines = useDetails(DetailsTypes.ENGINE);
  const gearboxes = useDetails(DetailsTypes.GEARBOX);
  const bodies = useDetails(DetailsTypes.BODY);
  const drives = useDetails(DetailsTypes.DRIVE);
  const cities = useDetails(DetailsTypes.CITY);

  const { mutateAsync: createCar } = useCreateCar();
  const { mutateAsync: addCarPhoto } = useAddCarPhoto();

  const models = useModels(selectedBrand);

  const startAlert = useAlert();

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.files && setImage(e.target.files);
  };

  const onSubmit = (data: FieldValues) => {
    createCar(data as ICarCreate).then(
      (carID) => {
        image &&
          addCarPhoto({ carID: carID, photo: image }).then(() =>
            startAlert({ text: 'Автомобиль успешно добавлен!', severity: 'success' }),
          );
      },
      () => {
        startAlert({ text: 'Произошла ошибка!', severity: 'error' });
      },
    );
  };

  return (
    <Paper>
      <Container
        maxWidth={'sm'}
        component={'form'}
        onSubmit={handleSubmit(onSubmit, (data) => console.log(data))}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          alignItems: 'stretch',
          padding: '1rem',
        }}
      >
        <Box display={'flex'} justifyContent={'center'}>
          <Typography variant={'h4'}>Добавьте автомобиль</Typography>
        </Box>
        <Stack gap={'1rem'} flexDirection={'row'} justifyContent={'space-evenly'}>
          <TextField
            fullWidth
            type={'string'}
            {...register('vinCode', { required: true })}
            error={!!errors.vinCode}
            label={errors.vinCode ? errors.vinCode.message?.toString() : 'VIN'}
          />
          <TextField
            fullWidth
            type={'string'}
            {...register('stateNumber', { required: true })}
            error={!!errors.stateNumber}
            label={
              errors.stateNumber ? errors.stateNumber.message?.toString() : 'Госномер'
            }
          />
        </Stack>
        <Stack gap={'1rem'} flexDirection={'row'} justifyContent={'space-evenly'}>
          <TextField
            fullWidth
            type={'input'}
            {...register('manufacturedAt', { required: true })}
            label={
              errors.manufacturedAt
                ? errors.manufacturedAt.message?.toString()
                : 'Год выпуска'
            }
          />
          <TextField
            fullWidth
            type={'string'}
            {...register('totalOwners', { required: true })}
            error={!!errors.totalOwners}
            label={
              errors.totalOwners
                ? errors.totalOwners.message?.toString()
                : 'Количество владельцев'
            }
          />
        </Stack>
        <Stack gap={'1rem'} flexDirection={'row'} justifyContent={'space-evenly'}>
          <TextField
            fullWidth
            multiline
            type={'string'}
            {...register('description')}
            error={!!errors.description}
            label={
              errors.description ? errors.description.message?.toString() : 'Описание'
            }
          />
          <TextField
            fullWidth
            type={'string'}
            {...register('mileage', { required: true })}
            error={!!errors.mileage}
            label={errors.mileage ? errors.mileage.message?.toString() : 'Пробег (км)'}
          />
        </Stack>
        <Stack gap={'1rem'} flexDirection={'row'} justifyContent={'space-evenly'}>
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
        </Stack>
        <Stack gap={'1rem'} flexDirection={'row'} justifyContent={'space-evenly'}>
          <DetailsSelect
            sx={{ flex: 1 }}
            label={'Привод'}
            data={drives.data ?? []}
            registerName={'drive'}
            register={register}
            requiredText={'Выберите привод!'}
            isError={!!errors.drive}
          />
          <DetailsSelect
            sx={{ flex: 1 }}
            label={'Коробка передач'}
            data={gearboxes.data ?? []}
            registerName={'gearbox'}
            register={register}
            requiredText={'Выберите коробку передач!'}
            isError={!!errors.gearbox}
          />
        </Stack>
        <Stack gap={'1rem'} flexDirection={'row'} justifyContent={'space-evenly'}>
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
        </Stack>
        <Stack gap={'1rem'} flexDirection={'row'} justifyContent={'space-evenly'}>
          <DetailsSelect
            sx={{ flex: 1 }}
            label={'Ваш город'}
            data={cities.data ?? []}
            registerName={'exchangeCity'}
            register={register}
            requiredText={'Выберите город!'}
            isError={!!errors.exchangeCity}
          />
          <TextField
            fullWidth
            type={'string'}
            {...register('price', { required: true })}
            error={!!errors.price}
            label={errors.price ? errors.price.message?.toString() : 'Цена (тыс. руб.)'}
          />
        </Stack>
        <Stack gap={'1rem'} flexDirection={'row'} justifyContent={'space-evenly'}>
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
          <FormControlLabel
            control={
              <Controller
                name="isPromoted"
                control={control}
                defaultValue={false}
                render={({ field }) => <Checkbox {...field} />}
              />
            }
            label="Включить продвижение"
          />
        </Stack>
        <Stack alignItems={'center'}>
          <Button variant="contained" component="label">
            Загрузить фотографию машины
            <Controller
              name="image"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="file"
                  onChange={onImageChange}
                  accept="image/png, image/jpeg"
                  hidden
                />
              )}
            />
          </Button>
          <p>{errors.image && errors.image.message?.toString()}</p>
        </Stack>
        <Stack alignItems={'center'}>
          <Button
            variant={'contained'}
            size={'large'}
            sx={{ width: '20%' }}
            type={'submit'}
          >
            Создать
          </Button>
        </Stack>
      </Container>
    </Paper>
  );
};
