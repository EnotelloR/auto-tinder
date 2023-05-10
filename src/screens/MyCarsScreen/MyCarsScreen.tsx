import React from 'react';
import { CarsList } from '@features/cars/CarsList/CarsList';
import { Button, CircularProgress, Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { routes } from '@infrastructure/routing';
import { CarFilters } from '@features/cars';
import { useCars } from '@features/cars/cars.hooks';

export const MyCarsScreen = () => {
  const { data: cars, isSuccess, isLoading } = useCars(CarFilters.CURRENT_USER);
  return (
    <Container
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
    >
      <Typography variant={'h2'}>Мои автомобили: </Typography>
      {isLoading && <CircularProgress />}
      {isSuccess && <CarsList type={CarFilters.CURRENT_USER} cars={cars} />}
      <Button variant={'outlined'} component={RouterLink} to={routes.carsCreate.path}>
        Добавить автомобиль
      </Button>
    </Container>
  );
};
