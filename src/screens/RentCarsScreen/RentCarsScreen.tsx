// @flow
import * as React from 'react';
import { useCars } from '@features/cars/cars.hooks';
import { CarFilters } from '@features/cars';
import { Typography } from '@mui/material';
import { RentableCarsList } from '@features/cars/RentableCarsList/RentableCarsList';

export const RentCarsScreen = () => {
  const { data: cars, isSuccess } = useCars(CarFilters.ALL_RENTABLE);
  return (
    <div>
      <Typography variant={'h2'}>Машины в аренду</Typography>
      {isSuccess && <RentableCarsList cars={cars} />}
    </div>
  );
};
