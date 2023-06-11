// @flow
import * as React from 'react';
import { useLikes } from '@features/likes/likes.hooks';
import { Container, Grid, Typography } from '@mui/material';
import { LikeFilter } from '@features/likes/likes.entity';
import { HistoryCar } from '@features/history/HistoryCar';

type HistoryProps = {
  carID: string;
};
export const History = ({ carID }: HistoryProps) => {
  const { data: historyCars, isSuccess, isLoading } = useLikes(LikeFilter.LIKED, carID);
  return (
    <Container>
      <Typography variant={'h2'} textAlign={'center'} my={2}>
        История
      </Typography>
      <Grid>
        {isSuccess && historyCars.length > 0 ? (
          historyCars.map((car) => (
            <Grid item key={car.id}>
              <HistoryCar car={car} />
            </Grid>
          ))
        ) : (
          <Typography>История пуста!</Typography>
        )}
      </Grid>
    </Container>
  );
};
