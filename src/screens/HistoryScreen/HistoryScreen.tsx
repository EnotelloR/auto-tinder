import * as React from 'react';
import { History } from '@features/history';
import { usePreference } from '@features/profile';

export const HistoryScreen = () => {
  const preference = usePreference();

  return preference.data?.id ? <History carID={preference.data.id} /> : null;
};
