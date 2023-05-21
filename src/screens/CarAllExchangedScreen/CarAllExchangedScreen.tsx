// @flow
import * as React from 'react';
import { CircularProgress, Container, Typography } from '@mui/material';
import { CarsList } from '@features/cars/CarsList/CarsList';
import { CarFilters } from '@features/cars';
import { useTinderCars } from '@features/cars/cars.hooks';

export const CarAllExchangedScreen = () => {
  const { data: cars, isSuccess, isLoading } = useTinderCars();
  return (
    <Container
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
    >
      <Typography variant={'h2'}>Все автомобили: </Typography>
      {isLoading && <CircularProgress />}
      {isSuccess && <CarsList type={CarFilters.ALL_EXCHANGED} cars={cars} />}
    </Container>
  );
};
