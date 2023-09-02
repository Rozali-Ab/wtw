import { createAction, createAsyncThunk } from'@reduxjs/toolkit';

import { ApiRoute, AppRoute} from '../const';
import { TFilm } from '../types/film';
import { UserData, AuthData } from '../types/userData';
import { Token } from '../utils/utils';

import type { History } from 'history';
import type { AxiosInstance } from 'axios';

type Extra = {
  api: AxiosInstance,
  history: History
}

export const Action = {
  SET_GENRE: 'films/currentGenre',
  FETCH_FILMS: 'films/fetch',
  SET_SIMILAR_FILMS: 'films/setSimilarFilms',
  LOGIN_USER: 'user/login',
  LOGOUT_USER: 'user/logout',
  FETCH_USER_STATUS: 'user/fetch-status',
  REDIRECT: '/redirect'
};

export const redirectToRoute = createAction<AppRoute>(Action.REDIRECT);
export const setCurrentGenre = createAction<string>(Action.SET_GENRE);

export const fetchFilms = createAsyncThunk<TFilm[], undefined, { extra: Extra }>(
  Action.FETCH_FILMS,
  async(_, { extra }) => {
    const { api} = extra;
    const { data } = await api.get<TFilm[]>(ApiRoute.Films);

    return data;
  }
);

export const fetchUserStatus = createAsyncThunk<UserData, undefined, { extra: Extra }>(
  Action.FETCH_USER_STATUS,
  async (_, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<UserData>(ApiRoute.Login);

    return data;
  });

export const loginUser = createAsyncThunk<UserData, AuthData, { extra: Extra }>(
  Action.LOGIN_USER,
  async ({ email, password }, { extra }) => {
    const { api, history } = extra;
    const { data } = await api.post<UserData>(ApiRoute.Login, { email, password });
    const { token } = data;
    Token.save(token);

    history.push(AppRoute.Root);
    return data;
  });
  

export const logoutUser = createAsyncThunk<void, undefined, { extra: Extra }>(
  Action.LOGOUT_USER,
  async (_, { extra }) => {
    const { api, history } = extra;
    await api.delete(AppRoute.Logout);
    Token.drop();
    history.push(AppRoute.Root);
  },
);

