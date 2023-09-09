import { createListenerMiddleware } from '@reduxjs/toolkit';

import { localStorageUtil } from '../../utils/localStorageUtils/localStorageUtils';
import { init } from '../init';
import { searchAction } from '../searchAction';
import { logIn } from '../userSlice/userSlice';
import { setFavorites, addFavorites, deleteFavorites, setHistory, updateHistory } from '../filmSlice/filmSlice';
import { THistory } from '../../types/userData';

const localStorageListener = createListenerMiddleware();

localStorageListener.startListening({
  actionCreator: init,
  
  effect: (action, listenerApi) => {
    action.payload = undefined;
    const email = localStorageUtil.getAuth();
    if (email) {
      const userInfo = localStorageUtil.getItem(email);
      listenerApi.dispatch(logIn(userInfo));
      listenerApi.dispatch(setFavorites(userInfo?.favorites));
      listenerApi.dispatch(setHistory(userInfo?.history));
    }
  },
});

localStorageListener.startListening({
  actionCreator: logIn,
  effect: (action) => {
    localStorageUtil.setItem(action.payload.email, action.payload);
    localStorageUtil.setAuth(action.payload.email);
  }
});

localStorageListener.startListening({
  actionCreator: addFavorites,
  effect: (action) => {
    const email = localStorageUtil.getAuth();
    if (email) {
      localStorageUtil.addFavorite(email, action.payload);
    }
  },
});

localStorageListener.startListening({
  actionCreator: deleteFavorites,
  effect: (action) => {
    const email = localStorageUtil.getAuth();
    if (email) {
      localStorageUtil.deleteFavorite(email, action.payload);
    }
  },
});

localStorageListener.startListening({
  actionCreator: searchAction,
  effect: (action, listenerApi) => {
    const {user, query} = action.payload;
    if (user) {
      if (query === '') {
        return;
      }
      let history = localStorageUtil.getSearchHistory(user.email);
      if (!history) {
        history = [];
      }
      const historyRecord: THistory = {
        query,
      };
      history.push(historyRecord);
      localStorageUtil.setSearchHistory(user.email, history);
      listenerApi.dispatch(updateHistory(historyRecord));
    }
  },
});

export {localStorageListener};