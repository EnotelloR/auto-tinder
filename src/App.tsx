import React from 'react';
import { MainThemeProvider } from '@infrastructure/theme';
import { RouterProvider } from 'react-router-dom';
import { router } from '@infrastructure/routing';
import { CssBaseline } from '@mui/material';
import { TextedAlert } from '@features/alert';

export const App = () => {
  return (
    <React.StrictMode>
      <MainThemeProvider>
        <CssBaseline />
        <TextedAlert />
        <RouterProvider router={router} />
      </MainThemeProvider>
    </React.StrictMode>
  );
};
