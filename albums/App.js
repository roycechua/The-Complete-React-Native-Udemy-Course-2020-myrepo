// Import a library to help create a component
import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
// import ReactNative from 'react-native';
// import { AppRegistry, Text } from 'react-native';

// Create a component
// We need to return only one top level tag
// View tag can contain multiple components
const App = () => (
    <View>
        <Header headerText={'Albums'}/>
        <AlbumList/>
    </View>
);

// Alternative way
// const App = () => (
//     <Text>Some Text</Text>
//   );

// Render it to the device
// This is done in the index.js
export default App;
// AppRegistry.registerComponent('app1', () => App);