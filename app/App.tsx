import React, { FC } from 'react';
import { Provider } from 'react-redux';
import SignInScreen from './modules/SignInScreen';
import store from './redux/Store';

const App: FC = () => {
  return (
    <Provider store={store}>
      <SignInScreen />
    </Provider>
  );
};

export default App;
