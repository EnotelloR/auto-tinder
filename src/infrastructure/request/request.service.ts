import axios, { InternalAxiosRequestConfig } from 'axios';
import { IAuthResponse } from '@features/auth/auth.entity';
import { logOut } from '@features/auth';

const serverURL = import.meta.env.VITE_API_URL;

export const requestService = axios.create({
  withCredentials: true,
  baseURL: `${serverURL}`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

export const getAccessToken = () => localStorage.getItem('accessToken') || '';
export const setAccessToken = (accessToken: string) =>
  localStorage.setItem('accessToken', accessToken);
export const getUserID = () => localStorage.getItem('userId') || '';
export const setUserID = (userID: string) => localStorage.setItem('userId', userID);

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
    if (error.response?.status == 401 && error.config && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await requestService.post<IAuthResponse>(
          `${serverURL}/auth/refresh`,
        );
        setAccessToken(response.data.accessToken);
        setUserID(response.data.userId);
        return await requestService.request(originalRequest);
      } catch (e) {
        await Promise.reject(e).finally(() => logOut());
      }
    } else {
      await Promise.reject(error);
    }
  },
);
