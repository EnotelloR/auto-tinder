import React from 'react';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from '@features/layout/Header';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Container sx={{ pt: 5, pb: 3 }}>
          <Outlet />
        </Container>
      </main>
    </>
  );
};
