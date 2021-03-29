import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import MedForm from './MedForm';
import MedicationTracker from './MedScreen';
import ReviewMed from './ViewMed';
import Medication from './MedicationTesting';

const Stack = createStackNavigator();

const MedicationStack = () => {
    return (
        <Stack.Navigator initialRouteName='MedicationTracker'>
            <Stack.Screen name='MedicationTracker' component={MedicationTracker} options={{headerShown: false}}/>
            <Stack.Screen name='Medication Form' component={MedForm} options={{headerShown: false}}  />
            <Stack.Screen name='View Medication' component={ReviewMed} options={{headerShown: false}}  />
        </Stack.Navigator>
    );
};

export default MedicationStack;