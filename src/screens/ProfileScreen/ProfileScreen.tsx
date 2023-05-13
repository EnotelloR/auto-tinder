// @flow
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useAuthStore } from '@features/auth/auth.hooks';
import { ProfileBaseInfo, ProfileSelectPreferences } from '@features/profile';
import { useProfile } from '@features/profile/profile.hooks';
import { Box, Container, Typography } from '@mui/material';
import { ProfileDriverLicense } from '@features/profile/ProfileDriverLicense';

export const ProfileScreen = () => {
  const [userID, setUserID] = useState('');
  const { userID: id } = useAuthStore();
  useEffect(() => {
    id && setUserID(id);
  }, []);

  const { data: profile, isSuccess } = useProfile(userID);
  return (
    <Box>
      {isSuccess && (
        <Container>
          <Container>
            <Typography textAlign={'center'} variant={'h2'}>
              Профиль
            </Typography>
          </Container>
          <ProfileBaseInfo email={profile.email} name={profile.name} id={profile.id} />
          <Container>
            <Typography textAlign={'center'} variant={'h2'}>
              Выбор предпочтений
            </Typography>
          </Container>
          <ProfileSelectPreferences />
          <Container sx={{ my: 2 }}>
            <Typography textAlign={'center'} variant={'h2'}>
              Водительские права
            </Typography>
          </Container>
          <ProfileDriverLicense userID={userID} />
        </Container>
      )}
    </Box>
  );
};
