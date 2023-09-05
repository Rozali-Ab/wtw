import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { NameSpace, DEFAULT_NAME_GENRE } from '../../const';
import { TFilm, TFilmId } from '../../types/film';
import { 
  fetchFilms,
  fetchFilm,
  fetchFavoriteFilms,
  postFavoriteFilms,
} from '../api-action';

export type TInitialState = {
  films: TFilm[];
  currentGenre: string;
  favorite:  { id: TFilmId; isFavorite: boolean }[];
  isFilmsLoading: boolean;
  currentFilm: TFilm | null;
  currentFilmLoading: boolean;
};

export const initialState: TInitialState = {
  films: [],
  currentGenre: DEFAULT_NAME_GENRE,
  favorite: [],
  isFilmsLoading: false,
  currentFilm: null,
  currentFilmLoading: false,
};

export const filmsProcess = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {
    setCurrentGenre: (state, action: PayloadAction<string>) => {
      state.currentGenre = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.isFilmsLoading = true;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isFilmsLoading = false;
      })
      .addCase(fetchFilm.fulfilled, (state, action) => {
        state.currentFilm = action.payload;
        state.currentFilmLoading = true;
      })
      .addCase(fetchFilm.pending, (state) => {
        state.currentFilmLoading = false;
      })
      .addCase(fetchFilm.rejected, (state) => {
        state.currentFilmLoading = true;
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
      });
  },
});

export const { setCurrentGenre } = filmsProcess.actions;