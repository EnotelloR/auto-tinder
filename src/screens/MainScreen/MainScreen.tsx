import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { CarsList } from '@features/cars/CarsList';
import { useCars } from '@features/cars/cars.hooks';
import { CarFilters } from '@features/cars';

export const MainScreen = () => {
  const { data: cars, isSuccess } = useCars(CarFilters.ALL_EXCHANGED);
  return (
    <Container>
      <Typography variant={'h1'} textAlign={'center'} my={1}>
        Автотиндер
      </Typography>
      <Box>{isSuccess && <CarsList type={CarFilters.ALL_EXCHANGED} cars={cars} />}</Box>
    </Container>
  );
};
