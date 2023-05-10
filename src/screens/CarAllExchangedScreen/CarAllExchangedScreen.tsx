// @flow
import * as React from 'react';
import { CircularProgress, Typography } from '@mui/material';
import { CarsList } from '@features/cars/CarsList/CarsList';
import { CarFilters } from '@features/cars';
import { useCars } from '@features/cars/cars.hooks';

export const CarAllExchangedScreen = () => {
  const { data: cars, isSuccess, isLoading } = useCars(CarFilters.ALL_EXCHANGED);
  return (
    <>
      <Typography variant={'h2'}>Все автомобили: </Typography>
      {isLoading && <CircularProgress />}
      {isSuccess && <CarsList type={CarFilters.ALL_EXCHANGED} cars={cars} />}
    </>
  );
};
