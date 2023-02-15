import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLocation, useNavigate } from 'react-router-dom';
import { registration } from '@features/auth/auth.service';
import {
  Alert,
  Button,
  Container,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import { StyledBox } from '@features/auth/Login/components/StyledBox';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useAlert } from '@features/alert';
import { registrationSchema } from '@features/auth/Registration/registration.schema';

export const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registrationSchema) });

  const [warningMessage, setWarningMessage] = useState('');

  const startAlert = useAlert();

  const navigate = useNavigate();
  const location = useLocation();

  const signUp = (email: string, name: string, password: string) => {
    try {
      registration({ email, name, password })
        .then(() => {
          startAlert({ text: 'Вы успешно зарегистрировались!', severity: 'success' });
          navigate('/login', { state: { from: location.state?.from } });
        })
        .catch((error) => {
          if (error.response.data.status === 'NOT_FOUND')
            setWarningMessage('Возникла ошибка при регистрации!');
        });
    } catch (e) {
      console.log(e);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: FieldValues) => {
    signUp(data.email, data.name, data.password);
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
        <InputLabel>Почта</InputLabel>
        <TextField
          {...register('email', { required: true })}
          type={'email'}
          error={!!errors.email}
          label={errors.email && errors.email.message?.toString()}
        />
      </StyledBox>
      <StyledBox>
        <InputLabel>Имя</InputLabel>
        <TextField
          {...register('name', { required: true })}
          error={!!errors.name}
          label={errors.name && errors.name.message?.toString()}
        />
      </StyledBox>
      <StyledBox>
        <InputLabel>Пароль</InputLabel>
        <TextField
          type={showPassword ? 'text' : 'password'}
          {...register('password', { required: true })}
          error={!!errors.password}
          label={errors.password && errors.password.message?.toString()}
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
      <StyledBox>
        <InputLabel>Повторите пароль</InputLabel>
        <TextField
          type={'password'}
          {...register('passwordRepeat', { required: true })}
          error={!!errors.passwordRepeat}
          label={errors.passwordRepeat && errors.passwordRepeat.message?.toString()}
        />
      </StyledBox>
      <Button variant={'contained'} size={'large'} sx={{ width: '20%' }} type={'submit'}>
        Войти
      </Button>
      {warningMessage && <Alert severity="warning">{warningMessage}</Alert>}
    </Container>
  );
};
