import type { InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';
import type { IAuthResponse } from '@features/auth/auth.entity';
import { logOut } from '@features/auth';
import { getAccessToken, setAccessToken, setLocalUserID } from './request.localstorage';

const serverURL = import.meta.env.VITE_API_URL;

export const requestService = axios.create({
  withCredentials: true,
  baseURL: `${serverURL}`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

requestService.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  if (getAccessToken()) {
    (config.headers ?? {}).Authorization = `Bearer ${getAccessToken()}`;
  }
  return config;
});

requestService.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    console.log(!!error.config);
    if (
      error.response?.status == 401 &&
      getAccessToken() &&
      error.config &&
      error.response?.data.Exception === 'TokenExpiredException' &&
      !originalRequest._retry
    ) {
      console.log(originalRequest._retry);
      originalRequest._retry = true;
      try {
        const response = await requestService.post<IAuthResponse>(
          `${serverURL}/auth/refresh`,
        );
        setAccessToken(response.data.access_token);
        setLocalUserID(response.data.userId);
        return await requestService.request(originalRequest);
      } catch (e) {
        await Promise.reject(e).finally(() => logOut());
      }
    } else {
      await Promise.reject(error);
    }
  },
);
