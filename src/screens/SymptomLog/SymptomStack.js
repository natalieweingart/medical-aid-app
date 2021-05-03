import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SymptomAddForm from './symptomAddForm';
import SymptomEditForm from './symptomEditForm';
import SymptomLog from './symptomLog';
import ViewSymptom from './symptomView';

const Stack = createStackNavigator();

const SymptomStack = () => {
  return (
    <Stack.Navigator initialRouteName="Symptom Log">
      <Stack.Screen
        name="Symptom Log"
        component={SymptomLog}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Symptom Add Form"
        component={SymptomAddForm}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Symptom Edit Form"
        component={SymptomEditForm}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="View Symptom"
        component={ViewSymptom}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default SymptomStack;
