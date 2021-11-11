export interface User {
  id: string;
  email: string;
  jwtToken: string;
  refreshToken: string;
}

export interface UserState {
  user: User;
  loading: boolean;
  errors: string;
}
