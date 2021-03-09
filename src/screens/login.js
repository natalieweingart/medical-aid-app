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
        placeholderTextColor='grey'/> 
      </View>
      <View style={loginStyles.viewInput}>
      <TextInput style={loginStyles.txtInput}
        placeholder='Password'
        placeholderTextColor='grey'/> 
      </View>
      <TouchableOpacity style={loginStyles.btnLogin}>
        <Text style={loginStyles.btnTxt}
          onPress={()=>console.log('LOGIN')}>
          Log In
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default login;
