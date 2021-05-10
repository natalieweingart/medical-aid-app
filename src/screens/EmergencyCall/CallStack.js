import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import ContactList from './ContactList';
import ViewCall from './ViewCall';

const Stack = createStackNavigator();

const CallStack = () => {
    return (
        <Stack.Navigator initialRouteName='ContactList'>
            <Stack.Screen name='ContactList' component={ContactList} options={{headerShown: false}}/>
            <Stack.Screen name='View Call' component={ViewCall} options={{headerShown: false}}  />
        </Stack.Navigator>
    );
};

export default CallStack;