import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import type { ICar } from '@features/cars';
import { CarFilters, likeType } from '@features/cars';
import { useChangeExchange, UseLike } from '@features/cars/cars.hooks';
import { ConfirmDialog } from '@features/layout/ConfirmDialog';
import { useNavigate } from 'react-router-dom';
import { routes } from '@infrastructure/routing';
import { useAuthStore } from '@features/auth/auth.hooks';
import { Criteria } from '@features/feedback/feedback.entity';

interface CarCardProps {
  car: ICar;
  type: CarFilters;
  noExchangeInCars: boolean;
  clearView?: boolean;
  historyView?: boolean;
}

export const CarCard: React.FC<CarCardProps> = ({
  car,
  type = CarFilters,
  noExchangeInCars,
  clearView = false,
  historyView = false,
}) => {
  const [openDialog, setOpenDialog] = useState(false);
  const { mutate: createLike } = UseLike();
  const { mutate: changeExchange } = useChangeExchange();

  const isAuth = useAuthStore((state) => state.isAuth);
  const currentUserID = useAuthStore((state) => state.userID);

  const submitLike = () => {
    isAuth
      ? createLike({ likeType: likeType.LIKE, carID: car.id.toString() })
      : navigate({
          pathname: routes.login.path,
        });
  };
  const submitDislike = () => {
    isAuth
      ? createLike({ likeType: likeType.DISLIKE, carID: car.id.toString() })
      : navigate({
          pathname: routes.login.path,
        });
  };

  const handleChangeExchange = () => {
    setOpenDialog(false);
    changeExchange({ isExchange: !car.isExchanged, carID: car.id });
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const navigate = useNavigate();

  const openCarScreen = () => {
    isAuth
      ? navigate(routes.aboutCar.path, {
          state: {
            carID: car.id,
            disableLikes: car.user.id === currentUserID,
          },
        })
      : navigate(routes.login.path);
  };
  const openFeedbackScreen = () => {
    isAuth
      ? navigate(routes.feedback.path, {
          state: {
            carId: car.id,
            userId: car.user.id,
            criteria: Criteria.Car,
          },
        })
      : navigate(routes.login.path);
  };

  return (
    <>
      <Card
        variant={'outlined'}
        sx={{
          boxShadow: '0 0 2px white',
          minWidth: '21em',
          cursor: 'pointer',
          minHeight: '18em',
        }}
      >
        <CardMedia
          sx={{ height: 140 }}
          image={car.photos ? car.photos[0].photoLink : 'images/car-plug.webp'}
          title="green iguana"
          onClick={historyView ? openFeedbackScreen : openCarScreen}
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
          onClick={historyView ? openFeedbackScreen : openCarScreen}
        >
          <Typography gutterBottom variant="h5" component="div">
            {car.brand.name} {car.model.name}
          </Typography>
          {(type !== 'CURRENT_USER' || clearView) && (
            <>
              <Typography variant="body2" color="text.secondary">
                Год выпуска: {car.manufacturedAt}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Стоимость: {car.price} тыс. руб.
              </Typography>
            </>
          )}
        </CardContent>
        {type !== 'CURRENT_USER' && !clearView && (
          <CardActions
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: '1rem',
              gap: '1rem',
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
          </CardActions>
        )}
        {type === 'CURRENT_USER' && car.isExchanged && !clearView && (
          <CardActions
            sx={{
              display: 'flex',
              flexDirection: 'column',
              padding: '1rem',
              gap: '1rem',
            }}
          >
            <Button
              variant={'contained'}
              size="large"
              color={'primary'}
              onClick={() => setOpenDialog(true)}
            >
              Убрать с обмена
            </Button>
          </CardActions>
        )}
        {noExchangeInCars && (
          <CardActions
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              padding: '1rem',
            }}
          >
            <Button
              variant={'contained'}
              size="small"
              color={'primary'}
              onClick={handleChangeExchange}
            >
              Выбрать для обмена
            </Button>
          </CardActions>
        )}
      </Card>
      <ConfirmDialog
        isOpen={openDialog}
        handleConfirm={handleChangeExchange}
        handleClose={handleCloseDialog}
        dialogText={'Вы уверены, что хотите убрать машину с обмена?'}
      />
    </>
  );
};
