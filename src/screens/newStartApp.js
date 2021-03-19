import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/StartScreenStyles';

function newStartApp({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>Welcome to the Medical Aid App</Text>
      <Image
        style={styles.imgMain}
        source={require('../image/Logo.png')} />
      <TouchableOpacity
        style={styles.btnGreen}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.btnTxt}>
          Log In
          </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnWhite}
        onPress={() => navigation.navigate('ChooseAcc')}>
        <Text style={styles.btnTxt}>
          Create an account
          </Text>
      </TouchableOpacity>
    </View>
  )
}

export default newStartApp;