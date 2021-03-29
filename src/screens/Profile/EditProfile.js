import React, { useState } from 'react';

import {
    View, Text, TextInput, SafeAreaView, KeyboardAvoidingView,
    StyleSheet, TouchableOpacity, Image, Keyboard
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as yup from 'yup';
import { Formik } from 'formik';
import { ScrollView } from 'react-native';

const editRules = yup.object({
    fname: yup.string()
        .required('Enter first name.'),
    lname: yup.string()
        .required('Enter last name.'),
    email: yup.string()
        .required('Email is required.')
        .email('Please enter a valid email.'),
    phoneNum: yup.string()
        .required('Phone Number is required.'),
})

const EditProfile = ({ newProfile }) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ marginHorizontal: 10 }} >
                <View style={{ alignSelf: 'center' }}>
                    <View style={styles.profileImg} >
                        <Image source={require('../../image/Logo.png')} style={styles.img} resizeMode='center' />
                    </View>
                </View>

                <Formik
                    initialValues={{ fname: '', lname: '', email: '', phoneNum: '' }}
                    validationSchema={editRules}
                    onSubmit={(values, actions) => {
                        actions.resetForm();
                        newProfile(values);
                    }} >
                    {(props) => (
                        <View style={styles.infoContainer}>
                            <Text style={[styles.txt, { fontSize: 25 }]}>
                                Caretaker/Patient ??
                                </Text>
                            <TextInput style={styles.txtInput}
                                label={'fname'}
                                placeholder='First Name'
                                onSubmitEditing={Keyboard.dismiss}
                                autoCapitalize='words'
                                onChangeText={props.handleChange('fname')}
                            />
                            <Text style={styles.errorTxt}>
                                {props.touched.fname && props.errors.fname}
                            </Text>

                            <TextInput style={styles.txtInput}
                                label={'lname'}
                                placeholder='Last Name'
                                onSubmitEditing={Keyboard.dismiss}
                                autoCapitalize='words'
                                onChangeText={props.handleChange('lname')}
                            />
                            <Text style={styles.errorTxt}>
                                {props.touched.lname && props.errors.lname}
                            </Text>



                            <TextInput style={styles.txtInput}
                                label={'email'}
                                placeholder='Email'
                                onSubmitEditing={Keyboard.dismiss}
                                onChangeText={props.handleChange('email')}

                            />
                            <Text style={styles.errorTxt}>
                                {props.touched.email && props.errors.email}
                            </Text>



                            <TextInput style={styles.txtInput}
                                label={'phoneNum'}
                                placeholder='Phone number'
                                onChangeText={props.handleChange('phoneNum')}
                                onSubmitEditing={Keyboard.dismiss}
                            />
                            <Text style={styles.errorTxt}>
                                {props.touched.phoneNum && props.errors.phoneNum}
                            </Text>

                            <TouchableOpacity style={styles.btn} onPress={props.handleSubmit}>
                                <Text style={styles.btnTxt}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </SafeAreaView>
    )
}

export default EditProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 16,
        // backgroundColor: 'red'
    },
    exitIcon: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // justifyContent: 'space-between',
        marginTop: 25,
        marginHorizontal: 16,
        // backgroundColor: 'purple',
    },
    viewInput: {
        // backgroundColor: 'white',
        height: 50,
        // marginTop: 15,
        justifyContent: 'center',

    },
    txtInput: {
        fontSize: 20,
        height: 50,
        borderRadius: 25,
        padding: 10,
        borderWidth: 1,
        width: 300,
    },
    txt: {
        color: 'black',
        fontWeight: 'bold',
    },
    profileImg: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: 'hidden',
        // backgroundColor: 'red',
    },
    img: {
        flex: 1,
        height: undefined,
        width: undefined,
    },
    infoContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 30,
        // backgroundColor: 'red',
    },
    btn: {
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
    errorTxt: {
        color: 'red',
        fontWeight: 'bold',
        marginLeft: '4%',
        marginBottom: '2%',
    },
})