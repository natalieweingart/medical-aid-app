import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import MedForm from './MedForm';
import MedicationTracker from './MedScreen';
import ReviewMed from './ViewMed';
import MedicationEditForm from './MedEditForm';

const Stack = createStackNavigator();

const MedicationStack = () => {
    return (
        <Stack.Navigator initialRouteName='Medication Tracker'>
            <Stack.Screen name='Medication Tracker' component={MedicationTracker} options={{headerShown: false}}/>
            <Stack.Screen name='Medication Form' component={MedForm} options={{headerShown: false}}  />
            <Stack.Screen name='View Medication' component={ReviewMed} options={{headerShown: false}}  />
            <Stack.Screen name='Edit Medication' component={MedicationEditForm} options={{headerShown: false}}  />
        </Stack.Navigator>
    );
};

export default MedicationStack;