import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import login from './screens/login';
import chooseAcc from './screens/createAccount/chooseCreate';
import startApp from './screens/newStartApp';

const AppNavigator = createStackNavigator();
// const AuthContext = React.createContext();

function App() {
  return (
    <NavigationContainer>
      <AppNavigator.Navigator initialRouteName="NewStartApp">
        <AppNavigator.Screen name="NewStartApp" component={startApp} options={{ headerShown: false }} />
        <AppNavigator.Screen name="Login" component={login} options={{ title: null }} />
        <AppNavigator.Screen name="ChooseAcc" component={chooseAcc} options={{ title: null }} />
      </AppNavigator.Navigator>
    </NavigationContainer>
  );
}

export default App;
