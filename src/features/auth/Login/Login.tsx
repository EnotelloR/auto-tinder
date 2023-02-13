import React, { useState } from 'react';
import { InputLabel, TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { FieldValues, useForm } from 'react-hook-form';
import { InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { StyledBox } from './components/StyledBox';

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: FieldValues) => {
    // auth(data.email, data.password);
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
        <InputLabel>Логин</InputLabel>
        <TextField
          {...register('login', { required: true })}
          error={!!errors.login}
          label={errors.login && 'Вы не ввели логин'}
        />
      </StyledBox>
      <StyledBox>
        <InputLabel>Пароль</InputLabel>
        <TextField
          type={showPassword ? 'text' : 'password'}
          {...register('password', { required: true })}
          error={!!errors.password}
          label={errors.password && 'Вы не ввели пароль'}
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
    </Container>
  );
};
