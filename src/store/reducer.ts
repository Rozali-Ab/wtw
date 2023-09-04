import { createReducer } from '@reduxjs/toolkit';

import { AuthStatus, DEFAULT_NAME_GENRE } from '../const';
import { TFilm} from '../types/film';
import { UserData } from '../types/userData';

import { 
  setCurrentGenre,
  fetchFilms,
  fetchFilm,
  fetchFavoriteFilms,
  postFavoriteFilms,
  fetchUserStatus,
  loginUser,
  logoutUser} from './action';


export type TInitialState = {
  currentGenre: string;
  films: TFilm[];
  favorite: TFilm[];
  currentFilm: TFilm | null;
  currentFilmLoadingEnd: boolean;
  authorizationStatus: AuthStatus;
  isFilmsLoading: boolean;
  user: UserData | null;
}

const initialState: TInitialState = {
  currentGenre: DEFAULT_NAME_GENRE,
  films: [],
  favorite: [],
  currentFilm: null,
  currentFilmLoadingEnd: false,
  authorizationStatus: AuthStatus.Unknown,
  isFilmsLoading: false,
  user: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentGenre, (state, action) => {
      state.currentGenre = action.payload;
    })
    .addCase(fetchFilms.pending, (state) => {
      state.isFilmsLoading = true;
    })
    .addCase(fetchFilm.fulfilled, (state, action) => {
      state.currentFilm = action.payload;
      state.currentFilmLoadingEnd = true;
    })
    .addCase(fetchFilm.pending, (state) => {
      state.currentFilmLoadingEnd = false;
    })
    .addCase(fetchFilm.rejected, (state) => {
      state.currentFilmLoadingEnd = true;
    })
    .addCase(fetchFavoriteFilms.fulfilled, (state, action) => {
      state.favorite = action.payload;
    })
    .addCase(postFavoriteFilms.fulfilled, (state, {payload: film}) => {
      const { id, isFavorite } = film;
      const stateFilms = state.favorite;
      state.favorite = isFavorite
        ? [...stateFilms, film]
        : stateFilms.filter((film) => film.id !== id); 
    })
    .addCase(fetchFilms.fulfilled, (state, action) => {
      state.films = action.payload;
      state.isFilmsLoading = false;
    })
    .addCase(fetchUserStatus.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isFilmsLoading = false;
    })
    .addCase(fetchUserStatus.rejected, (state) => {
      state.authorizationStatus = AuthStatus.NoAuth;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authorizationStatus = AuthStatus.Auth;
    })
    .addCase(loginUser.rejected, (state) => {
      state.authorizationStatus = AuthStatus.NoAuth;
    })
    .addCase(logoutUser.fulfilled, (state) => {
      state.authorizationStatus = AuthStatus.NoAuth;
      state.user = null;
    });
});

export {reducer};