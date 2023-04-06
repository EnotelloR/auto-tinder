import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
import type { ICar } from '@features/cars';

interface CarCardProps {
  car: ICar;
}

export const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={car.photos[0]?.photoLink ?? 'images/car-plug.webp'}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {car.brand.name} {car.model.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Год выпуска: {car.manufacturedAt}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant={'contained'} color={'success'} size="small">
          Нравится
        </Button>
        <Button variant={'contained'} color={'error'} size="small">
          Не нравится
        </Button>
      </CardActions>
    </Card>
  );
};
