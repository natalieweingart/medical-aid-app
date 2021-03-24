import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

export function DrawerContent(props) {

    const { signIn, signUp } = useContext(AuthContext);

    return (
        <View>
            <Text>
                HELLO
            </Text>
        </View>
    );
};

export default DrawerContent;