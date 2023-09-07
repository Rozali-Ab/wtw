import { configureStore } from '@reduxjs/toolkit';

import { filmsApi } from '../api/api';

import { rootReducer } from './root-reducer';
import { localStorageListener } from './middlewares/localStorageListener';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().prepend(localStorageListener.middleware).concat(filmsApi.middleware),
});