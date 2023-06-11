// @flow
import * as React from 'react';
import { useForm } from 'react-hook-form';
import type { ICarCriteria } from '@features/feedback/feedback.entity';
import { useAlert } from '@features/alert';
import { Box, Button, Stack, Typography } from '@mui/material';
import { ControlledRating } from '@features/layout';

type CarCriteriaProps = {
  submit: (criteria: ICarCriteria) => void;
};
export const CarCriteria = (props: CarCriteriaProps) => {
  const alert = useAlert();

  const onSubmit = (data: ICarCriteria) => {
    console.log(data);
    props.submit(data);
  };

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ICarCriteria>();

  return (
    <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={'1em'}>
        <Stack flexDirection={'column'} gap={2}>
          <Typography component="legend">Чистота авто: </Typography>
          <ControlledRating control={control} name={'cleanCondition'} />
        </Stack>
        <Stack flexDirection={'column'} gap={2}>
          <Typography component="legend">Безопасность: </Typography>
          <ControlledRating control={control} name={'safety'} />
        </Stack>
        <Stack flexDirection={'column'} gap={2}>
          <Typography component="legend">Общее состояние: </Typography>
          <ControlledRating control={control} name={'state'} />
        </Stack>
        <Stack flexDirection={'column'} gap={2}>
          <Typography component="legend">Техническое состояние: </Typography>
          <ControlledRating control={control} name={'techRate'} />
        </Stack>
        <Stack flexDirection={'column'} gap={2}>
          <Typography component="legend">Удобство: </Typography>
          <ControlledRating control={control} name={'comfort'} />
        </Stack>
        <Box mx={'auto'}>
          <Button type={'submit'} variant={'contained'} size={'large'}>
            Отправить
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};
