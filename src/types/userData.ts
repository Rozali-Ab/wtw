export type UserData = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  token: string;
  password: string;
  auth: string;
};

export type AuthData = {
  email: string;
  password: string;
};

export type UserAuth = Pick<UserData, 'email'> & { password: string };