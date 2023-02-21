import React from 'react';
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar } from '@mui/material';
import { routes } from '@infrastructure/routing';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Logo } from '@features/layout/Header/components';
import { useAuthStore } from '@features/auth/auth.hooks';
import { AccountCircle } from '@mui/icons-material';
import { logOut } from '@features/auth';

export const Header = () => {
  const location = useLocation();
  const { isAuth } = useAuthStore();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => logOut();
  return (
    <AppBar position={'sticky'}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Button component={RouterLink} to={routes.main.path}>
            <Logo />
          </Button>
        </Box>
        {!isAuth ? (
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
        ) : (
          <Box>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Профиль</MenuItem>
              <MenuItem onClick={handleLogOut}>Выйти</MenuItem>
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};
