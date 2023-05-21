import React, { useMemo } from 'react';
import { Container, Paper, Typography } from '@mui/material';
import { CarCard } from '@features/cars/components/CarCard';
import type { CarFilters, ICar } from '@features/cars';

interface CarsListProps {
  type: CarFilters;
  cars: ICar[];
}

export const CarsList = ({ type, cars }: CarsListProps) => {
  const isExchangeInMyCars = useMemo(
    () => cars && !!cars.find((car) => car.isExchanged),
    [cars],
  );
  return (
    <Paper sx={{ width: '100%' }}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '1rem',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {cars.length > 0 ? (
          cars.map((item) => (
            <CarCard
              key={item.id}
              car={item}
              type={type}
              noExchangeInCars={!isExchangeInMyCars}
            />
          ))
        ) : (
          <Typography>Автомобилей не найдено!</Typography>
        )}
      </Container>
    </Paper>
  );
};
