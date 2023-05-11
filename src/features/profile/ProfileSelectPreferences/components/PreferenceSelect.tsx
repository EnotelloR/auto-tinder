// @flow
import * as React from 'react';
import { MenuItem, TextField } from '@mui/material';

import type { Control } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import type { ICarPreference } from '@features/profile/profile.entity';
import type { ICarDetail } from '@features/cars';

type PreferenceSelectProps = {
  control: Control<ICarPreference, any>;
  label: string;
  // formName: typeof ...(Object.keys(ICarPreference));
  formName: any;
  data: ICarDetail[];
};

export const PreferenceSelect = ({
  control,
  label,
  formName,
  data,
}: PreferenceSelectProps) => {
  return (
    <Controller
      control={control}
      name={formName}
      render={({ field: { onChange, value } }) => (
        <TextField
          select
          name={label}
          id={label}
          variant="outlined"
          label={label}
          SelectProps={{
            multiple: true,
            onChange: onChange,
            value: value ? [...value] : [],
          }}
          sx={{ flex: 1 }}
        >
          {data.map((carDetail) => (
            <MenuItem value={carDetail.id}>{carDetail.name}</MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};
