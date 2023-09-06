import { createListenerMiddleware } from '@reduxjs/toolkit';

import { localStorageUtil } from '../../utils/localStorageUtils/localStorageUtils';
import { init } from '../init';
import { logIn } from '../user-process/user-process';
import { setFavorites, addFavorites, deleteFavorites, setHistory } from '../film-process/film-process';
import { registrationUser } from '../api-action';

const localStorageListener = createListenerMiddleware();

localStorageListener.startListening({
  actionCreator: init,
  //@ts-ignore
  effect: (action, listenerApi) => {
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
  actionCreator: registrationUser.fulfilled, 
  effect: (action) => {
    localStorageUtil.setItem(action.payload.email, action.payload);
    localStorageUtil.setAuth(action.payload.email);
  }
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


export {localStorageListener};