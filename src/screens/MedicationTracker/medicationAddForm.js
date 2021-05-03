import React, { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Formik } from 'formik';
import Styles from '../../styles/stylesheet';
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

const MedicationAddForm = ({ id, addMedication, navigation }) => {
  return (
    <ScrollView>
      <Text style={Styles.heading}>Add Medication</Text>
      <Formik
        initialValues={{
          id: id,
          name: '',
          instructions: '',
          time: '',
          dosage: '',
          taken: false,
        }}
        validationSchema={MedSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addMedication(values);
        }}>
        {(props) => (
          <View>
            <Text style={Styles.label}>Name</Text>
            <TextInput
              style={Styles.inputBox}
              placeholder=""
              onChangeText={props.handleChange('name')}
              value={props.values.name}
              onBlur={props.handleBlur('name')}></TextInput>
            <Text style={Styles.errorText}>
              {props.touched.name && props.errors.name}
            </Text>

            <Text style={Styles.label}>Instructions</Text>
            <TextInput
              multiline
              style={Styles.descriptionBox}
              placeholder=""
              onChangeText={props.handleChange('instructions')}
              value={props.values.instructions}
              onBlur={props.handleBlur('instructions')}></TextInput>
            <Text style={Styles.errorText}>
              {props.touched.instructions && props.errors.instructions}
            </Text>

            <Text style={Styles.label}>Time</Text>
            <TextInput
              style={Styles.inputBox}
              placeholder=""
              onChangeText={props.handleChange('time')}
              value={props.values.time}
              onBlur={props.handleBlur('time')}></TextInput>
            <Text style={Styles.errorText}>
              {props.touched.time && props.errors.time}
            </Text>

            <Text style={Styles.label}>Dosage</Text>
            <TextInput
              style={Styles.inputBox}
              placeholder=""
              onChangeText={props.handleChange('dosage')}
              value={props.values.dosage}
              onBlur={props.handleBlur('dosage')}></TextInput>
            <Text style={Styles.errorText}>
              {props.touched.dosage && props.errors.dosage}
            </Text>

            <View style={Styles.submitButton}>
              <TouchableOpacity
                style={Styles.saveButton}
                onPress={props.handleSubmit}>
                <Text>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default MedicationAddForm;
