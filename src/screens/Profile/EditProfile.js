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
                    initialValues={{
                        fname: '',
                        lname: '',
                        email: '',
                        phoneNum: '',
                    }}
                    validationSchema={editRules}
                    onSubmit={(values, actions) => {
                        actions.resetForm();
                        newProfile(values);
                    }} >
                    {(props) => (
                        <View>
                            <Text style={styles.label}>
                                First Name</Text>
                            <TextInput style={styles.txtInput}
                                label={'fname'}
                                placeholder=''
                                onSubmitEditing={Keyboard.dismiss}
                                autoCapitalize='words'
                                onChangeText={props.handleChange('fname')}
                            />
                            <Text style={styles.errorTxt}>
                                {props.touched.fname && props.errors.fname}
                            </Text>

                            <Text style={styles.label}>
                                Last Name</Text>
                            <TextInput style={styles.txtInput}
                                label={'lname'}
                                placeholder=''
                                onSubmitEditing={Keyboard.dismiss}
                                autoCapitalize='words'
                                onChangeText={props.handleChange('lname')}
                            />
                            <Text style={styles.errorTxt}>
                                {props.touched.lname && props.errors.lname}
                            </Text>

                            <Text style={styles.label}>
                                Email</Text>
                            <TextInput style={styles.txtInput}
                                label={'email'}
                                placeholder=''
                                onSubmitEditing={Keyboard.dismiss}
                                onChangeText={props.handleChange('email')}

                            />
                            <Text style={styles.errorTxt}>
                                {props.touched.email && props.errors.email}
                            </Text>

                            <Text style={styles.label}>
                                Phone Number</Text>
                            <TextInput style={styles.txtInput}
                                label={'phoneNum'}
                                placeholder=''
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
        marginHorizontal: '7%',
        marginVertical: '5%'
    },
    label: {
        marginLeft: '4%'
    },
    // viewInput: {
    //     // backgroundColor: 'white',
    //     height: 50,
    //     // marginTop: 15,
    //     justifyContent: 'center',

    // },
    txtInput: {
        borderWidth: 1,
        borderRadius: 25,
        padding: '2%',
        // margin: '2%',
        fontSize: 18,
        // fontSize: 20,
        // height: 50,
        // borderRadius: 25,
        // padding: 10,
        // borderWidth: 1,
        // width: 300,
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
        // marginTop: 30,
        // backgroundColor: 'red',
    },

    btnTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
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

    errorTxt: {
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
        // marginLeft: '4%',
        // marginBottom: '2%'
        // backgroundColor: 'blue',
    },
})