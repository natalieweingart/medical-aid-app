import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { AuthContext } from '../../components/Authcontext';
// import signUpScreenCT from '../SignUp';

const chooseAcc = ({ navigation }) => {

    const { signIn, signUp } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text style={styles.txtTitle}>
                Create An Account
            </Text>
            <TouchableOpacity
                onPress={() => signIn}>
                <Text style={styles.txtAlready}>
                    Already a user? <Text style={styles.txtSign}> Sign in </Text>
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}
                onPress={() => signUp() }>
                <Text style={styles.txtBtn}>
                    Patient
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}
                onPress={() => signUp()}>
                <Text style={styles.txtBtn}>
                    Caretaker
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default chooseAcc;

const styles = ({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    txtTitle: {
        fontSize: 40,
        color: 'black',
        fontWeight: 'bold',
        marginTop: '25%',
        alignItems: 'center',
    },
    txtAlready: {
        fontSize: 15,
        color: 'black',
    },
    txtSign: {
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
    btn: {
        marginTop: '5%',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: '#77A8AB',
        width: 250,
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
    txtBtn: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
    },
})