// @flow
import * as React from 'react';
import { useMemo, useState } from 'react';
import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material';
import { useCars } from '@features/cars/cars.hooks';
import { CarFilters } from '@features/cars';

type ProfileBaseInfoProps = {
  id: string;
  name: string;
  email: string;
};
export const ProfileBaseInfo = (props: ProfileBaseInfoProps) => {
  const { data: cars, isSuccess } = useCars(CarFilters.CURRENT_USER);
  const [changeMode, setChangeMode] = useState(false);
  const exchangeCar = useMemo(() => {
    if (isSuccess) return cars.find((car) => car.isExchanged);
  }, [cars]);
  return (
    <Paper sx={{ borderRadius: '1em', my: 2, p: 3 }}>
      <Typography variant={'h5'}></Typography>
      {!changeMode ? (
        <Stack justifyContent={'center'} gap={'0.5em'}>
          <Stack flexDirection={'row'} alignItems={'center'} gap={'1em'}>
            <Typography variant={'body1'} fontSize={'1.5em'} width={'5em'}>
              Имя:
            </Typography>
            <TextField value={props.name} />
          </Stack>
          <Stack flexDirection={'row'} alignItems={'center'} gap={'1em'}>
            <Typography variant={'body1'} fontSize={'1.5em'} width={'5em'}>
              Почта:
            </Typography>
            <TextField value={props.email} />
          </Stack>
          <Stack flexDirection={'row'} alignItems={'center'} gap={'1em'}>
            <Typography variant={'body1'} fontSize={'1.5em'} width={'5em'}>
              Пароль:
            </Typography>
            <TextField type={'password'} />
          </Stack>
          <Stack flexDirection={'row'} alignItems={'center'} gap={'1em'}>
            <Typography variant={'body1'} fontSize={'1.5em'} width={'5em'}>
              Повторите пароль:
            </Typography>
            <TextField type={'password'} />
          </Stack>
        </Stack>
      ) : (
        <Stack justifyContent={'center'} gap={'0.5em'}>
          <Box>
            <Typography variant={'body1'} fontSize={'1.5em'}>
              Имя: {props.name}
            </Typography>
          </Box>
          <Box>
            <Typography variant={'body1'} fontSize={'1.5em'}>
              Почта: {props.email}
            </Typography>
          </Box>
        </Stack>
      )}
      <Stack alignItems={'center'} my={2}>
        {changeMode ? (
          <Button
            variant={'contained'}
            size={'large'}
            onClick={() => setChangeMode((prevState) => !prevState)}
          >
            Поменять данные
          </Button>
        ) : (
          <Button
            variant={'contained'}
            size={'large'}
            onClick={() => setChangeMode((prevState) => !prevState)}
          >
            Сохранить
          </Button>
        )}
      </Stack>
    </Paper>
  );
};
