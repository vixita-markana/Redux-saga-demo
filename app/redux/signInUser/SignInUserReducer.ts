import { createReducer } from 'reduxsauce';
import {
  SignInActionType,
  SignInActions,
  SignInInitialStateTypes,
} from '../../Types';

/* ------------- Initial State ------------- */
export const INITIAL_STATE: SignInInitialStateTypes = {
  data: undefined,
  fetching: false,
  error: undefined,
};

/* ------------- Reducers ------------- */
// API request
export const request = (_state: SignInInitialStateTypes) => {
  return { fetching: true, data: undefined, error: undefined };
};

// API success
export const success = (
  state: SignInInitialStateTypes,
  action: SignInActionType,
) => {
  const { data }: SignInActionType = action;
  return {
    fetching: false,
    error: false,
    data: { token: data.token },
  };
};

// API failure
export const failure = (
  state: SignInInitialStateTypes,
  action: SignInActionType,
) => {
  const { error }: { error: string } = action;
  return Object.assign(state, { fetching: false, error });
};

/* ------------- Reducer Types ------------- */
export const signInUserReducer = createReducer<
  SignInInitialStateTypes,
  SignInActions
>(INITIAL_STATE, {
  [Types.SIGN_IN_USER_REQUEST]: request,
  [Types.SIGN_IN_USER_SUCCESS]: success,
  [Types.SIGN_IN_USER_FAILURE]: failure,
});
