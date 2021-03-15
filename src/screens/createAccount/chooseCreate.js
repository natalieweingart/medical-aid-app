import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import chooseStyles from '../../styles/chooseCreateStyles';

function chooseAcc({ navigation }) {
    return (
        <View style={chooseStyles.container}>
            <Text style={chooseStyles.txtTitle}>
                Create An Account
            </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}>
                <Text style={chooseStyles.txtAlready}>
                    Already a user? <Text style={chooseStyles.txtSign}> Sign in </Text>
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={chooseStyles.btn}
                onPress={() => console.log('PATIENT')}>
                <Text style={chooseStyles.txtBtn}>
                    Patient
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={chooseStyles.btn}
                onPress={() => console.log('CARETAKER')}>
                <Text style={chooseStyles.txtBtn}>
                    Caretaker
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default chooseAcc;
