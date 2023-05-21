// @flow
import * as React from 'react';
import { useCar, UseLike } from '@features/cars/cars.hooks';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { likeType } from '@features/cars';

type AboutCarProps = {
  carID: string;
};
export const AboutCar = ({ carID }: AboutCarProps) => {
  const { mutate: createLike } = UseLike();

  const submitLike = () => {
    createLike({ likeType: likeType.LIKE, carID });
  };
  const submitDislike = () => {
    createLike({ likeType: likeType.DISLIKE, carID });
  };

  const { data: car, isSuccess } = useCar(carID);
  return isSuccess ? (
    <Paper>
      <Stack gap={'1em'} px={'5em'} py={'1em'}>
        <Typography variant={'h4'}>
          {car?.brand.name} {car.model.name}
        </Typography>
        <Box
          component="img"
          alt={'Фотография автомобиля'}
          src={car.photos ? car.photos[0].photoLink : 'images/car-plug.webp'}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: '1rem',
            gap: '2em',
            width: '100%',
          }}
        >
          <Button
            variant={'contained'}
            color={'success'}
            size="small"
            onClick={submitLike}
            sx={{ flex: 1 }}
          >
            Нравится
          </Button>
          <Button
            variant={'contained'}
            color={'error'}
            size="small"
            onClick={submitDislike}
            sx={{ flex: 1 }}
          >
            Не нравится
          </Button>
        </Box>
        <Stack
          flexDirection={'row'}
          justifyContent={'space-between'}
          width={'100%'}
          gap={'1em'}
          flexWrap={'wrap'}
        >
          <Box alignSelf={'start'} flex={1}>
            <Box alignSelf={'start'} marginBottom={'2em'}>
              <Typography variant={'h4'}>Описание:</Typography>
              <Typography variant={'body1'}>{car.description}</Typography>
            </Box>
            <Typography variant={'h4'}>Характеристики:</Typography>
            <Typography variant={'body1'}>Текущий город: {car.city.name}</Typography>
            <Typography variant={'body1'}>Привод: {car.drive.name}</Typography>
            <Typography variant={'body1'}>Тип кузова: {car.body.name}</Typography>
            <Typography variant={'body1'}>Тип двигателя: {car.engine.name}</Typography>
            <Typography variant={'body1'}>Коробка передач: {car.gearbox.name}</Typography>
            <Typography variant={'body1'}>Год выпуска: {car.manufacturedAt}</Typography>
            <Typography variant={'body1'}>Пробег: {car.mileage} км.</Typography>
            <Typography variant={'body1'}>Владельцев: {car.totalOwners}</Typography>
          </Box>
          <Box display={'flex'} flexDirection={'column'} flex={1}>
            <Typography variant={'h4'}>Контактное лицо:</Typography>
            <Typography variant={'body1'}>Имя: {car.user.name}</Typography>
            <Typography variant={'body1'}>
              Номер телефона: {car.user.phone ?? 'не указан'}
            </Typography>
            <Typography variant={'body1'}>
              Почтовый адрес: {car.user.email ?? 'не указан'}
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Paper>
  ) : null;
};
