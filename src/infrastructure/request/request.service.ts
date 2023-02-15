import axios, { InternalAxiosRequestConfig } from 'axios';
import { AuthResponse } from '@features/auth/auth.entity';

const serverURL = import.meta.env.VITE_API_URL;

export const requestService = axios.create({
  withCredentials: true,
  baseURL: `${serverURL}`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

const getAccessToken = () => localStorage.getItem('accessToken') || '';
const getRefreshToken = () => localStorage.getItem('refreshToken') || '';

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
    if (
      error.response?.status == 401 &&
      error.config &&
      !originalRequest._retry &&
      !!getRefreshToken()
    ) {
      originalRequest._retry = true;
      try {
        const response = await axios.post<AuthResponse>(`${serverURL}/auth/refresh`, {
          refreshToken: getRefreshToken(),
        });
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        return await requestService.request(originalRequest);
      } catch (e) {
        // await Promise.reject(e).finally(() => logOut());
      }
    } else {
      await Promise.reject(error);
    }
  },
);
