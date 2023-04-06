import React from 'react';
import { MainThemeProvider } from '@infrastructure/theme';
import { RouterProvider } from 'react-router-dom';
import { router } from '@infrastructure/routing';
import { CssBaseline } from '@mui/material';
import { TextedAlert } from '@features/alert';
import { AuthProvider } from '@features/auth';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@infrastructure/query-client';

export const App = () => {
  return (
    <React.StrictMode>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <MainThemeProvider>
            <CssBaseline />
            <TextedAlert />
            <RouterProvider router={router} />
          </MainThemeProvider>
        </QueryClientProvider>
      </AuthProvider>
    </React.StrictMode>
  );
};
