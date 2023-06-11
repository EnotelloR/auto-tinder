import React, { useMemo } from 'react';
import { Container, Paper, Typography } from '@mui/material';
import { CarCard } from '@features/cars/components/CarCard';
import type { ICar } from '@features/cars';
import { CarFilters } from '@features/cars';
import { useAuthStore } from '@features/auth/auth.hooks';

interface CarsListProps {
  type: CarFilters;
  cars: ICar[];
  garageView?: boolean;
}

export const CarsList = ({ type, cars, garageView }: CarsListProps) => {
  const isExchangeInMyCars = useMemo(
    () => cars && !!cars.find((car) => car.isExchanged),
    [cars],
  );
  const userID = useAuthStore((state) => state.userID);
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
          cars.map((item) =>
            type !== CarFilters.CURRENT_USER ? (
              item.user.id !== userID && (
                <CarCard
                  key={item.id}
                  car={item}
                  type={type}
                  noExchangeInCars={!isExchangeInMyCars}
                />
              )
            ) : (
              <CarCard
                key={item.id}
                car={item}
                type={type}
                noExchangeInCars={!isExchangeInMyCars}
              />
            ),
          )
        ) : (
          <Typography>Автомобилей не найдено!</Typography>
        )}
      </Container>
    </Paper>
  );
};
