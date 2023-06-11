// @flow
import * as React from 'react';
import { Rating } from '@mui/material';
import { Controller } from 'react-hook-form';

type Props = {
  control: any;
  name: string;
  max?: number;
};
export const ControlledRating = ({ control, max, name }: Props) => {
  max = 10;
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={5}
      render={({ field: { onChange, value } }) => (
        <Rating name={name} onChange={onChange} value={Number(value)} max={max} />
      )}
    />
  );
};
