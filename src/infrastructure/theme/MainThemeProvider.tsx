import type { ThemeOptions } from '@mui/material/styles';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import type { ReactNode } from 'react';

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#b02743',
    },
    background: {
      paper: '#1a2e86',
      default: '#1e1e1e',
    },
  },
};

let theme = createTheme(themeOptions);

theme = responsiveFontSizes(theme);

export const MainThemeProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
