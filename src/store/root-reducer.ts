import { combineReducers } from '@reduxjs/toolkit';

import { NameSpace } from '../const';

import { filmsProcess } from './film-process/film-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Films]: filmsProcess.reducer,
});