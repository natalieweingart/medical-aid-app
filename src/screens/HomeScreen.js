import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FirstPage from './FirstPg';
import SecondPage from './SecondPg';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavgationDrawerStructure = (props) => {
    const toggleDrawer = () => {
        props.navigationProps.toggleDrawer();
        // navigation.dispatch(DrawerActions.toggleDrawer());
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={styles.menuIcon}>
                <Feather.Button
                    name='menu'
                    size={30}
                    color='black'
                    // backgroundColor='#77A8AB'
                    backgroundColor='transparent'
                    borderRadius={15}
                    onPress={() => toggleDrawer()}
                    width={100}
                // alignItems='center'
                />
            </View>
        </View>
    );
}

function firstStackPage({ navigation }) {
    return (
        <Stack.Navigator initialRouteName='First'>
            <Stack.Screen name='First' component={FirstPage} options={{
                title: 'FIRST PAGE',
                headerLeft: () =>
                    <NavgationDrawerStructure navigationProps={navigation} />,
                headerStyle: { backgroundColor: 'red' }, //set header text color
                headerTintColor: 'blue', //Text color
                headerTitleStyle: 'bold',
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
                headerStyle: { backgroundColor: 'green' }, //set header text color
                headerTintColor: 'yellow', //Text color
                headerTitleStyle: 'bold',
            }} />
        </Stack.Navigator>
    );
}

const HomeScreen = () => {
    return (
        // <NavigationContainer>
            <Drawer.Navigator drawerContentOptions={{activeTintColor:'grey', itemStyle: {marginVertical: 5}}}>
                <Drawer.Screen name='FirtsPg' options={{drawerLabel: 'First Page Option'}} component={firstStackPage} />
                <Drawer.Screen name='SecondPg' options={{drawerLabel: 'Second Page Option'}} component={secondPageStack} />
            </Drawer.Navigator>
        // </NavigationContainer>
    )
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red'
    },
    menuIcon: {
        // flex: 1,
        top: 5,
        left: 5,
        // height: 50,
        width: 55,
        paddingTop: 2,
        paddingStart: 1,
        // alignItems: 'center',
        position: 'absolute',
        // backgroundColor: 'blue'
    },
    header: {
        flex: 1,
        alignItems: 'center',
    },
})