// @flow
import * as React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

type ConfirmDialogProps = {
  isOpen: boolean;
  handleConfirm: () => void;
  handleClose: () => void;
  dialogText: string;
};
export const ConfirmDialog = ({
  handleConfirm,
  isOpen,
  handleClose,
  dialogText,
}: ConfirmDialogProps) => {
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{'Вы уверены?'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{dialogText}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleConfirm} color={'success'}>
          Подтвердить
        </Button>
        <Button onClick={handleClose} color={'error'}>
          Отмена
        </Button>
      </DialogActions>
    </Dialog>
  );
};
