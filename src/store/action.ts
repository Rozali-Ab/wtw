import { createAction, createAsyncThunk } from'@reduxjs/toolkit';

import { ApiRoute } from '../const';
import { TFilm } from '../types/film';
import { UserData, AuthData } from '../types/userData';
import { Token } from '../utils/utils';

import type { AxiosInstance } from 'axios';

export const Action = {
  SET_GENRE: 'films/currentGenre',
  FETCH_FILMS: 'films/fetch',
  SET_SIMILAR_FILMS: 'films/setSimilarFilms',
  LOGIN_USER: 'user/login',
  FETCH_USER_STATUS: 'user/fetch-status',
};

export const setCurrentGenre = createAction<string>(Action.SET_GENRE);

export const fetchFilms = createAsyncThunk<TFilm[], undefined, { extra:
AxiosInstance }>(
  Action.FETCH_FILMS,
  async(_, { extra: api}) => {
    const { data } = await api.get<TFilm[]>(ApiRoute.Films);

    return data;
  }
);

export const fetchUserStatus = createAsyncThunk<UserData, undefined, { extra: AxiosInstance }>(
  Action.FETCH_USER_STATUS,
  async (_, { extra: api }) => {
    const { data } = await api.get<UserData>(ApiRoute.Login);

    return data;
  });

export const loginUser = createAsyncThunk<AuthData['email'], AuthData, { extra: AxiosInstance }>(
  Action.LOGIN_USER,
  async ({ email, password }, { extra: api }) => {
    const { data } = await api.post<UserData>(ApiRoute.Login, { email, password });
    const { token } = data;

    Token.save(token);
    window.history.back();

    return email;
  });


