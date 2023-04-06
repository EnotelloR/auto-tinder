import React from 'react';
import { Paper } from '@mui/material';
import { useMyCars } from '@features/cars/cars.hooks';
import { CarCard } from '@features/cars/components/CarCard';

export const CarsList = () => {
  const cars = useMyCars();
  return (
    <Paper>
      {cars.data?.content.map((item) => (
        <CarCard key={item.id} car={item} />
      ))}
    </Paper>
  );
};
