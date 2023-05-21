// @flow
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { UseRent } from '@features/cars/cars.hooks';

type CarAddRentalModalProps = {
  open: boolean;
  handleClose: () => void;
  handleSentRequest: () => void;
  carID: string;
  price: number;
};

type RentFormValues = {
  rentFrom: Date;
  rentTo: Date;
};

export const CarAddRentalModal = ({
  handleClose,
  handleSentRequest,
  open,
  carID,
  price,
}: CarAddRentalModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RentFormValues>();
  const { mutate } = UseRent();
  const onSubmit = (data: RentFormValues) => {
    const rentObj = {
      carID,
      rentData: {
        rentFrom: data.rentFrom,
        rentTo: data.rentTo,
        price,
      },
    };
    mutate(rentObj);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Отправка запроса</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContentText>Введите даты желаемой аренды</DialogContentText>
          <TextField
            margin="dense"
            id="startDate"
            type="date"
            fullWidth
            variant="standard"
            InputLabelProps={{ shrink: true }}
            {...register('rentFrom', { required: true })}
            error={!!errors.rentFrom}
            label={
              errors.rentFrom ? errors.rentFrom.message?.toString() : 'Начальная дата'
            }
          />
          <TextField
            margin="dense"
            id="endDate"
            type="date"
            fullWidth
            variant="standard"
            InputLabelProps={{ shrink: true }}
            {...register('rentTo', { required: true })}
            error={!!errors.rentTo}
            label={errors.rentTo ? errors.rentTo.message?.toString() : 'Конечная дата'}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Отмена</Button>
        <Button onClick={handleSentRequest}>Отправить запрос</Button>
      </DialogActions>
    </Dialog>
  );
};
