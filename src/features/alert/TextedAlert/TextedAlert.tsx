import React from 'react';
import { Alert, Snackbar } from '@mui/material';
import { useAlertStore } from '@features/alert/alert.hooks';

export const TextedAlert: React.FC = () => {
  const { open, setOpen, alert } = useAlertStore();
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert
        onClose={handleClose}
        severity={alert.severity}
        variant={'filled'}
        sx={{ width: '100%' }}
      >
        {alert.text}
      </Alert>
    </Snackbar>
  );
};
