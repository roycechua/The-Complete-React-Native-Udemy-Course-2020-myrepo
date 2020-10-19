import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';

let store = createStore(reducers);

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Text>Manager</Text>
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
