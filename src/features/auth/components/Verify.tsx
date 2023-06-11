import React, { useEffect } from 'react';
import { verifyUser } from '@features/auth/auth.service';
import { useAlert } from '@features/alert';
import { useNavigate } from 'react-router-dom';
import { routes } from '@infrastructure/routing';
import { Box, CircularProgress } from '@mui/material';

interface VerifyProps {
  token: string | null;
}

export const Verify: React.FC<VerifyProps> = ({ token }) => {
  const alert = useAlert();
  const navigate = useNavigate();
  useEffect(() => {
    token &&
      verifyUser(token).then(
        () => {
          alert({
            text: 'Вы успешно активировали аккаунт! Теперь войдите.',
            severity: 'success',
          });
          navigate(routes.login.path);
        },
        () => {
          // alert({
          //   text: 'Произошла ошибка при активации аккаунта! Возможно письмо устарело!',
          //   severity: 'error',
          // });
          navigate(routes.main.path);
        },
      );
  }, []);

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      minHeight={'100vh'}
    >
      <CircularProgress />
    </Box>
  );
};
