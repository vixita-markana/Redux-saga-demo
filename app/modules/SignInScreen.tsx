import React, { useEffect } from 'react';
import {
  AuthSelectors,
  signInUserAction,
  useAppDispatch,
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

  useEffect(() => {
    onSubmit();
  }, []);

  //  ...
};

export default SignInScreen;
