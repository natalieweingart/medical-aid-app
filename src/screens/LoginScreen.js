import React from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const LoginScreen = ({ navigation }) => {

  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true
  });

  const textInputChange = (val) => {
    if (val.lenght != 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false
      });
    };
  }

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
          placeholderTextColor='black'
        // onChangeText={(val) => textInputChange(val)} //only use if you want an icon to appear
        />
        {/* {data.check_textInputChange ? //insert one thing : otherwise }  */}
        <Feather 
          name ="checkcircleo"
          color="green"
          size={20}
        />
      </View>
      <View style={styles.viewInput}>
        <TextInput style={styles.txtInput}
          secureTextEntry
          placeholder='Password'
          placeholderTextColor='black' />

      </View>
      <TouchableOpacity
        onPress={() => console.log('FORGOT!')}>
        <Text style={styles.txtForgot}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnLogin}
        onPress={() => console.log('LOGIN!')}>
        <Text style={styles.btnTxt}>
          Log In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnLogin}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.btnTxt}>
          Testing Home
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

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