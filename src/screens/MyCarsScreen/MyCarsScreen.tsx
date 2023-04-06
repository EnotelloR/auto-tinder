import React from 'react';
import { CarsList } from '@features/cars/CarsList/CarsList';
import { Button, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { routes } from '@infrastructure/routing';

export const MyCarsScreen = () => {
  return (
    <>
      <Typography variant={'h2'}>Мои автомобили: </Typography>
      <CarsList />
      <Button component={RouterLink} to={routes.carsCreate.path}>
        Добавить автомобиль
      </Button>
    </>
  );
};
