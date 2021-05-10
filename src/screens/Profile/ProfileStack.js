import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from './ProfileScreen';
import EditProfile from './EditProfile';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName='ProfileScreen'>
      <Stack.Screen name='ProfileScreen' component={ProfileScreen} options={{headerShown: false}}/>
      <Stack.Screen name='EditProfile' component={EditProfile} options={{headerShown: false}}  />
    </Stack.Navigator>
  );
};

export default ProfileStack;