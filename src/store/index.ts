import { configureStore } from '@reduxjs/toolkit';

import { createAPI } from '../api';
import history from '../history';

import { rootReducer } from './root-reducer';
import { redirect } from './middlewares/redirect';


const api = createAPI();
const store = configureStore({
  reducer: rootReducer,
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


export { store, api };