import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';

function login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>
        Log In
        </Text>
      <TouchableOpacity onPress={() => navigation.navigate('ChooseAcc')}>
        <Text style={styles.txtCreate}>
          <Text style={styles.txtNewUser}>
            New user? </Text> Create an account
        </Text>
      </TouchableOpacity>
      <View style={styles.viewInput}>
        <TextInput style={styles.txtInput}
          placeholder='Email'
          placeholderTextColor='black' />
      </View>
      <View style={styles.viewInput}>
        <TextInput style={styles.txtInput}
          secureTextEntry
          placeholder='Password'
          placeholderTextColor='black' />
      </View>
      <TouchableOpacity
        onPress={() => Alert.alert('FORGOT!')}>
        <Text style={styles.txtForgot}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnLogin}
        onPress={() => Alert.alert('LOGIN!')}>
        <Text style={styles.btnTxt}>
          Log In
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default login;


const styles = ({
  container: {
      alignItems: 'center',
      justifyContent: 'center',
  },
  txtTitle: {
    fontSize: 40,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    marginTop: '25%',
  },
  txtNewUser: {
      fontSize: 15,
      color: 'black',
      letterSpacing: -1,
  },
  txtCreate: {
      fontSize: 15,
      color: '#77A8AB',
      letterSpacing: -1,
  },
  viewInput: {
    fontSize: 18,
    backgroundColor: 'white',
    borderRadius: 25,
    height: 50,
    width: 300,
    padding: 10,
    marginTop: 15,
    justifyContent:'center',
  },
  txtInput: {
      height:50,
  },
  txtForgot: {
      fontSize: 15,
      color: '#77A8AB',
      marginTop: '5%',
  },
  btnLogin: {
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
  btnTxt: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black',
      alignSelf: 'center',
    }
})