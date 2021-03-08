import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './src/styles/SplashScreenStyles';
import login from './src/screens/login';

function NewUser ({ navigation }){
  return (
    <View style={styles.container}>
    <Text style={styles.txtTitle}>Welcome to the Medical Aid App</Text>
    <Image 
      style={styles.imgMain}
      source={require('./src/image/Logo.png')} />
     <TouchableOpacity 
        style={styles.btnGreen}
        onPress={()=> navigation.navigate('Login')}>
        {/* console.log('LOGIN')}> */}
        <Text style={styles.btnTxt}>
          Log In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.btnWhite}
        onPress={()=>console.log('CREATEANACCOUNT')}>
        <Text style={styles.btnTxt}>  
          Create an account
        </Text>
      </TouchableOpacity>
  </View>
  )
}

const AppNavigator = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <AppNavigator.Navigator initialRouteName="New">
        <AppNavigator.Screen name="New" component={NewUser} options={{headerShown: false}}/>
        <AppNavigator.Screen name="Login" component={login} options={{title: ''}}/>
      </AppNavigator.Navigator>
    </NavigationContainer>
  );
}

export default App;
