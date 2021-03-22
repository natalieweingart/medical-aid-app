import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import login from '../screens/LoginScreen';
import chooseAcc from '../screens/createAccount/chooseCreate';
import startApp from '../screens/newStartApp';

const startNavigator = createStackNavigator();

export const AppNavigator = () =>{
  return (
    <NavigationContainer>
      <startNavigator.Navigator initialRouteName="NewStartApp">
        <startNavigator.Screen name="NewStartApp" component={startApp} options={{ headerShown: false }} />
        <startNavigator.Screen name="Login" component={login} options={{ title: null }} />
        <startNavigator.Screen name="ChooseAcc" component={chooseAcc} options={{ title: null }} />
      </startNavigator.Navigator>
    </NavigationContainer>
  );
}

// export default startNavigator;