import React from 'react';
import {
    Text, TextInput, View, StyleSheet,
    TouchableOpacity, ScrollView
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const ApptSchema = yup.object({
    title: yup.string()
        .required("Title is required.")
        .min(3, ({ min }) => `Title must be at least ${min} long.`),
    description: yup.string()
        .required("Description is required.")
        .max(250, ({ max }) => `Description must be at most 250 characters.`),
    date: yup.string()
        .required("Date is required.")
        .matches(/^([0][1-9]|[1][0-2])\/([0][1-9]|[1][0-9]|[2][0-9]|[3][0-1])\/([1-2][0-9][0-9][0-9])$/, { message: 'Invalid Date.' }),
    time: yup.string()
        .required("Time is required.")
        .matches(/^([1-9]|[1][0-2])\:([0-5][0-9])\s(A|P)(M)$/, { message: 'Invalid Time.' })
});

const EditAppt = (props) => {
    return (
        <ScrollView>
            <Text style={styles.heading}>
                Edit Appointment</Text>
            <Formik
                initialValues={{
                    id: props.item.id,
                    title: props.item.title,
                    description: props.item.description,
                    date: props.item.date,
                    time: props.item.time
                }}
                validationSchema={ApptSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    props.updateAppt(values);
                }}
            >
                {(props) => (
                    <View style={styles.container}>
                        <Text style={styles.label}>
                            Title
                        </Text>
                        <TextInput
                            style={styles.inputBox}
                            placeholder={props.initialValues.title}
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            onBlur={props.handleBlur('title')} />
                        <Text style={styles.errorText}>
                            {props.touched.title && props.errors.title}
                        </Text>

                        <Text style={styles.label}>Description</Text>
                        <TextInput
                            style={styles.descriptionBox}
                            placeholder={props.initialValues.description}
                            onChangeText={props.handleChange('description')}
                            value={props.values.description}
                            onBlur={props.handleBlur('description')} />
                        <Text style={styles.errorText}>
                            {props.touched.description && props.errors.description}
                        </Text>

                        <Text style={styles.label}>Date</Text>
                        <TextInput
                            style={styles.inputBox}
                            placeholder={props.initialValues.date}
                            onChangeText={props.handleChange('date')}
                            value={props.values.date}
                            onBlur={props.handleBlur('date')} />
                        <Text style={styles.errorText}>{props.touched.date && props.errors.date}</Text>

                        <Text style={styles.label}>Time</Text>
                        <TextInput
                            style={styles.inputBox}
                            placeholder={props.initialValues.time}
                            onChangeText={props.handleChange('time')}
                            value={props.values.time}
                            onBlur={props.handleBlur('time')} />
                        <Text style={styles.errorText}>{props.touched.time && props.errors.time}</Text>

                        <View style={{ alignItems: 'center' }} >
                            <TouchableOpacity style={styles.btn}
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

export default EditAppt;

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
    },

    label: {
        marginLeft: '4%'
    },

    inputBox: {
        borderWidth: 1,
        borderRadius: 7,
        padding: '2%',
        margin: '2%',
        fontSize: 18,
    },

    descriptionBox: {
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: '2%',
        paddingTop: '2%',
        paddingBottom: '10%',
        margin: '2%',
        fontSize: 18,
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
        marginBottom: '2%'
    }
})