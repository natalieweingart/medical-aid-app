import React from 'react';
import {
    Text, TextInput, View, TouchableOpacity,
    ScrollView, StyleSheet,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const MedSchema = yup.object({
    name: yup
        .string()
        .required('Medication is required.')
        .min(3, ({ min }) => `Title must be at least ${min} long.`),
    instructions: yup
        .string()
        .required('Instructions are required.')
        .max(250, ({ max }) => `Instructions must be at most 250 characters.`),
    time: yup
        .string()
        .required('Time is required.')
        .matches(/^([0]?[1-9]|[1][0-2])\:([0-5][0-9])\s?((A|a)|(P|p))(M|m)$/, {
            message: 'Invalid Time.',
        }),
    dosage: yup
        .string()
        .required('Dosage is required.')
        .matches(/^([1-9][0-9]*)\s?([A-z]+)$/, { message: 'Invalid Dosage.' }),
});

const MedicationEditForm = (props) => {
    return (
        <ScrollView>
            <Text style={styles.heading}>
                Edit Medication </Text>
            <Formik
                initialValues={{
                    id: props.item.id,
                    name: props.item.name,
                    instructions: props.item.instructions,
                    time: props.item.time,
                    dosage: props.item.dosage,
                }}
                validationSchema={MedSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    props.updateMedication(values);
                }}>
                {(props) => (
                    <View>
                        <Text style={styles.label}>
                            Name</Text>
                        <TextInput
                            style={styles.inputBox}
                            placeholder={props.initialValues.name}
                            onChangeText={props.handleChange('name')}
                            value={props.values.name}
                            onBlur={props.handleBlur('name')} />
                        <Text style={styles.errorText}>
                            {props.touched.name && props.errors.name} </Text>

                        <Text style={styles.label}>
                            Instructions</Text>
                        <TextInput
                            multiline
                            style={styles.descriptionBox}
                            placeholder={props.initialValues.instructions}
                            onChangeText={props.handleChange('instructions')}
                            value={props.values.instructions}
                            onBlur={props.handleBlur('instructions')} />
                        <Text style={styles.errorText}>
                            {props.touched.instructions && props.errors.instructions} </Text>

                        <Text style={styles.label}>
                            Time</Text>
                        <TextInput
                            style={styles.inputBox}
                            placeholder={''}
                            onChangeText={props.handleChange('time')}
                            value={props.values.time}
                            onBlur={props.handleBlur('time')} />
                        <Text style={styles.errorText}>
                            {props.touched.time && props.errors.time} </Text>

                        <Text style={styles.label}>
                            Dosage</Text>
                        <TextInput
                            style={styles.inputBox}
                            placeholder={props.initialValues.dosage}
                            onChangeText={props.handleChange('dosage')}
                            value={props.values.dosage}
                            onBlur={props.handleBlur('dosage')} />
                        <Text style={styles.errorText}>
                            {props.touched.dosage && props.errors.dosage} </Text>

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
    );
};

export default MedicationEditForm;

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