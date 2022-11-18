import {ApiResponse} from 'apisauce';
import {call, put} from 'redux-saga/effects';

import {signInUserAction} from '../redux';

interface SignInUserTypes {
  data: {token: string};
  message?: string;
  status?: number;
}

export interface ErrorTypes {
  error: string;
  message?: string;
  status?: number;
}

export interface SignInUserActionTypes {
  payload: {userName: string; password: string};
  type: string;
}

export interface SignInUserApiResponse {
  user: {token: string};
  message?: string;
  status?: number;
}

function* signInHandleResponse(response: SignInUserApiResponse) {
  if (response?.status === 200) {
    yield put(signInUserAction.signInUserSuccess(response));
  } else {
    yield put(signInUserAction.signInUserFailure(response.message));
  }
}

export function* signInUser(
  api: {signInUser: any},
  action: SignInUserActionTypes,
) {
  console.log('loginUser', action, api);
  const response: ApiResponse<SignInUserTypes, ErrorTypes> = yield call(
    api.signInUser,
    action.payload,
  );
  console.log('response.data', response);
  yield* signInHandleResponse(response?.data);
}
