import React from 'react';
import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { routes } from '@infrastructure/routing';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();
  return (
    <AppBar position={'sticky'}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Button
            component={Link}
            to={routes.main.path}
            disabled={location.pathname === routes.main.path}
          >
            Главная
          </Button>
        </Box>
        <Box>
          <Button
            component={Link}
            to={routes.login.path}
            disabled={location.pathname === routes.login.path}
          >
            Войти
          </Button>
          <Button
            component={Link}
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
