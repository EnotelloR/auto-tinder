import React from 'react';
import { MainThemeProvider } from '@infrastructure/theme';
import { RouterProvider } from 'react-router-dom';
import { router } from '@infrastructure/routing';
import { CssBaseline } from '@mui/material';
import { TextedAlert } from '@features/alert';
import { AuthProvider } from '@features/auth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const App = () => {
  const queryClient = new QueryClient();
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
