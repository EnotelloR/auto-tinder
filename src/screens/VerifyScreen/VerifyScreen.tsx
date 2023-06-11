import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Verify } from '@features/auth';
import { routes } from '@infrastructure/routing';

export const VerifyScreen = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const navigate = useNavigate();
  !token && navigate(routes.login.path);
  return <>{token && <Verify token={token} />}</>;
};
