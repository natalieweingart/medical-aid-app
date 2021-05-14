import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'

import SymptomLog from './SymptomLog';
import ReviewSymp from './ViewSymptom';
import SymptomEdit from './SymptomEdit';

const Stack = createStackNavigator();

const SymptomStack = () => {
    return (
        <Stack.Navigator initialRouteName='Symptom Log'>
            {/* <Stack.Screen name='SymptomScreen' component={SymptomScreen} options={{ headerShown: false }} /> */}
            <Stack.Screen name='Symptom Log' component={SymptomLog} options={{ headerShown: false }} />
            <Stack.Screen name='View Symptom' component={ReviewSymp} options={{ headerShown: false }} />
            <Stack.Screen name="Edit Symptom" component={SymptomEdit} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default SymptomStack;

