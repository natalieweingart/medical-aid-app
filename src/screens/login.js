import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import loginStyles from '../styles/LoginStyles';

function login ({ navigation }) {
  return (
    <View>
       {/* style={styles.container}> */}
      <Text style={loginStyles.txtTitle}>
        Log In
        </Text>
       <TouchableOpacity //  style={styles.btnCont}
         onPress={()=> console.log('Patient')}>
          <Text style={loginStyles.btnTxt}> 
            Patient
          </Text>
      </TouchableOpacity>
      <TouchableOpacity //  style={styles.btnCont}
         onPress={()=> console.log('Caregiver')}>
          <Text style={loginStyles.btnTxt}> 
            Caregiver
          </Text>
      </TouchableOpacity>
    </View>
  );
}

export default login

