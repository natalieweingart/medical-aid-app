import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

const MenuDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="HomeDrawer" component={HomeScreen} />
        </Drawer.Navigator>
    );
};

export default MenuDrawer;