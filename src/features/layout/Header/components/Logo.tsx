import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
}));

const LogoIcon = styled('img')(({ theme }) => ({
  width: '2rem',
  [theme.breakpoints.up('md')]: {
    width: '4rem',
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.2rem',
  [theme.breakpoints.up('md')]: {
    gap: '1rem',
  },
}));

export const Logo = () => {
  return (
    <StyledBox>
      <LogoIcon src={'/images/car-logo.svg'} alt={'Логотип'} />
      <Title>Автотиндер</Title>
    </StyledBox>
  );
};
