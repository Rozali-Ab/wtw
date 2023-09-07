import { createSlice } from '@reduxjs/toolkit';

import { AuthStatus, NameSpace } from '../../const';

import type { UserData } from '../../types/userData';

export type TInitialState = {
  authorizationStatus: AuthStatus;
  userData: UserData | null;
};

export const initialState: TInitialState = {
  authorizationStatus: AuthStatus.Unknown,
  userData: null,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.authorizationStatus = AuthStatus.Auth;
      state.userData = action.payload;
    },
    logOut: (state) => {
      state.authorizationStatus = AuthStatus.NoAuth;
      state.userData = null;
    },
    registrationUser: (state, action) => {
      state.userData = action.payload;
      state.authorizationStatus = AuthStatus.Auth;
    }
  },
});

export const { logIn, logOut } = userProcess.actions;
