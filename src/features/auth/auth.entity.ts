export interface IAuthResponse {
  accessToken: string;
  userId: string;
}

export interface IAuthStore {
  isAuth: boolean;
  setAuth: (bool: boolean) => void;
}

export interface IRegistrationUser {
  email: string;
  name: string;
  password: string;
}

export enum CurrentUserRoles {
  ROLE_ADMIN = 'ROLE_ADMIN',
  ROLE_MODERATOR = 'ROLE_MODERATOR',
  ROLE_REGULAR = 'ROLE_REGULAR',
}

export interface CurrentUser {
  id: number;
  email: string;
  role: CurrentUserRoles;
}
