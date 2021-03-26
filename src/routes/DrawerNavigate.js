import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ProfileScreen from '../screens/Profile/Profile';
import MedicationScreen from '../screens/Medication/MedicationScreen';
import HomeScreen from '../screens/HomeScreen';
import SecondPage from '../screens/SecondPg';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavgationDrawerStructure = (props) => {
    const toggleDrawer = () => {
        props.navigationProps.toggleDrawer();
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={styles.menuIcon}>
                <Feather.Button
                    name='menu'
                    size={30}
                    color='black'
                    backgroundColor='#77A8AB'
                    // backgroundColor='transparent'
                    // alignItems='center'
                    borderRadius={15}
                    onPress={() => toggleDrawer()}
                    width={100}
                />
            </View>
        </View>
    );
}

function homePageStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName='First'>
            <Stack.Screen name='Home' component={HomeScreen} options={{
                title: null,
                headerLeft: () =>
                    <NavgationDrawerStructure navigationProps={navigation} />,
                headerStyle: { backgroundColor: 'transparent' }, //set header text color
            }} />
        </Stack.Navigator>
    );
}

function profilePageStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName='Profile'>
            <Stack.Screen name='Profile' component={ProfileScreen} options={{
                title: null,
                headerLeft: () =>
                    <NavgationDrawerStructure navigationProps={navigation} />,
                headerStyle: { backgroundColor: 'transparent' }, //set header text color
            }} />
        </Stack.Navigator>
    );
}
function medicationPageStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName='Medication'>
            <Stack.Screen name='Medication' component={MedicationScreen} options={{
                title: null,
                headerLeft: () =>
                    <NavgationDrawerStructure navigationProps={navigation} />,
                headerStyle: { backgroundColor: 'transparent' }, //set header text color
            }} />
        </Stack.Navigator>
    );
}

function secondPageStack({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Second' component={SecondPage} options={{
                title: 'Second PAGE',
                headerLeft: () =>
                    <NavgationDrawerStructure navigationProps={navigation} />,
                headerStyle: { backgroundColor: 'red' }, //set header text color
                headerTintColor: 'yellow', //Text color
                headerTitleStyle: 'bold',
            }} />
        </Stack.Navigator>
    );
}

const DrawerNavigate = () => {
    return (
        <Drawer.Navigator drawerContentOptions={{ activeTintColor: '#77A8AB', itemStyle: { marginVertical: 5 } }}>
            {/* <Drawer.Screen name='FirtsPg' options={{ drawerLabel: 'Home' }} component={homePageStack} /> */}
            {/* <Drawer.Screen name='SecondPg' options={{ drawerLabel: 'Second Page Option' }} component={secondPageStack} /> */}
            <Drawer.Screen name='Home' options={{ drawerLabel: 'Home Page Option' }} component={homePageStack} />
            <Drawer.Screen name='Profile' options={{ drawerLabel: 'Profile Page Option' }} component={profilePageStack} />
            <Drawer.Screen name='Medication' options={{ drawerLabel: 'Medication Page Option' }} component={medicationPageStack} />



        </Drawer.Navigator>
    )
};

export default DrawerNavigate;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red'
    },
    menuIcon: {
        top: 5,
        left: 5,
        width: 55,
        paddingTop: 2,
        paddingStart: 1,
        position: 'absolute',
        // backgroundColor: 'blue'
    },
    header: {
        flex: 1,
        alignItems: 'center',
    },
})