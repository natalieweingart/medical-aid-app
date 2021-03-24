import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/auth/LoginScreen';
import chooseAcc from '../screens/auth/chooseCreate';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';

const RootNavigate = createStackNavigator();

// Stack Navigating 
const RootStack = ({ navigation }) => {
  return (
    <NavigationContainer>
      <RootNavigate.Navigator headerMode='none'>
        <RootNavigate.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <RootNavigate.Screen name="Login" component={LoginScreen} options={{ title: null }} />
        <RootNavigate.Screen name="ChooseAcc" component={chooseAcc} options={{ title: null }} />
        <RootNavigate.Screen name="Home" component={HomeScreen} />
      </RootNavigate.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;