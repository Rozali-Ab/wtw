export type UserData = {
  id: number;
  name: string;
  email: string;
  avatarUrl: string;
  token: string;
};

export type AuthData = {
  email: string;
  password: string;
};

export type UserAuth = Pick<UserData, 'email'> & { password: string };