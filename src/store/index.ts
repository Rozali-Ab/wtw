import { configureStore } from '@reduxjs/toolkit';

import { createAPI } from '../api';
import history from '../history';

import { reducer } from './reducer';
import { redirect } from './redirect';
import { fetchFilms, fetchUserStatus } from './action';

const api = createAPI();
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api,
          history
        },
      },
    }).concat(redirect),
});

store.dispatch(fetchFilms());
store.dispatch(fetchUserStatus());

export { store, api };