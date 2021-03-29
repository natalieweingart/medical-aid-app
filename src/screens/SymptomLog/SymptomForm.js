import React, { useState } from 'react';
import {
    Text, TextInput, View, StyleSheet,
    TouchableOpacity, ScrollView,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const SympForm = ({ addSymptom, navigation }) => {
    const SympSchema = yup.object({
        title: yup
            .string()
            .required('Symptom is required.')
            .min(3, ({ min }) => `Title must be at least ${min} long.`),
        description: yup
            .string()
            .required('Description is required.')
            .max(250, ({ max }) => `Instructions must be at most 250 characters.`),
        date: yup
            .string()
            .required('Date is required.')
            .matches(
                /^([0][1-9]|[1][0-2])\/([0][1-9]|[1][0-9]|[2][0-9]|[3][0-1])\/([1-2][0-9][0-9][0-9])$/,
                { message: 'Invalid Date.' }
            ),
        time: yup
            .string()
            .required('Time is required.')
            .matches(/^([0]?[1-9]|[1][0-2])\:([0-5][0-9])\s?((A|a)|(P|p))(M|m)$/, {
                message: 'Invalid Time.',
            }),
        painScale: yup.string().required('Pain Level is required.'),
    });

    return (
        <ScrollView>
            <Text style={styles.heading}>Log Symptom</Text>
            <Formik
                initialValues={{
                    title: '',
                    description: '',
                    date: '',
                    time: '',
                    painScale: '',
                }}
                validationSchema={SympSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addSymptom(values);
                }}>
                {(props) => (
                    <View style={styles.container}>
                        <Text style={styles.label}>Symptom</Text>
                        <TextInput
                            style={styles.inputBox}
                            placeholder=""
                            onChangeText={props.handleChange('title')}
                            value={props.values.name}
                            onBlur={props.handleBlur('title')}></TextInput>
                        <Text style={styles.errorText}>
                            {props.touched.title && props.errors.title}
                        </Text>

                        <Text style={styles.label}>Description</Text>
                        <TextInput
                            multiline
                            style={styles.descriptionBox}
                            placeholder=""
                            onChangeText={props.handleChange('description')}
                            value={props.values.instructions}
                            onBlur={props.handleBlur('description')}></TextInput>
                        <Text style={styles.errorText}>
                            {props.touched.description && props.errors.description}
                        </Text>

                        <Text style={styles.label}>Date</Text>
                        <TextInput
                            style={styles.inputBox}
                            placeholder="MM/DD/YYYY"
                            onChangeText={props.handleChange('date')}
                            value={props.values.date}
                            onBlur={props.handleBlur('date')}></TextInput>
                        <Text style={styles.errorText}>
                            {props.touched.date && props.errors.date}
                        </Text>

                        <Text style={styles.label}>Time</Text>
                        <TextInput
                            style={styles.inputBox}
                            placeholder="HH:MM AM/PM"
                            onChangeText={props.handleChange('time')}
                            value={props.values.time}
                            onBlur={props.handleBlur('time')}></TextInput>
                        <Text style={styles.errorText}>
                            {props.touched.time && props.errors.time}
                        </Text>

                        <Text style={styles.label}>Pain Scale</Text>
                        <TextInput
                            style={styles.inputBox}
                            placeholder="0-10"
                            onChangeText={props.handleChange('painScale')}
                            value={props.values.painScale}
                            onBlur={props.handleBlur('painScale')}></TextInput>
                        <Text style={styles.errorText}>
                            {props.touched.painScale && props.errors.painScale}
                        </Text>

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

export default SympForm;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: '7%',
        marginVertical: '5%'
    },

    heading: {
        fontSize: 30,
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
    },

    descriptionBox: {
        borderWidth: 1,
        borderRadius: 25,
        paddingHorizontal: '2%',
        paddingTop: '2%',
        paddingBottom: '10%',
        margin: '2%',
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
        textAlign: 'center',
        // marginLeft: '4%',
        // marginBottom: '2%'
        // backgroundColor: 'blue',
    }
})