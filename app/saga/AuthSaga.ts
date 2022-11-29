import { ApiResponse } from 'apisauce';
import { call, put } from 'redux-saga/effects';

import { signInUserAction } from '../redux';
import { ErrorTypes, SignInUserActionTypes, SignInUserTypes } from '../Types';

function* signInHandleResponse(response: SignInUserTypes) {
  if (response?.status === 200) {
    yield put(signInUserAction.signInUserSuccess(response));
  } else {
    yield put(signInUserAction.signInUserFailure(response.message));
  }
}

export function* signInUser(
  api: { signInUser: any },
  action: SignInUserActionTypes,
) {
  const response: ApiResponse<SignInUserTypes, ErrorTypes> = yield call(
    api.signInUser,
    action.payload,
  );
  yield* signInHandleResponse(response?.data);
}
