import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers';

import firebase from 'firebase';

import LoginForm from './src/components/LoginForm';

let store = createStore(reducers);

class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyB3feeRIsv2It3vdwWq0muxU8miPPogz28',
      authDomain: 'manager-21bb1.firebaseapp.com',
      databaseURL: 'https://manager-21bb1.firebaseio.com',
      projectId: 'manager-21bb1',
      storageBucket: 'manager-21bb1.appspot.com',
      messagingSenderId: '791593667104',
      appId: '1:791593667104:web:cca22abb934ff5664b8a45',
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  render() {
    return (
      <Provider store={store}>
        <View>
          <LoginForm/>
        </View>
      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({});
