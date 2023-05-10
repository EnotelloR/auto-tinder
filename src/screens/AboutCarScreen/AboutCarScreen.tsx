// @flow
import * as React from 'react';
import { Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { AboutCar } from '@features/cars/AboutCar';

export const AboutCarScreen = () => {
  const [searchParams] = useSearchParams();

  const carID = searchParams.get('carID');

  return (
    <>
      <Typography variant={'h2'}>Об автомобиле: </Typography>
      {carID && <AboutCar carID={carID} />}
    </>
  );
};
