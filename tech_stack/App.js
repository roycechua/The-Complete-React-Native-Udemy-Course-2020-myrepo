import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';

export default function App() {
  return (
    <Provider store={createStore(reducers)}>
      <View />
    </Provider>
  )
}
