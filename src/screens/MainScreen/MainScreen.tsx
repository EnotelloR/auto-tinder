import React, { useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { requestService } from '@infrastructure/request';

export const MainScreen = () => {
  useEffect(() => {
    requestService.get('/cars/drives').then((response) => console.log(response));
  }, []);

  return (
    <Container>
      <Box>
        <img src="/images/car-trade.jpg" alt={'Обмен автомобилями'} />
      </Box>
    </Container>
  );
};
