import React, { Component, useState } from 'react';

import {
    SafeAreaView, View, Text, TextInput, StyleSheet,
    Platform, Linking, TouchableOpacity
} from 'react-native';
import { Feather } from 'react-native-vector-icons/Feather';

const ContactList = () => {
    const [phoneNumber, setphoneNumber] = useState('');
    // const [phoneNumber, setphoneNumber] = useState([
    //     {
    //         name: 'Mom',
    //         number: '(805)555-0123',
    //     }
    //     {
    //         name: 'Brother',
    //         number: '(805)555-4567',
    //     }
    // ]);

    const triggerCall = () => {
        // Check for perfect 10 digit length
        if (phoneNumber.length != 10) {
            alert('Please insert correct contact number');
            return;
        }
        const args = {
            number: phoneNumber,
            prompt: true,
        };
        // if (Platform.OS === 'android') 
        //     { phoneNumber = `tel:${number}`; }
        // else // iphone
        //     {  phoneNumber = `telprompt:${number}`; }
        // Make a call
        Linking.openURL(`tel:${phoneNumber}`)
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={[styles.txt, { fontSize: 30 }]}>
                    Phone Call
                </Text>
            </View>

            <View>
                <Text style={styles.txt}>
                    Enter to make a call
                </Text>
            </View>

            <View style={styles.viewInput}>
                <TextInput
                    style={styles.txtInput}
                    value={phoneNumber}
                    onChangeText={(phoneNumber) => setphoneNumber(phoneNumber)}
                    placeholder={'Enter Contact Number'}
                    keyboardType='numeric'
                />
            </View>
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.btn}
                onPress={triggerCall} >
                <Text style={styles.btnTxt}>
                    Make Call
                        </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
    // }
}

export default ContactList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // backgroundColor: 'blue',
    },

    header: {
        marginTop: '5%',
        marginBottom: '3%',
        marginHorizontal: 16,
        // backgroundColor: 'purple',
        alignItems: 'center',
    },

    txt: {
        fontWeight: 'bold',
        color: 'black',
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
        margin: '10%',
        marginTop: '5%',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: '#77A8AB',
        // width: 250,
        // height: 45,
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
})