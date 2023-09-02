import { Middleware } from 'redux';

import history from '../history';

import { reducer } from './reducer';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) => 
    (next) =>
      (action) => {
        if (action.type === '/redirect') {
          history.push(action.payload);
        }

        return next(action);
      };
