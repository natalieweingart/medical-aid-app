import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'

import SymptomScreen from './SymptomScreen';
import SymptomLog from './SymptomLog';
import ReviewSymp from './ViewSymptom';

const Stack = createStackNavigator();

const SymptomStack = () => {
    return (
        <Stack.Navigator initialRouteName='SymptomScreen'>
            <Stack.Screen name='Symptom Screen' component={SymptomScreen} options={{headerShown: false}}/>
            <Stack.Screen name='Symptom Log' component={SymptomLog} options={{headerShown: false}}/>
            <Stack.Screen name='View Symptom' component={ReviewSymp} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};

export default SymptomStack;

