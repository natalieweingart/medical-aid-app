import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import { AppNavigator } from './routes/NavigateStart';

const Stack = createStackNavigator();

const App = () => {
  // if logged in 
  //    if the account is Patient
  //        go to the Patient route
  //    else if the acc is CT
  //        go to Caretaker Route
  // else new user navigater 
  return <AppNavigator />;
}

export default App;