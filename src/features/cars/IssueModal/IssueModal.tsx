// @flow
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
} from '@mui/material';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { sendIssue } from '@features/cars/cars.service';
import { useAlert } from '@features/alert';

type CarAddRentalModalProps = {
  open: boolean;
  handleClose: () => void;
  carID: string;
};

type RentFormValues = {
  text: string;
};

export const IssueModal = ({ handleClose, open, carID }: CarAddRentalModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RentFormValues>();
  const alert = useAlert();
  const onSubmit = (data: RentFormValues) => {
    console.log('meme');
    sendIssue(carID, data.text).then(() => {
      alert({ text: 'Жалоба успешно отправлена!', severity: 'success' });
      handleClose();
    });
  };

  // const submitHandler = () => handleSubmit(onSubmit);
  const submitHandler = () => handleSubmit(onSubmit);
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContentText>Введите текст жалобы: </DialogContentText>
          <TextField
            fullWidth
            multiline
            type={'input'}
            {...register('text')}
            error={!!errors.text}
            label={errors.text ? errors.text.message?.toString() : 'Текст'}
            sx={{ my: '1em' }}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button color={'error'} onClick={handleClose} variant={'outlined'}>
          Отмена
        </Button>
        <Button onClick={submitHandler()} variant={'outlined'} color={'success'}>
          Отправить жалобу
        </Button>
      </DialogActions>
    </Dialog>
  );
};
