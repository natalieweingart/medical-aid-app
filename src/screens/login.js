import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import loginStyles from '../styles/LoginStyles';

function login({ navigation }) {
  return (
    <View style={loginStyles.container}>
      <Text style={loginStyles.txtTitle}>
        Log In
        </Text>
      <TouchableOpacity onPress={() => navigation.navigate('ChooseAcc')}>
        <Text style={loginStyles.txtCreate}>
          <Text style={loginStyles.txtNewUser}>
            New user? </Text> Create an account
        </Text>
      </TouchableOpacity>
      <View style={loginStyles.viewInput}>
        <TextInput style={loginStyles.txtInput}
          placeholder='Email'
          placeholderTextColor='black' />
      </View>
      <View style={loginStyles.viewInput}>
        <TextInput style={loginStyles.txtInput}
          secureTextEntry
          placeholder='Password'
          placeholderTextColor='black' />
      </View>
      <TouchableOpacity
        onPress={() => Alert.alert('FORGOT!')}>
        <Text style={loginStyles.txtForgot}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={loginStyles.btnLogin}
        onPress={() => Alert.alert('LOGIN!')}>
        <Text style={loginStyles.btnTxt}>
          Log In
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default login;
