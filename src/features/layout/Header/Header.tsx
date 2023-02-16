import React from 'react';
import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { routes } from '@infrastructure/routing';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Logo } from '@features/layout/Header/components';

export const Header = () => {
  const location = useLocation();
  return (
    <AppBar position={'sticky'}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Button component={RouterLink} to={routes.main.path}>
            <Logo />
          </Button>
        </Box>
        <Box>
          <Button
            component={RouterLink}
            to={routes.login.path}
            disabled={location.pathname === routes.login.path}
          >
            Войти
          </Button>
          <Button
            component={RouterLink}
            to={routes.signup.path}
            disabled={location.pathname === routes.signup.path}
          >
            Регистрация
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
