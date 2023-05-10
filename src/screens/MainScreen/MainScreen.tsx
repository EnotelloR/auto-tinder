import React from 'react';
import { Box, Container, Typography } from '@mui/material';

export const MainScreen = () => {
  return (
    <Container>
      <Typography variant={'h1'} textAlign={'center'}>
        Автотиндер
      </Typography>
      <Box>
        <img src="/images/car-trade.jpg" alt={'Обмен автомобилями'} />
      </Box>
    </Container>
  );
};
