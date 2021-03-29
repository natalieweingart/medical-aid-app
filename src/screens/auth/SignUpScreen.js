import React, { useEffect, useState, useContext } from 'react';
import { validateAll } from 'indicative/validator';

import { Text, View, TouchableOpacity, TextInput, StyleSheet, Feather } from 'react-native';

import { AuthContext } from '../../components/context';

const SignUpScreen = ({ navigation }) => {

  const [emailAddress, setemailAddress] = useState('');
  const [password, setPassword] = useState('');

  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [SignUpErrors, setSignUpErrors] = useState({});

  const { signIn, signUp } = useContext(AuthContext);

  const handleSignUp = () => {
    // https://indicative.adonisjs.com
    const rules = {
      email: 'required|email',
      password: 'required|string|min:8|max:40'
    };

    const data = {
      email: emailAddress,
      password: password,
      password_confirmation: passwordConfirm,
    };

    const messages = {
      required: field => `${field} is required`,
      'username.alpha': 'Username contains unallowed characters',
      'email.email': 'Please enter a valid email address',
      'password.min': 'Password is too short. Must be greater than 8 characters',
      'password.confirmed': 'Passwords do not match',
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
  }

  useEffect(() => { }, [SignUpErrors]);

  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>
        Sign Up
      </Text>
      <TouchableOpacity
        onPress={() => signIn()}>
        <Text style={styles.txtAlready}>
          Already a user? <Text style={styles.txtSign}> Sign in </Text>
        </Text>
      </TouchableOpacity>
      <View style={styles.viewInput}>
        <TextInput style={styles.txtInput}
          label={'Email'}
          placeholder='Email address...'
          placeholderTextColor='black'
          value={emailAddress}
          onChangeText={setemailAddress}
          errorMessage={SignUpErrors ? SignUpErrors.email : null}
        />
      </View>
      <View style={styles.viewInput}>
        <TextInput style={styles.txtInput}
          secureTextEntry
          label={'Password'}
          placeholder="Password.."
          placeholderTextColor='black'
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.viewInput}>
        <TextInput style={styles.txtInput}
          secureTextEntry
          label={'Password Confirm'}
          placeholder='Password Confirm'
          placeholderTextColor='black'
          value={passwordConfirm}
          onChangeText={setPasswordConfirm}
        />
      </View>
      <Text style={{ color: 'red', marginLeft: 10, fontSize: 10 }}>
        {SignUpErrors ? SignUpErrors.password : null}
      </Text>
      <TouchableOpacity style={styles.btnLogin}
        onPress={() => handleSignUp()}>
        <Text style={styles.btnTxt}>
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
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
  txtAlready: {
    fontSize: 15,
    color: 'black',
  },
  txtSign: {
    fontSize: 15,
    color: '#77A8AB',
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
  },
});