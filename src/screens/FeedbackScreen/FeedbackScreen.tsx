// @flow
import * as React from 'react';
import { FeedbackAdd } from '@features/feedback/FeedbackAdd/FeedbackAdd';
import { Container, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

export const FeedbackScreen = () => {
  // const [searchParams] = useSearchParams();
  // const carId = searchParams.get('carID');
  // const userId = searchParams.get('carID');
  // const criteria = searchParams.get('carID') as Criteria;
  const { state } = useLocation();
  const { carId, userId, criteria } = state;

  return (
    carId &&
    userId &&
    criteria && (
      <Container maxWidth={'sm'}>
        <Typography variant={'h2'} textAlign={'center'}>
          Отзыв
        </Typography>
        <FeedbackAdd
          chosenCriteria={criteria}
          fromTheTenant={false}
          carId={carId ?? ''}
          userId={userId ?? ''}
        />
      </Container>
    )
  );
};
