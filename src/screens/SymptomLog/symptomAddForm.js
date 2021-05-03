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

const SympSchema = yup.object({
  symptom: yup
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

const SymptomAddForm = ({ id, addSymptom, navigation }) => {
  return (
    <ScrollView>
      <Text style={Styles.heading}>Log Symptom</Text>
      <Formik
        initialValues={{
          id: id,
          symptom: '',
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
          <View>
            <Text style={Styles.label}>Symptom</Text>
            <TextInput
              style={Styles.inputBox}
              placeholder=""
              onChangeText={props.handleChange('symptom')}
              value={props.values.symptom}
              onBlur={props.handleBlur('symptom')}></TextInput>
            <Text style={Styles.errorText}>
              {props.touched.symptom && props.errors.symptom}
            </Text>

            <Text style={Styles.label}>Description</Text>
            <TextInput
              multiline
              style={Styles.descriptionBox}
              placeholder=""
              onChangeText={props.handleChange('description')}
              value={props.values.description}
              onBlur={props.handleBlur('description')}></TextInput>
            <Text style={Styles.errorText}>
              {props.touched.description && props.errors.description}
            </Text>

            <Text style={Styles.label}>Date</Text>
            <TextInput
              style={Styles.inputBox}
              placeholder="MM/DD/YYYY"
              onChangeText={props.handleChange('date')}
              value={props.values.date}
              onBlur={props.handleBlur('date')}></TextInput>
            <Text style={Styles.errorText}>
              {props.touched.date && props.errors.date}
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

            <Text style={Styles.label}>Pain Scale</Text>
            <TextInput
              style={Styles.inputBox}
              placeholder="0-10"
              onChangeText={props.handleChange('painScale')}
              value={props.values.painScale}
              onBlur={props.handleBlur('painScale')}></TextInput>
            <Text style={Styles.errorText}>
              {props.touched.painScale && props.errors.painScale}
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

export default SymptomAddForm;