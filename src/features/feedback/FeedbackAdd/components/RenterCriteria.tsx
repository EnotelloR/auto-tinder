// @flow
import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';
import type { IRenterCriteria } from '@features/feedback/feedback.entity';
import { useAlert } from '@features/alert';
import { Box, Button, Rating, Stack, Typography } from '@mui/material';

type RenterCriteriaProps = {
  submit: (criteria: IRenterCriteria) => void;
};
export const RenterCriteria = (props: RenterCriteriaProps) => {
  const alert = useAlert();

  const onSubmit = (data: IRenterCriteria) => {
    console.log(data);
    props.submit(data);
  };

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IRenterCriteria>();

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={'1em'}>
          <Stack flexDirection={'column'} gap={2}>
            <Typography component="legend">Стоимость: </Typography>
            <Controller
              name="pricing"
              control={control}
              rules={{ required: true }}
              render={() => <Rating name="pricing" defaultValue={5} max={10} />}
            />
          </Stack>
          <Stack flexDirection={'column'} gap={2}>
            <Typography component="legend">Сервис: </Typography>
            <Controller
              name="service"
              control={control}
              rules={{ required: true }}
              render={() => <Rating name="service" defaultValue={5} max={10} />}
            />
          </Stack>
          <Stack flexDirection={'column'} gap={2}>
            <Typography component="legend">Безопасность: </Typography>
            <Controller
              name="safety"
              control={control}
              rules={{ required: true }}
              render={() => <Rating name="safety" defaultValue={5} max={10} />}
            />
          </Stack>
          <Stack flexDirection={'column'} gap={2}>
            <Typography component="legend">Качество машины: </Typography>
            <Controller
              name="carQuality"
              control={control}
              rules={{ required: true }}
              render={() => <Rating name="carQuality" defaultValue={5} max={10} />}
            />
          </Stack>
          <Stack flexDirection={'column'} gap={2}>
            <Typography component="legend">Условия аренды: </Typography>
            <Controller
              name="rentConditions"
              control={control}
              rules={{ required: true }}
              render={() => <Rating name="rentConditions" defaultValue={5} max={10} />}
            />
          </Stack>
          <Box mx={'auto'}>
            <Button type={'submit'} variant={'contained'} size={'large'}>
              Отправить
            </Button>
          </Box>
        </Stack>
      </form>
    </Box>
  );
};
