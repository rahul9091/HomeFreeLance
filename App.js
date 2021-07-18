import React from 'react';
import { View } from 'react-native';
import MainScreen from './src/Screens/MainScreen';
import {Provider} from 'react-redux'
import { store } from './src/redux/store';

// import { Container } from './styles';

export default function App () {
  return (
    <Provider store={store}>
    <MainScreen/>
    </Provider>
  );
}
