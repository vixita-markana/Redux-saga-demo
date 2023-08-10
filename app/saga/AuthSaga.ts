import { ApiResponse } from 'apisauce';
import { call, put } from 'redux-saga/effects';
import { signInUserAction } from '../redux';
import {
  ErrorTypes,
  SignInUserActionTypes,
  SignInUserAPITypes,
  SignInUserTypes,
} from '../Types';

function* signInHandleResponse(response: SignInUserTypes | ErrorTypes) {
  if (response?.status === 200) {
    yield put(signInUserAction.signInUserSuccess(response));
  } else {
    yield put(signInUserAction.signInUserFailure(response.message));
  }
}

export function* signInUser(
  api: SignInUserAPITypes,
  action: SignInUserActionTypes,
) {
  const response: ApiResponse<SignInUserTypes, ErrorTypes> = yield call(
    api.signInUser,
    action.payload,
  );
  yield* signInHandleResponse(response?.data);
}
