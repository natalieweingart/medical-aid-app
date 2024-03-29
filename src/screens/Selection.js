import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { AuthContext } from '../components/Authcontext';

const StartSelection = ({ navigation }) => {

  const { signIn, signUp } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>
        Welcome to the Virtual Assist</Text>
      <Image
        style={styles.imgMain}
        source={require('../image/Logo.png')} />
      <TouchableOpacity
        style={styles.btnGreen}
        onPress={() => signIn()}>
        <Text style={styles.btnTxt}>
          Log In
          </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnWhite}
        onPress={() => signUp()}>
        <Text style={styles.btnTxt}>
          Create an account
          </Text>
      </TouchableOpacity>
    </View>
  )
};

export default StartSelection;

const styles = ({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtTitle: {
    fontSize: 40,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    marginTop: '5%',
  },
  imgMain: {
    width: 300,
    height: 300,
    marginTop: '5%',
  },
  btnGreen: {
    marginTop: '5%',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#77A8AB',
    width: 170,
    height: 45,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnWhite: {
    marginTop: '5%',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: 'white',
    width: 185,
    height: 45,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
  }
});
