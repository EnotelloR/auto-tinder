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

interface CarCardProps {
  car: ICar;
  type: CarFilters;
  noExchangeInCars: boolean;
}

export const CarCard: React.FC<CarCardProps> = ({
  car,
  type = CarFilters,
  noExchangeInCars,
}) => {
  const [openDialog, setOpenDialog] = useState(false);
  const { mutate: createLike } = UseLike();
  const { mutate: changeExchange } = useChangeExchange();

  const submitLike = () => {
    createLike({ likeType: likeType.LIKE, carID: car.id.toString() });
  };
  const submitDislike = () => {
    createLike({ likeType: likeType.DISLIKE, carID: car.id.toString() });
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
    navigate({
      pathname: routes.aboutCar.path,
      search: `?carID=${car.id}`,
    });
  };

  return (
    <>
      <Card
        variant={'outlined'}
        sx={{
          boxShadow: '0 0 2px white',
          minWidth: '21em',
          cursor: 'pointer',
        }}
      >
        <CardMedia
          sx={{ height: 140 }}
          image={car.photos ? car.photos[0].photoLink : 'images/car-plug.webp'}
          title="green iguana"
          onClick={openCarScreen}
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
          onClick={openCarScreen}
        >
          <Typography gutterBottom variant="h5" component="div">
            {car.brand.name} {car.model.name}
          </Typography>
          {type !== 'CURRENT_USER' && (
            <>
              <Typography variant="body2" color="text.secondary">
                Год выпуска: {car.manufacturedAt}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Стоимость: {car.price} тыс. руб.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Лайки: {car.totalLikes ?? 0}
              </Typography>
            </>
          )}
        </CardContent>
        {type !== 'CURRENT_USER' && (
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
        {type === 'CURRENT_USER' && car.isExchanged && (
          <CardActions
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              padding: '1rem',
              gap: '1rem',
            }}
          >
            <Button
              variant={'contained'}
              size="small"
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
