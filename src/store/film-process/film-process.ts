import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { NameSpace, DEFAULT_NAME_GENRE } from '../../const';

import type { TFilm } from '../../types/film';
import type { THistory} from '../../types/userData';

export type TInitialState = {
  films: TFilm[];
  currentGenre: string;
  favorite: TFilm[];
  history: THistory[];
  currentFilmLoading: boolean;
};

export const initialState: TInitialState = {
  films: [],
  currentGenre: DEFAULT_NAME_GENRE,
  favorite: [],
  history: [],
  currentFilmLoading: false,
};

export const filmsProcess = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {
    setCurrentGenre: (state, action: PayloadAction<string>) => {
      state.currentGenre = action.payload;
    },
    setFavorites: (state, action) => {
      state.favorite = [...action.payload];
    },
    addFavorites: (state, action) => {
      state.favorite = [...state.favorite, action.payload];
    },
    deleteFavorites: (state, action) => {
      state.favorite = [...state.favorite.filter((item) => item.id !== action.payload)];
    },
    setHistory: (state, action) => {
      state.history = action.payload;
    },
    clearFavorites: (state) => {
      state.favorite = [];
    },
    clearHistory: (state) => {
      state.history = [];
    },
  },
});

export const { 
  setCurrentGenre, 
  setFavorites, 
  addFavorites,  
  setHistory, 
  deleteFavorites, 
  clearFavorites, 
  clearHistory,
} = filmsProcess.actions;