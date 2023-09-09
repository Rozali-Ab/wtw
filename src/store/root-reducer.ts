import { combineReducers } from '@reduxjs/toolkit';

import { filmsApi} from '../api/api';
import { NameSpace } from '../const';

import { filmsProcess } from './filmSlice/filmSlice';
import { userProcess } from './userSlice/userSlice';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Films]: filmsProcess.reducer,
  [filmsApi.reducerPath]: filmsApi.reducer,
});

