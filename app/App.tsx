import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { SignInScreen } from './modules';
import store from './redux';

const App: FC = () => {
  return (
    <Provider store={store}>
      <SignInScreen />
    </Provider>
  );
};

export default App;
