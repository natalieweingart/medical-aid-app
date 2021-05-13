import * as React from 'react';
import 'react-native-gesture-handler';

import { useEffect, useContext, useMemo, useReducer } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/auth/LoginScreen';
import SignUpScreen from './screens/auth/SignUpScreen';
import SplashScreen from './screens/SplashScreen';
import StartSelection from './screens/Selection';
import DrawerNavigate from './routes/DrawerNavigate';

import AsyncStorage from '@react-native-community/async-storage';
import { stateConditionString } from './components/helpers';
import { AuthContext } from './components/Authcontext';
import { initialState, reducer } from './components/reducer';

// This file will read rather or not the account is logged in
const Stack = createStackNavigator();

const createHomeStack = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Drawer Screen"
        component={DrawerNavigate}
        initialParams={{ singOut: signOut }}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const App = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
      // };
    };
    bootstrapAsync();
  }, []);

  // In a production app, we need to send some data (usually username, password) to server and get a token
  // We will also need to handle errors if sign in failed
  // After getting token, we need to persist the token using `AsyncStorage`
  const authContextValue = useMemo(() => ({
    signIn: async (data) => {
      if (
        data &&
        data.emailAddress !== undefined &&
        data.password !== undefined
      ) {
        dispatch({ type: 'SIGN_IN', token: 'Token-For-Now' });
      } else {
        dispatch({ type: 'TO_SIGN_IN' });
      }
    },
    signOut: async (data) => {
      dispatch({ type: 'SIGN_OUT' });
    },

    signUp: async (data) => {
      if (
        data &&
        data.emailAddress !== undefined &&
        data.password !== undefined
      ) {
        dispatch({ type: 'SIGN_UP', token: 'dummy-auth-token' });
      } else {
        dispatch({ type: 'TO_SIGN_UP' });
      }
    },
  }),
    [],
  );

  const chooseScreen = (state) => {
    let navigateTo = stateConditionString(state);
    let arr = [];

    switch (navigateTo) {
      case 'LOAD_APP':
        arr.push(<Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />);
        break;

      case 'LOAD_HOME':
        arr.push(<Stack.Screen name="Home" component={createHomeStack} options={{ headerShown: false }} />);
        break;

      case 'LOAD_SIGNIN':
        arr.push(<Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />);
        break;

      case 'LOAD_SIGNUP':
        arr.push(<Stack.Screen name="SignUp" component={SignUpScreen} options={{
          headerShown: false,
          animationTypeForReplace: state.isSignout ? 'pop' : 'push',
        }} />);
        break;

      default:
        arr.push(<Stack.Screen name="Selection" component={StartSelection} options={{ headerShown: false }} />);
        break;
    }
    return arr[0];
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* {chooseScreen(state)} */}
          {/* <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} /> */}
          <Stack.Screen name="Drawer" component={DrawerNavigate} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;