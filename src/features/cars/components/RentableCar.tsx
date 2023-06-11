// @flow
import * as React from 'react';
import { useState } from 'react';
import type { ICar } from '@features/cars';
import { Box, Button, Paper, Rating, Stack, Typography } from '@mui/material';
import { CarAddRentalModal } from '@features/cars/components/CarAddRentalModal';
import { useAlert } from '@features/alert';
import { Cancel, Done, HourglassBottom } from '@mui/icons-material';
import { routes } from '@infrastructure/routing';
import { useNavigate } from 'react-router-dom';

type RentableCarProps = {
  car: ICar;
  rentHistoryMode?: boolean;
  status?: number;
};
export const RentableCar = ({
  car,
  rentHistoryMode = false,
  status,
}: RentableCarProps) => {
  const [openModal, setOpenModal] = useState(false);
  const alert = useAlert();
  const getNum = () => {
    return Math.floor(Math.random() * 6);
  };
  const sendRequest = () => {
    alert({ text: 'Запрос успешно отправлен!', severity: 'success' });
    setOpenModal(false);
  };

  const navigate = useNavigate();

  const openCarScreen = () => {
    navigate(routes.aboutCar.path, {
      state: {
        carID: car.id,
        disableLikes: true,
      },
    });
  };
  return (
    <Paper>
      <Stack
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        gap={'1em'}
        p={'1em'}
      >
        <Box
          component="img"
          alt={'Фотография автомобиля'}
          src={car.photos ? car.photos[0].photoLink : 'images/car-plug.webp'}
          flex={1}
          maxWidth={'10em'}
          borderRadius={'1em'}
          onClick={openCarScreen}
          sx={{ cursor: 'pointer' }}
        />
        <Typography flex={1}>
          {car.brand.name} {car.model.name}
        </Typography>
        <Typography flex={1}>
          Цена: {(car.price / 100).toFixed()} рублей / сутки
        </Typography>
        {!rentHistoryMode ? (
          <>
            <Rating value={getNum()} readOnly sx={{ flex: 1 }} />
            <Button variant={'contained'} onClick={() => setOpenModal(true)}>
              Запросить аренду
            </Button>
          </>
        ) : (
          <>
            <Stack flexDirection={'row'} flex={1} gap={'0.5em'} justifyContent={'center'}>
              <Typography variant={'body1'}>Статус: </Typography>
              {status === 0 && <HourglassBottom color={'primary'} />}
              {status === 1 && <Done color={'success'} />}
              {status === 2 && <Cancel color={'error'} />}
            </Stack>
            <Button variant={'contained'}>Связаться с ♂хозяином♂</Button>
          </>
        )}
      </Stack>
      <CarAddRentalModal
        open={openModal}
        handleClose={() => setOpenModal(false)}
        handleSentRequest={sendRequest}
        carID={car.id}
        price={car.price}
      />
    </Paper>
  );
};
