// @flow
import * as React from 'react';
import { Container, Paper, Stack, Typography } from '@mui/material';
import { useLikes } from '@features/likes/likes.hooks';
import type { LikeFilter } from '@features/likes/likes.entity';
import { CarCard } from '@features/cars/components';
import { CarFilters } from '@features/cars';

type LikesToUserProps = {
  carID: string;
  likeType: LikeFilter;
};
export const LikesList = ({ carID, likeType }: LikesToUserProps) => {
  const { data: likesCars, isSuccess, isLoading } = useLikes(likeType, carID);
  return (
    <Container>
      <Typography variant={'h2'} textAlign={'center'} my={2}>
        {likeType === 'LIKED' && 'Лайки от меня'}
        {likeType === 'LIKING' && 'Лайки мне'}
        {likeType === 'MATCH' && 'Совпадения'}
      </Typography>
      <Paper>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '1rem',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {isSuccess && likesCars.length > 0 ? (
            likesCars.map((car) => (
              <CarCard
                key={car.id}
                car={car}
                type={CarFilters.CURRENT_USER}
                noExchangeInCars={false}
                clearView={true}
              />
            ))
          ) : (
            <Typography>Нет совпадений!</Typography>
          )}
        </Stack>
      </Paper>
    </Container>
  );
};
