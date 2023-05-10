export interface IAuthResponse {
  access_token: string;
  user_id: string;
}

export interface IAuthStore {
  isAuth: boolean;
  userID?: string;
  setAuth: (bool: boolean) => void;
  setUserID: (id: string) => void;
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
