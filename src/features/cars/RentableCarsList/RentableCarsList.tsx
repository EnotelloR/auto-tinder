// @flow
import * as React from 'react';
import type { ICar } from '@features/cars';
import { RentableCar } from '@features/cars/components';
import { Stack } from '@mui/material';

type RentableCarsListProps = {
  cars: ICar[];
};
export const RentableCarsList = ({ cars }: RentableCarsListProps) => {
  return (
    <Stack gap={'1em'}>
      {cars.map((car) => (
        <RentableCar key={car.id} car={car} />
      ))}
    </Stack>
  );
};
