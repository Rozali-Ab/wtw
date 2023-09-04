import { createAction, createAsyncThunk } from'@reduxjs/toolkit';

import { ApiRoute, AppRoute, HttpCode} from '../const';
import { TFilm, TFilmId, FavoriteData } from '../types/film';
import { UserData, AuthData } from '../types/userData';
import { Token } from '../utils/utils';

import type { History } from 'history';
import type { AxiosInstance, AxiosError } from 'axios';

type Extra = {
  api: AxiosInstance,
  history: History
}

export const Action = {
  SET_GENRE: 'films/currentGenre',
  FETCH_FILMS: 'films/fetch',
  FETCH_FILM: 'data/fetchFilm',
  FETCH_FAVORITES_FILMS: 'data/fetchFavoritesFims',
  POST_FAVORITE_FILM: 'data/postFavoriteFilm',
  SET_SIMILAR_FILMS: 'films/setSimilarFilms',
  REGISTER_USER: 'user/signup',
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
  });

export const fetchFilm = createAsyncThunk<TFilm, TFilmId, { extra: Extra }>(
  Action.FETCH_FILM,
  async (filmId, { extra }) => {
    const { api, history} = extra;
    try {
      const { data } = await api.get<TFilm>(`${ApiRoute.Films}/${filmId}`);

      return data;
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response?.status === HttpCode.NotFound) {
        history.push(AppRoute.NotFound);
      }
      return Promise.reject(error);
    }
  },
);

export const fetchFavoriteFilms = createAsyncThunk<TFilm[], undefined, { extra: Extra}>(
  Action.FETCH_FAVORITES_FILMS,
  async(_, { extra }) => {
    const { api} = extra;
    const { data } = await api.get<TFilm[]>(ApiRoute.Favorite);

    return data;
  });

export const postFavoriteFilms = createAsyncThunk<TFilm, FavoriteData, { extra: Extra }>(
  Action.POST_FAVORITE_FILM,
  async({ filmId, status}, { extra }) => {
    const { api, history } = extra;

    try {
      const { data } = await api.post<TFilm>(`${ApiRoute.Favorite}/${filmId}/${status}`);

      return data;
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response?.status === HttpCode.NoAuth) {
        history.push(AppRoute.Login);
      }
      return Promise.reject(error);
    }
  });


export const fetchUserStatus = createAsyncThunk<UserData, undefined, { extra: Extra }>(
  Action.FETCH_USER_STATUS,
  async (_, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<UserData>(ApiRoute.Login);

    return data;
  });

export const registerUser = createAsyncThunk<UserData, AuthData, { extra: Extra }>(
  Action.REGISTER_USER,
  async ({ email, password }, { extra }) => {
    const { api, history } = extra;
    const { data } = await api.post<UserData>(ApiRoute.Login, { email, password });
    const { token } = data;
    Token.save(token);

    const storedDataString = localStorage.getItem('userData');
    const storedData = storedDataString ? JSON.parse(storedDataString) : [];
    storedData.push(data);
    localStorage.setItem('userData', JSON.stringify(storedData));
    history.push(AppRoute.Root);
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

