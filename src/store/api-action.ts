import { createAsyncThunk } from'@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { AxiosInstance, AxiosError } from 'axios';

import { ApiRoute, AppRoute, HttpCode, AuthStatus} from '../const';
import { TFilm, TFilmId, FavoriteData } from '../types/film';
import { UserData, AuthData } from '../types/userData';
import { Token } from '../utils/utils';
import { getStateFromLs, setStateToLs } from '../utils/localStorageUtils/localStorageUtils';

import type { History } from 'history';


type Extra = {
  api: AxiosInstance,
  history: History
}

export const Action = {
  FETCH_FILMS: 'films/fetch',
  FETCH_FILM: 'data/fetchFilm',
  FETCH_FAVORITES_FILMS: 'data/fetchFavoritesFims',
  POST_FAVORITE_FILM: 'data/postFavoriteFilm',
  REGISTER_USER: 'user/signup',
  LOGIN_USER: 'user/login',
  LOGOUT_USER: 'user/logout',
  FETCH_USER_STATUS: 'user/fetch-status',
};


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

export const registerUser = createAsyncThunk<UserData, AuthData, { extra: Extra }>(
  Action.REGISTER_USER,
  async ({ email, password }, { extra }) => {
    const { api, history } = extra;
    
    try {
      const { data } = await api.post<UserData>(ApiRoute.Login, { email, password });
      const { token } = data;
      Token.save(token);

      const userDataWithFields = { ...data, password, favorites: [], auth: 'AUTH'}; 
      const state = getStateFromLs(email);

      state.push(userDataWithFields);
      
      setStateToLs(`${email}`, state);
      
      history.push(AppRoute.Root);

      return data;
    } catch (error) {
      toast.error('Укажите корректный e-mail');
      throw error;
    }
  }
);

export const loginUser = createAsyncThunk<UserData, AuthData, { extra: Extra }>(
  Action.LOGIN_USER,
  async ({ email, password }, { extra }) => {
    const { history } = extra;

    try {
      const user = getStateFromLs(`${email}`);

      if (user.email === email) {
        if (user.password === password) {
          const { token } = user;
          user.auth = AuthStatus.Auth;
          setStateToLs(`${email}`, user);

          Token.save(token);
          history.push(AppRoute.Root);
          toast.success('Успешная аутентификация');

          return user;
        } else {
          toast.error('Неверный пароль');
          throw new Error('Неверный пароль');
        }
        
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error('Пользователь с таким email не найден');
      throw error;
    }
  }
);

export const fetchUserStatus = createAsyncThunk<UserData, undefined, { extra: Extra }>(
  Action.FETCH_USER_STATUS,
  async (_, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<UserData>(ApiRoute.Login);

    return data;
  });

export const logoutUser = createAsyncThunk<void, string>(
  Action.LOGOUT_USER,
  async (email) => {
    try {
      Token.drop();

      const user = getStateFromLs(email);

      if (user) {
        user.auth = AuthStatus.NoAuth;
        setStateToLs(email, user);
      }
    } catch (error) {
      toast.error('Произошла ошибка');
      throw error;
    }
  }
);

export const postFavoriteFilms = createAsyncThunk<
  { id: TFilmId; isFavorite: boolean },
  FavoriteData,
  { extra: Extra }
>(
  Action.POST_FAVORITE_FILM,
  async ({ filmId, status }, { extra }) => {
    const { history } = extra;

    try {
      const userDataString = localStorage.getItem('userData');
      const userData = userDataString ? JSON.parse(userDataString) : [];

      const currentUser = userData.find((user: UserData) => user.auth === 'AUTH');

      if (!currentUser) {
        history.push(AppRoute.Login);
        throw new Error('Пользователь не аутентифицирован');
      }

      let favorites: { id: TFilmId; isFavorite: boolean }[] = currentUser.favorites || [];

      const filmData = { id: filmId, isFavorite: status === 1 };

      if (status === 1) {
        favorites.push(filmData);
      } else {
        favorites = favorites.filter((film) => film.id !== filmId);
      }

      currentUser.favorites = favorites;
      localStorage.setItem('userData', JSON.stringify(userData));

      return filmData;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchFavoriteFilms = createAsyncThunk<
  { id: TFilmId; isFavorite: boolean }[],
  FavoriteData,
  { extra: Extra }
>(
  Action.FETCH_FAVORITES_FILMS,
  async (_, { extra }) => {
    const { history } = extra;
    try {
      const userId = localStorage.getItem('userData.email');

      if (!userId) {
        history.push(AppRoute.Login);
        throw new Error('Пользователь не аутентифицирован');
      }

      const favoriteMoviesKey = `favoriteMovies_${userId}`;
      const favoriteMovies: { id: TFilmId; isFavorite: boolean }[] = JSON.parse(localStorage.getItem(favoriteMoviesKey) || '[]');

      return favoriteMovies;
    } catch (error) {
      throw error;
    }
  }
);

