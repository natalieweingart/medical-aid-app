import React, { useState } from 'react';
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
    .matches(/^([0]?[1-9]|[1][0-2])\/([0][1-9]|[1][0-9]|[2][0-9]|[3][0-1])\/([1-2][0-9][0-9][0-9])$/, { message: 'Invalid Date.' }),
  time: yup.string()
    .required("Time is required.")
    .matches(/^([0][1-9]|[1][0-2])\:([0-5][0-9])\s(A|P)(M)$/, { message: 'Invalid Time.' })
});

const ApptForm = ({ addAppt }) => {

  return (
    <ScrollView>
      <Text style={styles.heading}>New Appointment</Text>
      <Formik
        initialValues={{
          id: id,
          title: '',
          description: '',
          date: '',
          time: ''
        }}
        validationSchema={ApptSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addAppt(values);
        }}
      >
        {(props) => (
          <View style={styles.container}>
            <Text style={styles.label}>Title</Text>
            <TextInput
              style={styles.inputBox}
              placeholder=""
              onChangeText={props.handleChange('title')}
              value={props.values.title}
              onBlur={props.handleBlur('title')} />
            <Text style={styles.errorText}>{props.touched.title && props.errors.title}</Text>

            <Text style={styles.label}>Description</Text>
            <TextInput
              multiline
              style={styles.descriptionBox}
              placeholder=""
              onChangeText={props.handleChange('description')}
              value={props.values.description}
              onBlur={props.handleBlur('description')} />
            <Text style={styles.errorText}>{props.touched.description && props.errors.description}</Text>

            <Text style={styles.label}>Date</Text>
            <TextInput
              style={styles.inputBox}
              placeholder="MM/DD/YYYY"
              onChangeText={props.handleChange('date')}
              value={props.values.date}
              onBlur={props.handleBlur('date')} />
            <Text style={styles.errorText}>{props.touched.date && props.errors.date}</Text>

            <Text style={styles.label}>Time</Text>
            <TextInput
              style={styles.inputBox}
              placeholder="HH:MM AM/PM"
              onChangeText={props.handleChange('time')}
              value={props.values.time}
              onBlur={props.handleBlur('time')} />
            <Text style={styles.errorText}>{props.touched.time && props.errors.time}</Text>

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

export default ApptForm;


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