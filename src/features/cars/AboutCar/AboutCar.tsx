// @flow
import * as React from 'react';
import { useState } from 'react';
import { useCar, UseLike } from '@features/cars/cars.hooks';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { likeType } from '@features/cars';
import { useAlert } from '@features/alert';
import { useFeedbacks } from '@features/feedback/feedback.hooks';
import { FeedbackType } from '@features/feedback/feedback.entity';
import { CarFeedback } from '@features/cars/AboutCar/components';
import { sendIssue } from '@features/cars/cars.service';
import { IssueModal } from '@features/cars/IssueModal';

type AboutCarProps = {
  carID: string;
  disableLikes?: boolean;
};
export const AboutCar = ({ carID, disableLikes }: AboutCarProps) => {
  const { mutate: createLike } = UseLike();
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => setModalOpen(false);
  const handleModalOpen = () => setModalOpen(true);

  const alert = useAlert();

  const submitLike = () => {
    createLike({ likeType: likeType.LIKE, carID });
  };
  const submitDislike = () => {
    createLike({ likeType: likeType.DISLIKE, carID });
  };

  const { data: car, isSuccess } = useCar(carID);

  const { data: feedbacks } = useFeedbacks(carID, FeedbackType.CAR);

  const sendAppealHandler = () => {
    sendIssue(carID, '').then(() =>
      alert({ text: 'Жалоба успешно отправлена!', severity: 'success' }),
    );
  };

  return isSuccess ? (
    <Paper>
      <Stack gap={'1em'} px={'5em'} py={'1em'}>
        <Typography variant={'h4'}>
          {car?.brand.name} {car.model.name}
        </Typography>
        <Box
          component="img"
          alt={'Фотография автомобиля'}
          src={car.photos ? car.photos[0].photoLink : 'images/car-plug.webp'}
        />
        {!disableLikes && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: '1rem',
              gap: '2em',
              width: '100%',
            }}
          >
            <Button
              variant={'contained'}
              color={'success'}
              size="small"
              onClick={submitLike}
              sx={{ flex: 1 }}
            >
              Нравится
            </Button>
            <Button
              variant={'contained'}
              color={'error'}
              size="small"
              onClick={submitDislike}
              sx={{ flex: 1 }}
            >
              Не нравится
            </Button>
          </Box>
        )}
        <Stack
          flexDirection={'row'}
          justifyContent={'space-between'}
          width={'100%'}
          gap={'1em'}
          flexWrap={'wrap'}
        >
          <Box alignSelf={'start'} flex={1}>
            <Box alignSelf={'start'} marginBottom={'2em'}>
              <Typography variant={'h4'}>Описание:</Typography>
              <Typography variant={'body1'}>{car.description}</Typography>
            </Box>
            <Typography variant={'h4'}>Характеристики:</Typography>
            <Typography variant={'body1'}>Текущий город: {car.city.name}</Typography>
            <Typography variant={'body1'}>Привод: {car.drive.name}</Typography>
            <Typography variant={'body1'}>Тип кузова: {car.body.name}</Typography>
            <Typography variant={'body1'}>Тип двигателя: {car.engine.name}</Typography>
            <Typography variant={'body1'}>Коробка передач: {car.gearbox.name}</Typography>
            <Typography variant={'body1'}>Год выпуска: {car.manufacturedAt}</Typography>
            <Typography variant={'body1'}>Пробег: {car.mileage} км.</Typography>
            <Typography variant={'body1'}>Владельцев: {car.totalOwners}</Typography>
          </Box>
          <Stack flexDirection={'column'} flex={1}>
            <Typography variant={'h4'}>Контактное лицо:</Typography>
            <Typography variant={'body1'}>Имя: {car.user.name}</Typography>
            <Typography variant={'body1'}>
              Номер телефона: {car.user.phone ?? 'не указан'}
            </Typography>
            <Typography variant={'body1'}>
              Почтовый адрес: {car.user.email ?? 'не указан'}
            </Typography>
            <Button
              sx={{ marginTop: '1em' }}
              variant={'contained'}
              color={'warning'}
              size="small"
              onClick={handleModalOpen}
            >
              Пожаловаться на объявление
            </Button>
          </Stack>
        </Stack>
        <Typography variant={'h4'}>Отзывы:</Typography>
        <Stack gap={'1em'}>
          {feedbacks &&
            feedbacks.map((feedback) => (
              <CarFeedback key={feedback.commentOwner.userId} feedback={feedback} />
            ))}
        </Stack>
      </Stack>
      <IssueModal carID={carID} open={modalOpen} handleClose={handleModalClose} />
    </Paper>
  ) : null;
};
