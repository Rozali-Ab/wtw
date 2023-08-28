import { createReducer } from '@reduxjs/toolkit';

import { films } from '../mocks/films';

import { changeCurrentGenre, getAllFilms } from './action';


const initialState = {
  currentGenre: 'All genres',
  films,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCurrentGenre, (state, action) => {
    state.currentGenre = action.payload;
  });
  builder.addCase(getAllFilms, (state, action) => {
    state.films = action.payload;
  });
});

export {reducer};