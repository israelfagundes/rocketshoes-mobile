import './config/ReactotronConfig';

import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';

import Routes from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#141419" />
      <Routes />
    </Provider>
  );
}
