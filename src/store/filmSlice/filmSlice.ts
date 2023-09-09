import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { NameSpace, DEFAULT_NAME_GENRE } from '../../const';

import type { TFilm } from '../../types/film';
import type { THistory} from '../../types/userData';

export type TInitialState = {
  currentGenre: string;
  favorite: TFilm[];
  history: THistory[];
};

export const initialState: TInitialState = {
  currentGenre: DEFAULT_NAME_GENRE,
  favorite: [],
  history: [],
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
    updateHistory: (state, action) => {
      state.history = [action.payload, ...state.history];
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
  updateHistory,
  deleteFavorites, 
  clearFavorites, 
  clearHistory,
} = filmsProcess.actions;