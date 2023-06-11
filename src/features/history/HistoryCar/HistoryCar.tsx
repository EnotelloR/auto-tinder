// @flow
import * as React from 'react';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import type { ICar } from '@features/cars';
import { routes } from '@infrastructure/routing';
import { Criteria } from '@features/feedback/feedback.entity';
import { useNavigate } from 'react-router-dom';

type HistoryCarProps = { car: ICar };
export const HistoryCar = ({ car }: HistoryCarProps) => {
  const navigate = useNavigate();
  const openFeedbackScreen = () => {
    navigate(routes.feedback.path, {
      state: {
        carId: car.id,
        userId: car.user.id,
        criteria: Criteria.Car,
      },
    });
  };
  return (
    <Paper>
      <Stack
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        gap={'1em'}
        p={'1em'}
      >
        <Box
          component="img"
          alt={'Фотография автомобиля'}
          src={car.photos ? car.photos[0].photoLink : 'images/car-plug.webp'}
          flex={2}
          maxWidth={'10em'}
          borderRadius={'1em'}
        />
        <Typography flex={1} fontSize={'1.5rem'}>
          {car.brand.name} {car.model.name}
        </Typography>
        <Button variant={'contained'} onClick={openFeedbackScreen}>
          Оставить отзыв
        </Button>
      </Stack>
    </Paper>
  );
};
