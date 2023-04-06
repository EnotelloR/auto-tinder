import React from 'react';
import { MenuItem, TextField } from '@mui/material';
import type { FieldValues } from 'react-hook-form';
import type { UseFormRegister } from 'react-hook-form/dist/types/form';
import type { ICarDetail } from '@features/cars';

interface DetailSelectProps {
  label: string;
  registerName: string;
  requiredText: string;
  isError: boolean;
  register: UseFormRegister<FieldValues>;
  data: ICarDetail[];
  disabled?: boolean;
}

export const DetailsSelect: React.FC<DetailSelectProps> = ({
  label,
  registerName,
  requiredText,
  isError,
  register,
  data,
  disabled = false,
}) => {
  return (
    <TextField
      select
      label={label}
      defaultValue=""
      fullWidth
      inputProps={register(registerName, {
        required: requiredText,
      })}
      error={isError}
      disabled={disabled}
    >
      {data.map((option) => (
        <MenuItem key={option.id} value={option.id}>
          {option.name}
        </MenuItem>
      ))}
    </TextField>
  );
};
