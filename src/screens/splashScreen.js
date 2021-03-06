import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, View, Image, Button, TouchableOpacity } from 'react-native';
import styles from './src/pages/styles';
import startScreen from './src/pages/startScreen';

export default class splashScreen extends Component {
  render () {
  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <Text style={styles.txtMain}>Welcome to the Medical Aid App</Text>
      <Image 
        style={styles.imgMain}
        source={require('./src/image/AppIcon.png')}
      />
       <TouchableOpacity
         style={styles.btnCont}
         onPress={()=> console.log('TESTING')}>
          <Text style={styles.btnTxt}> 
            Click to continue 
          </Text>
      </TouchableOpacity>
    </View>
  );
}}

