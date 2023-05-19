// @flow
import * as React from 'react';
import { usePreference } from '@features/profile';
import { Box, Stack } from '@mui/material';
import { LikesList } from '@features/likes';
import { LikeFilter } from '@features/likes/likes.entity';

export const LikesScreen = () => {
  const preference = usePreference();

  return (
    <Box>
      {preference.isSuccess && (
        <Stack gap={'1em'}>
          <LikesList carID={preference.data?.id ?? ''} likeType={LikeFilter.MATCH} />
          <LikesList carID={preference.data?.id ?? ''} likeType={LikeFilter.LIKING} />
          <LikesList carID={preference.data?.id ?? ''} likeType={LikeFilter.LIKED} />
        </Stack>
      )}
    </Box>
  );
};
