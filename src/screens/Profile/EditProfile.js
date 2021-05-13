import React, { useState } from 'react';

import {
    View, Text, TextInput, SafeAreaView, KeyboardAvoidingView,
    StyleSheet, TouchableOpacity, Image, Keyboard
} from 'react-native';

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
    phoneNum: yup
        .string()
        .required('Phone Number is required.')
        .matches(/^[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/,
            { message: 'Invalid Phone Number.', }),
})

const EditProfile = ({ newProfile }) => {
    return (
        <ScrollView>
            <Text style={styles.heading}>
                Edit Profile </Text>
            <View style={{ alignSelf: 'center' }}>
                <View style={styles.profileImg} >
                    <Image source={require('../../image/Logo.png')} style={styles.img} resizeMode='center' />
                </View>
            </View>
            <Formik
                initialValues={{
                    // fname: props.fname,
                    // lname: props.lname,
                    // email: props.email,
                    // phoneNum: props.phoneNum,
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
                    <View style={styles.container}>
                        <Text style={styles.label}>
                            First Name</Text>
                        <TextInput
                            style={styles.inputBox}
                            label={'fname'}
                            placeholder=''
                            // placeholder={props.initialValues.fname}
                            onSubmitEditing={Keyboard.dismiss}
                            autoCapitalize='words'
                            onChangeText={props.handleChange('fname')} />
                        <Text style={styles.errorText}>
                            {props.touched.fname && props.errors.fname}</Text>

                        <Text style={styles.label}>
                            Last Name</Text>
                        <TextInput
                            style={styles.inputBox}
                            label={'lname'}
                            placeholder=''
                            // placeholder={props.initialValues.lname}
                            onSubmitEditing={Keyboard.dismiss}
                            autoCapitalize='words'
                            onChangeText={props.handleChange('lname')} />
                        <Text style={styles.errorText}>
                            {props.touched.lname && props.errors.lname}</Text>

                        <Text style={styles.label}>
                            Email</Text>
                        <TextInput
                            style={styles.inputBox}
                            label={'email'}
                            placeholder=''
                            // placeholder={props.initialValues.email}
                            onSubmitEditing={Keyboard.dismiss}
                            onChangeText={props.handleChange('email')} />
                        <Text style={styles.errorText}>
                            {props.touched.email && props.errors.email} </Text>

                        <Text style={styles.label}>
                            Phone Number</Text>
                        <TextInput
                            style={styles.inputBox}
                            label={'phoneNum'}
                            placeholder='###-###-####'
                            // placeholder={props.initialValues.phoneNum}
                            onChangeText={props.handleChange('phoneNum')}
                            onSubmitEditing={Keyboard.dismiss} />
                        <Text style={styles.errorText}>
                            {props.touched.phoneNum && props.errors.phoneNum} </Text>

                        <View style={{ alignItems: 'center' }} >
                            <TouchableOpacity style={styles.btn}
                                onPress={props.handleSubmit}>
                                <Text style={styles.btnTxt}>
                                    Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </Formik>
        </ScrollView>
    )
}

export default EditProfile;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: '7%',
        marginVertical: '3%'
    },

    heading: {
        fontSize: 21,
        alignSelf: 'center',
        paddingVertical: '3%',
        fontWeight: 'bold',
        color: 'black',
        // backgroundColor: 'red'
    },

    label: {
        marginLeft: '4%'
    },

    inputBox: {
        borderWidth: 1,
        borderRadius: 7,
        padding: '1%',
        margin: '2%',
        fontSize: 18,
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

    btn: {
        margin: '5%',
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

    btnTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
    },

    errorText: {
        color: 'red',
        fontWeight: 'bold',
        marginLeft: '4%',
        marginBottom: '2%',
        // backgroundColor: 'red',
    },
})