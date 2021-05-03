import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import MedicationAddForm from './medicationAddForm';
import MedicationEditForm from './medicationEditForm';
import MedicationTracker from './medication';
import ReviewMed from './medicationView';

const Stack = createStackNavigator();

const MedicationStack = () => {
  return (
    <Stack.Navigator initialRouteName="Medication Tracker">
      <Stack.Screen
        name="Medication Tracker"
        component={MedicationTracker}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Medication Add Form"
        component={MedicationAddForm}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Medication Edit Form"
        component={MedicationEditForm}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="View Medication"
        component={ReviewMed}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MedicationStack;
