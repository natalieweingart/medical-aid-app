import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import login from './src/screens/login';
import createAcc from './src/screens/createAccount';
import startApp from './src/screens/startApp';

const AppNavigator = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <AppNavigator.Navigator initialRouteName="StartApp">
        <AppNavigator.Screen name="StartApp" component={startApp} options={{headerShown: false}}/>
        <AppNavigator.Screen name="Login" component={login} options={{title: null}}/>
        <AppNavigator.Screen name="CreateAcc" component={createAcc} options={{title: null}}/>
      </AppNavigator.Navigator>
    </NavigationContainer>
  );
}

export default App;
