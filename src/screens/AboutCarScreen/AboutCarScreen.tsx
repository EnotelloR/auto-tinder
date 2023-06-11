// @flow
import * as React from 'react';
import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { AboutCar } from '@features/cars/AboutCar';

export const AboutCarScreen = () => {
  // const [searchParams] = useSearchParams();
  const { state } = useLocation();
  const { carID, disableLikes } = state;

  // const carID = searchParams.get('carID');

  return (
    <>
      <Typography variant={'h2'}>Об автомобиле: </Typography>
      {carID && <AboutCar carID={carID} disableLikes={disableLikes} />}
    </>
  );
};
