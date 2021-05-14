import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ProfileStack from '../screens/Profile/ProfileStack';

import MedicationStack from '../screens/Medication/MedStack';
import HomeScreen from '../screens/HomeScreen';
import SymptomStack from '../screens/SymptomLog/SymptomStack';
import ApptStack from '../screens/Appt/ApptStack';
import CallStack from '../screens/EmergencyCall/CallStack';


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
                    name='menu' size={40}
                    color='black' 
                    // backgroundColor='#77A8AB'
                    backgroundColor='transparent'
                    borderRadius={15}
                    onPress={() => toggleDrawer()}
                    // underlayColor='#77A8AB'
                    underlayColor='transparent'
                    width={100}
                />
            </View>
        </View>
    );
}

function homePageStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{
                title: null,
                headerLeft: () =>
                    <NavgationDrawerStructure navigationProps={navigation} />,
                headerStyle: null, //set header text color
                headerTransparent: true
            }} />
        </Stack.Navigator>
    );
}

function profilePageStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName='ProfileStack'>
            <Stack.Screen name='ProfileStack' component={ProfileStack} options={{
                title: null,
                headerLeft: () =>
                    <NavgationDrawerStructure navigationProps={navigation} />,
                headerStyle: false, //set header text color
                headerTransparent: true
            }} />
        </Stack.Navigator>
    );
}

function medicationPageStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName='MedicationStack'>
            <Stack.Screen name='MedicationStack' component={MedicationStack} options={{
                title: null,
                headerLeft: () =>
                    <NavgationDrawerStructure navigationProps={navigation} />,
                headerStyle: { backgroundColor: 'transparent' }, //set header text color
                headerTransparent: true
            }} />
        </Stack.Navigator>
    );
}

function symptomPageStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName='SymptomStack'>
            <Stack.Screen name='SymptomStack' component={SymptomStack} options={{
                title: null,
                headerLeft: () =>
                    <NavgationDrawerStructure navigationProps={navigation} />,
                headerStyle: { backgroundColor: 'transparent' }, //set header text color
                headerTransparent: true
            }} />
        </Stack.Navigator>
    );
}

function appointPageStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName='AppointStack'>
            <Stack.Screen name='AppointStack' component={ApptStack} options={{
                title: null,
                headerLeft: () =>
                    <NavgationDrawerStructure navigationProps={navigation} />,
                headerStyle: { backgroundColor: 'transparent' }, //set header text color
                headerTransparent: true
            }} />
        </Stack.Navigator>
    );
}

function emergencyPageStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName='CallStack'>
            <Stack.Screen name='CallStack' component={CallStack} options={{
                title: null,
                headerLeft: () =>
                    <NavgationDrawerStructure navigationProps={navigation} />,
                headerStyle: { backgroundColor: 'transparent' }, //set header text color
                headerTransparent: true
            }} />
        </Stack.Navigator>
    );
}

const DrawerNavigate = () => {
    return (
        <Drawer.Navigator
            drawerContentOptions={{
                activeTintColor: 'black',
                inactiveTintColor: 'white',
                itemStyle: { marginVertical: 5 },
                backgroundColor: '#77A8AB',
                labelStyle: { fontSize: 22, fontWeight: 'bold' },
                // contentComponent: CustomDrawerContentComponent,
            }}>
            <Drawer.Screen name='Home' component={homePageStack}
                options={{
                    drawerLabel: 'Home',
                    drawerIcon: ({ focused, size }) => (
                        <Feather
                            name="home"
                            size={size}
                            color={focused ? 'black' : 'white'} //if the color is focused or not
                        />
                    ),
                }} />
            <Drawer.Screen name='Profile' component={profilePageStack}
                options={{
                    drawerLabel: 'Profile',
                    drawerIcon: ({ focused, size }) => (
                        <Feather
                            name="user"
                            size={size}
                            color={focused ? 'black' : 'white'} //if the color is focused or not
                        />
                    ),
                }} />
                <Drawer.Screen name='EmergencyCall' component={emergencyPageStack}
                options={{
                    drawerLabel: 'Emergency Call',
                    drawerIcon: ({ focused, size }) => (
                        <Feather
                            name="phone-call"
                            size={size}
                            color={focused ? 'black' : 'white'} //if the color is focused or not
                        />
                    ),
                }} />
            <Drawer.Screen name='Medication' component={medicationPageStack}
                options={{
                    drawerLabel: 'Medication',
                    drawerIcon: ({ focused, size }) => (
                        <Feather
                            name="file-plus"
                            size={size}
                            color={focused ? 'black' : 'white'} //if the color is focused or not
                        />
                    ),
                }} />
            <Drawer.Screen name='Symptom' component={symptomPageStack}
                options={{
                    drawerLabel: 'Symptom',
                    drawerIcon: ({ focused, size }) => (
                        <Feather
                            name="plus-circle"
                            size={size}
                            color={focused ? 'black' : 'white'} //if the color is focused or not
                        />
                    ),
                }} />
            <Drawer.Screen name='Appointment' component={appointPageStack}
                options={{
                    drawerLabel: 'Appointment',
                    drawerIcon: ({ focused, size }) => (
                        <Feather
                            name="calendar"
                            size={size}
                            color={focused ? 'black' : 'white'} //if the color is focused or not
                        />
                    ),
                }} />
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
        width: 60,
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