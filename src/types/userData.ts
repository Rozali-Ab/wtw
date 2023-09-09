import { TFilm } from './film';

export type THistory = {
  query: string;
}

export type UserData = {
  id: string;
  name: string;
  email: string;
  password: string;
  auth: string;
  favorites: TFilm[];
  history: THistory[];
};

export type AuthData = {
  email: string;
  password: string;
};
