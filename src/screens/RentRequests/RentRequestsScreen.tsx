// @flow
import * as React from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material';
import { RentableCar } from '@features/cars/components';
import type { ICar } from '@features/cars';

export const RentRequestsScreen = () => {
  const cars = [
    {
      id: '93539b0c-777b-4857-ad02-d78dc3f10b1a',
      vinCode: '21231231231111111',
      stateNumber: 'А065МК34',
      manufacturedAt: 2022,
      mileage: 2022,
      price: 123123,
      isPromoted: true,
      isExchanged: false,
      isVerified: true,
      brand: { id: 8, name: 'Toyota' },
      model: { id: 68, name: 'Land Cruiser' },
      engine: { id: 4, name: 'Электро' },
      user: {
        id: '8c4b0d97-456b-49a8-a59a-acb42d5aceaf',
        name: 'Егор',
        email: 'uncleegor05@gmail.com',
        isBanned: false,
      },
      drive: { id: 2, name: 'Задний' },
      gearbox: { id: 2, name: 'Робот' },
      body: { id: 2, name: 'Хэтчбэк' },
      report: {
        isMatchCharacteristics: false,
        totalOwners: 1,
        isBanned: false,
        isWanted: false,
        totalMileageRecords: 2,
      },
      city: { id: 14, name: 'Пермь' },
      description: 'Test',
      totalOwners: 1,
    },
    {
      id: '953da082-8fdc-40a7-8a54-f8be81597a82',
      vinCode: '11111231231231211',
      stateNumber: 'А035МК34',
      manufacturedAt: 2022,
      mileage: 2022,
      price: 123123,
      isPromoted: true,
      isExchanged: true,
      isVerified: true,
      brand: { id: 1, name: 'LADA (ВАЗ)' },
      model: { id: 6, name: 'Granta' },
      engine: { id: 3, name: 'Гибрид' },
      user: {
        id: '7d98db07-bb34-464c-80b8-67971f7c9336',
        name: 'Егор',
        email: 'test1@test.ru',
        isBanned: false,
      },
      drive: { id: 2, name: 'Задний' },
      gearbox: { id: 1, name: 'Автоматическая' },
      body: { id: 3, name: 'Внедорожник' },
      report: {
        isMatchCharacteristics: false,
        totalOwners: 1,
        isBanned: false,
        isWanted: false,
        totalMileageRecords: 2,
      },
      city: { id: 16, name: 'Краснодар' },
      description: 'Test',
      totalOwners: 1,
      photos: [
        {
          id: 2,
          photoLink:
            'https://firebasestorage.googleapis.com/v0/b/autotinder-2d8fc.appspot.com/o/d09664e1-d487-4c3c-bb22-18076cc5c081.jpg?alt=media',
        },
      ],
    },
    {
      id: 'bfc9d911-a4c5-4391-85c1-8da52a3fb8dd',
      vinCode: '21231231231111112',
      stateNumber: 'А065МК35',
      manufacturedAt: 2022,
      mileage: 2022,
      price: 123,
      isPromoted: true,
      isExchanged: false,
      isVerified: true,
      brand: { id: 8, name: 'Toyota' },
      model: { id: 68, name: 'Land Cruiser' },
      engine: { id: 4, name: 'Электро' },
      user: {
        id: '8c4b0d97-456b-49a8-a59a-acb42d5aceaf',
        name: 'Егор',
        email: 'uncleegor05@gmail.com',
        isBanned: false,
      },
      drive: { id: 2, name: 'Задний' },
      gearbox: { id: 2, name: 'Робот' },
      body: { id: 2, name: 'Хэтчбэк' },
      report: {
        isMatchCharacteristics: false,
        totalOwners: 1,
        isBanned: false,
        isWanted: false,
        totalMileageRecords: 2,
      },
      city: { id: 14, name: 'Пермь' },
      description: 'Test',
      totalOwners: 1,
    },
  ];
  return (
    <Box>
      <Typography variant={'h2'} my={2}>
        История аренды:
      </Typography>
      <Paper>
        <Stack gap={'1em'}>
          {cars.map((car, index) => (
            <RentableCar car={car as ICar} rentHistoryMode={true} status={index} />
          ))}
        </Stack>
      </Paper>
    </Box>
  );
};
