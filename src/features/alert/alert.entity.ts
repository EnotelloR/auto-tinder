import type { AlertColor } from '@mui/material';

export interface IAlertStore {
  open: boolean;
  alert: IAlert;
  setOpen: (bool: boolean) => void;
  setAlert: (alert: IAlert) => void;
}

export interface IAlert {
  text: string;
  severity: AlertColor;
}
