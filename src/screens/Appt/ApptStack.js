import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Appointment from './AppointScreen';
import ApptForm from './AppointmentForm';
import ReviewAppt from './ViewAppointment';

const AppNavigator = createStackNavigator();

function ApptStack() {
    return (
        // <NavigationContainer>
        <AppNavigator.Navigator initialRouteName="Appointments">
            <AppNavigator.Screen name="Appointments" component={Appointment}
                // options={{ title: 'Appointments' }} 
                options={{ headerShown: false }}
            />
            <AppNavigator.Screen name="Appointment Form" component={ApptForm}
                options={{ headerShown: false }} />
            <AppNavigator.Screen name="View Appointment" component={ReviewAppt}
                // options={{ title: 'View Appointment' }} 
                options={{ headerShown: false }}
            />
        </AppNavigator.Navigator>
        // </NavigationContainer>
    );
}

export default ApptStack;