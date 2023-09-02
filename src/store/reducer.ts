import { createReducer } from '@reduxjs/toolkit';

import { AuthStatus, DEFAULT_NAME_GENRE } from '../const';
import { TFilm} from '../types/film';
import { UserData } from '../types/userData';

import { setCurrentGenre, fetchFilms, fetchUserStatus, loginUser, logoutUser} from './action';


export type TInitialState = {
  currentGenre: string;
  films: TFilm[];
  authorizationStatus: AuthStatus;
  isFilmsLoading: boolean;
  user: UserData | null;
}

const initialState: TInitialState = {
  currentGenre: DEFAULT_NAME_GENRE,
  films: [],
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