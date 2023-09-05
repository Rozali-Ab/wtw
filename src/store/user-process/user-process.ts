import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthStatus, NameSpace } from '../../const';
import { UserData } from '../../types/userData';
import { fetchUserStatus, loginUser, logoutUser, registerUser} from '../api-action';

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
    changeAuthStatus: (state, action: PayloadAction<AuthStatus>) => {
      state.authorizationStatus = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUserStatus.fulfilled, (state, action) => {
        state.userData = action.payload;
      })
      .addCase(fetchUserStatus.rejected, (state) => {
        state.authorizationStatus = AuthStatus.NoAuth;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.authorizationStatus = AuthStatus.Auth;
      })
      .addCase(loginUser.rejected, (state) => {
        state.authorizationStatus = AuthStatus.NoAuth;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.authorizationStatus = AuthStatus.NoAuth;
        state.userData = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.authorizationStatus = AuthStatus.Auth;
      });
  },
});

export const { changeAuthStatus } = userProcess.actions;
