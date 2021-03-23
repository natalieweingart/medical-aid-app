import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import RootStack from './routes/RootNavigate'; // for constructors (const)

import AsyncStorage from '@react-native-community/async-storage';
import { View, Text } from 'react-native';

const App = () => {
  // render()
  // if logged in 
  //    if the account is Patient
  //        go to the Patient route
  //    else if the acc is CT
  //        go to Caretaker Route
  // else new user navigater 
  return (
    // <NavigationContainer>
          <RootStack />
          // <View>
          //   <Text>
          //       HELLO
          //   </Text>
          // </View>
    // </NavigationContainer>
  );
};

export default App;