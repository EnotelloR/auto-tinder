import React from 'react';
import { MainThemeProvider } from '@infrastructure/theme';
import { RouterProvider } from 'react-router-dom';
import { router } from '@infrastructure/routing';
import { CssBaseline } from '@mui/material';
import { TextedAlert } from '@features/alert';
import { AuthProvider } from '@features/auth';

export const App = () => {
  return (
    <React.StrictMode>
      <AuthProvider>
        <MainThemeProvider>
          <CssBaseline />
          <TextedAlert />
          <RouterProvider router={router} />
        </MainThemeProvider>
      </AuthProvider>
    </React.StrictMode>
  );
};
