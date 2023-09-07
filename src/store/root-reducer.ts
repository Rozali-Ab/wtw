import { combineReducers } from '@reduxjs/toolkit';

import { filmsApi } from '../api/api';
import { NameSpace } from '../const';

import { filmsProcess } from './film-process/film-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Films]: filmsProcess.reducer,
  [filmsApi.reducerPath]: filmsApi.reducer,
});