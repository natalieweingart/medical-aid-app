import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import ContactList from './ContactList';
import ViewContact from './ViewContact';
import ContactEditForm from './ContactEdit';

const Stack = createStackNavigator();

const CallStack = () => {
    return (
        <Stack.Navigator initialRouteName='ContactList'>
            <Stack.Screen name='ContactList' component={ContactList} options={{ headerShown: false }} />
            <Stack.Screen name='View Contact' component={ViewContact} options={{ headerShown: false }} />
            <Stack.Screen name='Contact Edit' component={ContactEditForm} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default CallStack;