import { configureStore } from '@reduxjs/toolkit';

import { createAPI } from '../api';

import { reducer } from './reducer';
import { fetchFilms, fetchUserStatus } from './action';

const api = createAPI();
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

store.dispatch(fetchFilms());
store.dispatch(fetchUserStatus());

export { store, api };