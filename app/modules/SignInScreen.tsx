import React from 'react';

import {
  signInUserAction,
  useAppDispatch,
  AuthSelectors,
  useAppSelector,
} from '../redux';

const SignInScreen = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector<boolean>(AuthSelectors.getLoading);
  const error = useAppSelector<string | undefined>(AuthSelectors.getError);

  const onSubmit = () => {
    dispatch(
      signInUserAction.signInUserRequest({
        useName: 'test',
        password: 'test',
      }),
    );
  };

  //  ...
};

export default SignInScreen;
