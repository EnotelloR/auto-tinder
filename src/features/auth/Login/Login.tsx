import React, { useState } from 'react';
import { Alert, TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { FieldValues, useForm } from 'react-hook-form';
import { InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { StyledBox } from './components/StyledBox';
import { login } from '../auth.service';
import { useAuthStore } from '@features/auth/auth.hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { setAccessToken, setUserID } from '@infrastructure/request';

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [warningMessage, setWarningMessage] = useState('');

  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();
  const location = useLocation();

  const auth = (email: string, password: string) => {
    try {
      login(email, password)
        .then((response) => {
          setAccessToken(response.data.accessToken);
          setUserID(response.data.accessToken);
          setWarningMessage('');
          setAuth(true);
          location.state?.from ? navigate(location.state.from) : navigate('/');
        })
        .catch((error) => {
          if (error.response.data.status === 'NOT_FOUND')
            setWarningMessage('Такого пользователя не существует!');
          else if (error.response.data.Reason === 'User account is locked')
            setWarningMessage(
              'Активируйте свою учётную запись по ссылке, которую мы вам отправили на электронную почту!',
            );
        });
    } catch (e) {
      console.log(e);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: FieldValues) => {
    auth(data.email, data.password);
  };

  return (
    <Container
      maxWidth={'sm'}
      component={'form'}
      onSubmit={handleSubmit((data) => onSubmit(data))}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        alignItems: 'center',
      }}
    >
      <Typography variant={'h4'}>Войти в систему</Typography>
      <StyledBox>
        <TextField
          {...register('email', { required: true })}
          type={'email'}
          error={!!errors.email}
          label={errors.email ? 'Вы не ввели почту!' : 'Почта'}
        />
      </StyledBox>
      <StyledBox>
        <TextField
          type={showPassword ? 'text' : 'password'}
          {...register('password', { required: true })}
          error={!!errors.password}
          label={errors.password ? 'Вы не ввели пароль' : 'Пароль'}
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="end"
                onClick={() => setShowPassword(!showPassword)}
                sx={{ cursor: 'pointer' }}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </InputAdornment>
            ),
          }}
        />
      </StyledBox>
      <Button variant={'contained'} size={'large'} sx={{ width: '20%' }} type={'submit'}>
        Войти
      </Button>
      {warningMessage && <Alert severity="warning">{warningMessage}</Alert>}
    </Container>
  );
};
