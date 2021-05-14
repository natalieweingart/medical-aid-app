import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Appointment from './ApptScreen';
import ApptForm from './ApptForm';
import ReviewAppt from './ViewAppt';
import ApptEdit from './ApptEdit';

const AppNavigator = createStackNavigator();

function ApptStack() {
    return (
        <AppNavigator.Navigator initialRouteName="Appointments">
            <AppNavigator.Screen name="Appointments" component={Appointment}  options={{ headerShown: false }} />
            <AppNavigator.Screen name="Appointment Form" component={ApptForm} options={{ headerShown: false }} />
            <AppNavigator.Screen name="View Appointment" component={ReviewAppt} options={{ headerShown: false }} />
            <AppNavigator.Screen name="Edit Appointments" component={ApptEdit} options={{ headerShown: false }} />
        </AppNavigator.Navigator>
    );
}

export default ApptStack;