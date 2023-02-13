import React from 'react';
import { MainThemeProvider } from '@infrastructure/theme';
import { RouterProvider } from 'react-router-dom';
import { router } from '@infrastructure/routing';
import { CssBaseline } from '@mui/material';

export const App = () => {
  return (
    <React.StrictMode>
      <MainThemeProvider>
        <CssBaseline />
        <RouterProvider router={router} />
      </MainThemeProvider>
    </React.StrictMode>
  );
};
