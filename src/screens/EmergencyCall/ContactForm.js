import React, { useState } from 'react';
import {
    Text, TextInput, View, StyleSheet,
    TouchableOpacity, ScrollView
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const ContactSchema = yup.object({
    name: yup
        .string()
        .required('Medication is required.')
        .min(3, ({ min }) => `Title must be at least ${min} long.`),
    phoneNum: yup
        .string()
        .required('Phone Number is required.')
        .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            { message: 'Invalid Phone Number.', }),
});

const ContactForm = ({ addContact }) => {
    return (
        <ScrollView>
            <Text style={styles.heading}>New Contact</Text>
            <Formik
                initialValues={{
                    id: '',
                    name: '',
                    phoneNum: '',
                }}
                validationSchema={ContactSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addContact(values);
                }}
            >
                {(props) => (
                    <View style={styles.container}>
                        <Text style={styles.label}>Contact Name</Text>
                        <TextInput
                            style={styles.inputBox}
                            placeholder=""
                            onChangeText={props.handleChange('name')}
                            value={props.values.title}
                            onBlur={props.handleBlur('name')} />
                        <Text style={styles.errorText}>
                            {props.touched.name && props.errors.name}</Text>

                        <Text style={styles.label}>Phone Number</Text>
                        <TextInput
                            style={styles.descriptionBox}
                            placeholder="+1(123)456-7890"
                            onChangeText={props.handleChange('phoneNum')}
                            value={props.values.description}
                            onBlur={props.handleBlur('phoneNum')} />
                        <Text style={styles.errorText}>
                            {props.touched.phoneNum && props.errors.phoneNum}</Text>

                        <View style={{ alignItems: 'center' }} >
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={props.handleSubmit}>
                                <Text style={styles.btnTxt}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}

            </Formik>
        </ScrollView>
    );
};

export default ContactForm;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: '7%',
        marginVertical: '5%'
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
        borderRadius: 25,
        padding: '2%',
        margin: '2%',
        fontSize: 18,
    },

    descriptionBox: {
        borderWidth: 1,
        borderRadius: 25,
        paddingHorizontal: '2%',
        paddingTop: '2%',
        paddingBottom: '10%',
        margin: '2%',
        fontSize: 18,
    },

    btnTxt: {
        fontSize: 18,
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

    errorText: {
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center',
        // marginLeft: '4%',
        // marginBottom: '2%'
        // backgroundColor: 'blue',
    }
})