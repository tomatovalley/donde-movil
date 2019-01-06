import React from 'react';
import { } from 'react-native';
import LoginScreen from './src/Screens/Login/LoginScreen';
import RegisterScreen from './src/Screens/Register/RegisterScreen';

import {createStackNavigator, createAppContainer} from 'react-navigation';


const AppStackNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  Register: {screen: RegisterScreen}
});

const App = createAppContainer(AppStackNavigator);

export default App;
  


