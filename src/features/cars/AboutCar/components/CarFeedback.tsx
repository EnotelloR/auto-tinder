// @flow
import * as React from 'react';
import { Avatar, Box, Rating, Stack, Typography } from '@mui/material';
import type { ICarCriteria, IFeedbackResponse } from '@features/feedback/feedback.entity';

type CarFeedbackProps = { feedback: IFeedbackResponse };
export const CarFeedback = ({ feedback }: CarFeedbackProps) => {
  const carCriteria = feedback.criteria as ICarCriteria;

  return (
    <Box bgcolor={'#1e1e1e'} borderRadius={'1em'} p={'1em'}>
      <Stack gap={'1em'}>
        <Stack flexDirection={'row'} gap={'1em'} alignItems={'center'}>
          <Avatar />
          <Typography fontWeight={'bold'}>
            {feedback.commentOwner.username ?? 'Аноним'}
          </Typography>
          <Typography>{feedback.commentOwner.createdAt.toString()}</Typography>
        </Stack>
        <Stack>
          <Typography fontWeight={'bold'}>Общая оценка: </Typography>
          <Rating size={'small'} readOnly max={10} value={feedback.totalRating} />
        </Stack>
        <Stack>
          <Typography fontWeight={'bold'}>Комментарий: </Typography>
          <Typography flex={1}>{feedback.comment}</Typography>
        </Stack>
        <Stack>
          <Typography fontWeight={'bold'}>Техническое состояние: </Typography>
          <Rating size={'small'} readOnly max={10} value={carCriteria.techRate} />
        </Stack>
        <Stack>
          <Typography fontWeight={'bold'}>Безопасность: </Typography>
          <Rating size={'small'} readOnly max={10} value={carCriteria.safety} />
        </Stack>
        <Stack>
          <Typography fontWeight={'bold'}>Удобство: </Typography>
          <Rating size={'small'} readOnly max={10} value={carCriteria.comfort} />
        </Stack>
        <Stack>
          <Typography fontWeight={'bold'}>Общее состояние: </Typography>
          <Rating size={'small'} readOnly max={10} value={carCriteria.state} />
        </Stack>
      </Stack>
    </Box>
  );
};
