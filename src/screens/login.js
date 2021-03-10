import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import loginStyles from '../styles/LoginStyles';

function login ({ navigation }) {
  return (
    <View style={loginStyles.container}>
      <Text style={loginStyles.txtTitle}>
        Log In
        </Text>
      <TouchableOpacity onPress={()=>navigation.navigate('CreateAcc')}>
        <Text style={loginStyles.txtCreate}>
          <Text style={loginStyles.txtNewUser}>
            New User? </Text> Create An Account 
        </Text>
      </TouchableOpacity>
      <View style={loginStyles.viewInput}>
      <TextInput style={loginStyles.txtInput}
        placeholder='Username'
        placeholderTextColor='black'/> 
      </View>
      <View style={loginStyles.viewInput}>
      <TextInput style={loginStyles.txtInput}
        placeholder='Password'
        placeholderTextColor='black'/> 
      </View>
      <TouchableOpacity
      onPress={()=>console.log('FORGOT')}>
        <Text style={loginStyles.txtForgot}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={loginStyles.btnLogin}
      onPress={()=>console.log('LOGIN')}>
        <Text style={loginStyles.btnTxt}>
          Log In
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default login;
