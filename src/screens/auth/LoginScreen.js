import React, { useEffect, useState, useContext } from 'react';
import { validateAll } from 'indicative/validator';

import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

import { AuthContext } from '../../components/Authcontext';

const LoginScreen = ({ navigation }) => {

  const [emailAddress, setemailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [SignUpErrors, setSignUpErrors] = useState({});

  const { signIn, signUp } = useContext(AuthContext);

  const handleSignIn = () => {
    // https://indicative.adonisjs.com
    const rules = {
      email: 'required|email',
      password: 'required|string|min:8|max:40'
    };

    const data = {
      email: emailAddress,
      password: password
    };

    const messages = {
      required: field => `${field} is required`,
      'username.alpha': 'Username contains unallowed characters',
      'email.email': 'Please enter a valid email address',
      'password.min': 'Wrong Password?'
    };

    validateAll(data, rules, messages)
      .then(() => {
        console.log('success sign in');
        signIn({ emailAddress, password });
      })
      .catch(err => {
        const formatError = {};
        err.forEach(err => {
          formatError[err.field] = err.message;
        });
        setSignUpErrors(formatError);
      });
  };


  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>
        Log In
        </Text>
      <TouchableOpacity 
        onPress={() => signUp()}>
        <Text style={styles.txtCreate}>
          <Text style={styles.txtNewUser}>
            New user? </Text> Create an account
        </Text>
      </TouchableOpacity>
      <View style={styles.viewInput}>
        <TextInput style={styles.txtInput}
          label={'Email'}
          placeholder='Email'
          placeholderTextColor='black'
          value={emailAddress}
          onChangeText={setemailAddress}
          errorMessage={SignUpErrors ? SignUpErrors.email : null}
        />
      </View>
      <View style={styles.viewInput}>
        <TextInput style={styles.txtInput}
          secureTextEntry
          placeholder='Password'
          placeholderTextColor='black'
          value={password}
          onChangeText={setPassword}
          errorMessage={SignUpErrors ? SignUpErrors.password : null}
        />
      </View>
      <TouchableOpacity style={styles.btnLogin}
        onPress={() => handleSignIn()}>
        <Text style={styles.btnTxt}>
          Log In
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red'
  },
  txtTitle: {
    fontSize: 40,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  txtNewUser: {
    fontSize: 15,
    color: 'black',
  },
  txtCreate: {
    fontSize: 15,
    color: '#77A8AB',
  },
  viewInput: {
    fontSize: 18,
    backgroundColor: 'white',
    borderRadius: 25,
    height: 50,
    width: 300,
    padding: 10,
    marginTop: 15,
    justifyContent: 'center',
  },
  txtInput: {
    height: 50,
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