// @flow
import * as React from 'react';
import { useState } from 'react';
import {
  Box,
  Checkbox,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import type { Criteria, IFeedback } from '@features/feedback/feedback.entity';
import { FeedbackType } from '@features/feedback/feedback.entity';
import { useForm } from 'react-hook-form';
import {
  CarCriteria,
  RenterCriteria,
  TenantCriteria,
} from '@features/feedback/FeedbackAdd/components';
import { useCreateFeedback } from '@features/feedback/feedback.hooks';
import { useAlert } from '@features/alert';
import { useNavigate } from 'react-router-dom';
import { ControlledRating } from '@features/layout';

type TFeedbackData = {
  comment: string;
  isAnonymous: boolean;
  totalRating: number;
};

type FeedbackAddProps = {
  fromTheTenant: boolean;
  chosenCriteria: Criteria;
  carId: string;
  userId: string;
};
export const FeedbackAdd = ({
  carId,
  userId,
  fromTheTenant,
  chosenCriteria,
}: FeedbackAddProps) => {
  const onSubmit = (data: TFeedbackData) => {
    if (criteria) {
      const feedback: IFeedback = { ...data, criteria, carId, userId };
      createFeedback({ feedback: feedback, key: FeedbackType.CAR }).then(() => {
        alert({ text: 'Отзыв успешно добавлен!', severity: 'success' });
        navigate('/');
      });
    }
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Omit<IFeedback, 'criteria'>>();

  const { mutateAsync: createFeedback } = useCreateFeedback();
  const alert = useAlert();
  const navigate = useNavigate();

  const startSubmit = (criteria: IFeedback['criteria']) => {
    setCriteria(criteria);
    handleSubmit(onSubmit)();
  };

  const [criteria, setCriteria] = useState<IFeedback['criteria']>();

  return (
    <Paper sx={{ p: '1rem', m: '1rem' }}>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap={'2em'} my={'2em'}>
            <Stack flexDirection={'column'} gap={2}>
              <Typography component="legend">Общая оценка: </Typography>
              <ControlledRating control={control} name={'totalRating'} />
            </Stack>
            <Box>
              <TextField
                multiline
                {...register('comment')}
                error={!!errors.comment}
                label={
                  errors.comment ? errors.comment.message?.toString() : 'Комментарий'
                }
              />
            </Box>
            <Stack flexDirection={'row'} alignItems={'center'}>
              <Typography component="legend">Анонимно: </Typography>
              <Checkbox {...register('isAnonymous')} />
            </Stack>
          </Stack>
        </form>
        {chosenCriteria === 'Car' && <CarCriteria submit={startSubmit} />}
        {chosenCriteria === 'Tenant' && <TenantCriteria submit={startSubmit} />}
        {chosenCriteria === 'Renter' && <RenterCriteria submit={startSubmit} />}
      </Container>
    </Paper>
  );
};
