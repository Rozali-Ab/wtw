import { TState } from '../../types/store';
import { NameSpace } from '../../const';

export const getAuthorizationStatus = (state: TState) => state[NameSpace.User].authorizationStatus;
export const getUserData = (state: TState) => state[NameSpace.User].userData;