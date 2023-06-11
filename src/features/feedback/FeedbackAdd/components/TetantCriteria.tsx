// @flow
import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';
import type { ITenantCriteria } from '@features/feedback/feedback.entity';
import { Box, Button, Rating, Stack, Typography } from '@mui/material';

type TetantCriteriaProps = {
  submit: (criteria: ITenantCriteria) => void;
};
export const TenantCriteria = (props: TetantCriteriaProps) => {
  const onSubmit = (data: ITenantCriteria) => {
    console.log(data);
    props.submit(data);
  };

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ITenantCriteria>();

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={'1em'}>
          <Stack flexDirection={'column'} gap={2}>
            <Typography component="legend">Общение: </Typography>
            <Controller
              name="chat"
              control={control}
              rules={{ required: true }}
              render={() => <Rating name="chat" defaultValue={5} max={10} />}
            />
          </Stack>
          <Stack flexDirection={'column'} gap={2}>
            <Typography component="legend">Опрятность: </Typography>
            <Controller
              name="neatness"
              control={control}
              rules={{ required: true }}
              render={() => <Rating name="neatness" defaultValue={5} max={10} />}
            />
          </Stack>
          <Stack flexDirection={'column'} gap={2}>
            <Typography component="legend">Качество возврата: </Typography>
            <Controller
              name="returnQuality"
              control={control}
              rules={{ required: true }}
              render={() => <Rating name="returnQuality" defaultValue={5} max={10} />}
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
