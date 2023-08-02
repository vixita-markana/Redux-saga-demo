import React, { useEffect } from 'react';

import {
  signInUserAction,
  useAppDispatch,
  AuthSelectors,
  useAppSelector,
} from '../redux';
import { Text } from 'react-native';

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
  return <Text>sddd</Text>;
};

export default SignInScreen;
