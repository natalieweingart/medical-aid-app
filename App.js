import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './src/styles/SplashScreenStyles';

function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
    <Text style={styles.txtTitle}>Welcome to the Medical Aid App</Text>
    <Image 
      style={styles.imgMain}
      source={require('./src/image/Logo.png')} />
     <TouchableOpacity
       style={styles.btnGreen}
       onPress={()=> navigation.navigate('New')}>
        <Text style={styles.btnTxt}> 
          Click to continue 
        </Text>
    </TouchableOpacity>
  </View>
  )
}

function NewUser({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Text style={styles.txtTitle}>Medical Aid App</Text> */}
      <TouchableOpacity 
        style={styles.btnGreen}
        onPress={()=>console.log('LOGIN')}>
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
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name="New" component={NewUser} options={{title: ''}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
