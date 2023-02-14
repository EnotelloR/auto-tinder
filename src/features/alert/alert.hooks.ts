import { create } from 'zustand';
import { IAlert, IAlertStore } from '@features/alert/alert.entity';

export const useAlertStore = create<IAlertStore>((set) => ({
  open: false,
  alert: { text: '', severity: 'success' },
  setOpen: (bool: boolean) => set(() => ({ open: bool })),
  setAlert: (alert: IAlert) => set(() => ({ alert: alert })),
}));

export const useAlert = () => {
  const { setAlert, setOpen } = useAlertStore();
  return (alert: IAlert) => {
    setAlert(alert);
    setOpen(true);
  };
};
