// @flow
import * as React from 'react';
import { Box, Button, MenuItem, Paper, Stack, TextField } from '@mui/material';

export const ProfileSelectPreferences = () => {
  return (
    <Paper sx={{ borderRadius: '1em', my: 1 }}>
      <Stack gap={'1em'} sx={{ p: 2 }}>
        <Stack flexDirection={'row'} px={4} gap={4}>
          <TextField label={'Минимальная цена'} sx={{ flex: 1 }} />
          <TextField label={'Максимальная цена'} sx={{ flex: 1 }} />
        </Stack>
        <Stack flexDirection={'row'} px={4} gap={4}>
          <TextField
            select
            name="userRoles"
            id="userRoles"
            variant="outlined"
            label="Брэнд"
            // SelectProps={{
            //   multiple: true,
            //   value: formState.userRoles,
            //   onChange: handleFieldChange,
            // }}
            sx={{ flex: 1 }}
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="user1">User1</MenuItem>
            <MenuItem value="user2">User2</MenuItem>
          </TextField>{' '}
          <TextField
            select
            name="userRoles"
            id="userRoles"
            variant="outlined"
            label="Кузов"
            // SelectProps={{
            //   multiple: true,
            //   value: formState.userRoles,
            //   onChange: handleFieldChange,
            // }}
            sx={{ flex: 1 }}
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="user1">User1</MenuItem>
            <MenuItem value="user2">User2</MenuItem>
          </TextField>
        </Stack>
        <Stack flexDirection={'row'} px={4} gap={4}>
          <TextField
            select
            name="userRoles"
            id="userRoles"
            variant="outlined"
            label="Коробка передач"
            // SelectProps={{
            //   multiple: true,
            //   value: formState.userRoles,
            //   onChange: handleFieldChange,
            // }}
            sx={{ flex: 1 }}
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="user1">User1</MenuItem>
            <MenuItem value="user2">User2</MenuItem>
          </TextField>{' '}
          <TextField
            select
            name="userRoles"
            id="userRoles"
            variant="outlined"
            label="Двигатель"
            // SelectProps={{
            //   multiple: true,
            //   value: formState.userRoles,
            //   onChange: handleFieldChange,
            // }}
            sx={{ flex: 1 }}
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="user1">User1</MenuItem>
            <MenuItem value="user2">User2</MenuItem>
          </TextField>
        </Stack>
        <Stack flexDirection={'row'} px={4} gap={4}>
          <TextField
            select
            name="userRoles"
            id="userRoles"
            variant="outlined"
            label="Привод"
            // SelectProps={{
            //   multiple: true,
            //   value: formState.userRoles,
            //   onChange: handleFieldChange,
            // }}
            sx={{ flex: 1 }}
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="user1">User1</MenuItem>
            <MenuItem value="user2">User2</MenuItem>
          </TextField>
          <TextField
            select
            name="userRoles"
            id="userRoles"
            variant="outlined"
            label="Город"
            // SelectProps={{
            //   multiple: true,
            //   value: formState.userRoles,
            //   onChange: handleFieldChange,
            // }}
            sx={{ flex: 1 }}
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="user1">User1</MenuItem>
            <MenuItem value="user2">User2</MenuItem>
          </TextField>
        </Stack>
        <Stack flexDirection={'row'} px={4} gap={4}>
          <TextField label={'Минимальный год выпуска'} sx={{ flex: 1 }} />
          <TextField label={'Максимальный год выпуска'} sx={{ flex: 1 }} />
        </Stack>
        <Stack flexDirection={'row'} px={4} gap={4}>
          <TextField label={'Минимальный пробег (км.)'} sx={{ flex: 1 }} />
          <TextField label={'Максимальный пробег (км.)'} sx={{ flex: 1 }} />
        </Stack>
        <Box mx={'auto'}>
          <Button variant={'contained'} size={'large'}>
            Сохранить
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
};
