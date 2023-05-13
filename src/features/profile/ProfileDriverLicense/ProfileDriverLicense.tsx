// @flow
import * as React from 'react';
import { useEffect, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import type { IDriverLicense } from '@features/profile/profile.entity';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { driverLicenseSchema } from '@features/profile/ProfileDriverLicense/driverLicense.schema';
import { Box, Button, MenuItem, Paper, Stack, TextField } from '@mui/material';
import { useAddDriveLicense, useDriverLicense } from '@features/profile';
import { useAlert } from '@features/alert';

type ProfileDriverLicenseProps = {
  userID: string;
};
export const ProfileDriverLicense = ({ userID }: ProfileDriverLicenseProps) => {
  const { data: driverLicense } = useDriverLicense(userID);

  const { mutateAsync } = useAddDriveLicense();

  const alert = useAlert();

  const onSubmit = (data: IDriverLicense) => {
    console.log(data);
    mutateAsync(data)
      .then(() => alert({ text: 'Вы успешно добавили права!', severity: 'success' }))
      .catch((error) => alert({ text: error.message, severity: 'error' }));
  };

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IDriverLicense>({
    resolver: yupResolver(driverLicenseSchema),
    defaultValues: useMemo(() => {
      return driverLicense;
    }, [driverLicense]),
  });

  useEffect(() => {
    reset(driverLicense);
  }, [driverLicense]);

  return (
    <Paper sx={{ borderRadius: '1em', my: 1 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={'1em'} sx={{ p: 2 }}>
          <Stack flexDirection={'row'} px={4} gap={4}>
            <TextField
              {...register('birthdate', { required: true })}
              type={'date'}
              error={!!errors.birthdate}
              label={
                errors.birthdate ? errors.birthdate.message?.toString() : 'Дата рождения'
              }
              sx={{ flex: 1 }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              {...register('birthPlace', { required: true })}
              error={!!errors.birthPlace}
              label={
                errors.birthPlace
                  ? errors.birthPlace.message?.toString()
                  : 'Место рождения'
              }
              sx={{ flex: 1 }}
              InputLabelProps={{ shrink: true }}
            />
          </Stack>
          <Stack flexDirection={'row'} px={4} gap={4}>
            <TextField
              {...register('issuedAt', { required: true })}
              type={'date'}
              error={!!errors.issuedAt}
              label={
                errors.issuedAt ? errors.issuedAt.message?.toString() : 'Дата выдачи'
              }
              sx={{ flex: 1 }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              {...register('validityPeriod', { required: true })}
              type={'date'}
              error={!!errors.validityPeriod}
              label={
                errors.validityPeriod
                  ? errors.validityPeriod.message?.toString()
                  : 'Действительны до'
              }
              sx={{ flex: 1 }}
              InputLabelProps={{ shrink: true }}
            />
          </Stack>
          <Stack flexDirection={'row'} px={4} gap={4}>
            <TextField
              {...register('divisionName', { required: true })}
              error={!!errors.divisionName}
              label={
                errors.divisionName
                  ? errors.divisionName.message?.toString()
                  : 'Орган выдачи'
              }
              sx={{ flex: 1 }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              {...register('passportNumber', { required: true })}
              error={!!errors.passportNumber}
              label={
                errors.passportNumber
                  ? errors.passportNumber.message?.toString()
                  : 'Серия и номер'
              }
              sx={{ flex: 1 }}
              InputLabelProps={{ shrink: true }}
            />
          </Stack>
          <Stack flexDirection={'row'} px={4} gap={4}>
            <Controller
              control={control}
              name={'driveCategory'}
              render={({ field: { onChange, value } }) => (
                <TextField
                  select
                  name={'Категория'}
                  id={'Категория'}
                  variant="outlined"
                  label={'Категория'}
                  SelectProps={{
                    multiple: true,
                    onChange: onChange,
                    value: value ? [...value] : [],
                  }}
                  sx={{ flex: 1 }}
                >
                  {['А', 'B', 'C', 'D', 'M'].map((category, index) => (
                    <MenuItem key={index} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
          </Stack>
          <Box mx={'auto'}>
            <Button type={'submit'} variant={'contained'} size={'large'}>
              Сохранить
            </Button>
          </Box>
        </Stack>
      </form>
    </Paper>
  );
};
