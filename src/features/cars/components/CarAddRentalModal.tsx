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

type CarAddRentalModalProps = {
  open: boolean;
  handleClose: () => void;
  handleSentRequest: () => void;
};

export const CarAddRentalModal = ({
  handleClose,
  handleSentRequest,
  open,
}: CarAddRentalModalProps) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Отправка запроса</DialogTitle>
      <DialogContent>
        <DialogContentText>Введите даты желаемой аренды</DialogContentText>
        <TextField
          margin="dense"
          id="startDate"
          label="Начальная дата"
          type="date"
          fullWidth
          variant="standard"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          margin="dense"
          id="endDate"
          label="Конечная дата"
          type="date"
          fullWidth
          variant="standard"
          InputLabelProps={{ shrink: true }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Отмена</Button>
        <Button onClick={handleSentRequest}>Отправить запрос</Button>
      </DialogActions>
    </Dialog>
  );
};
