import React, { useState, useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import {
    View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity,
    Modal, TouchableWithoutFeedback, FlatList, Keyboard, Alert
} from 'react-native';
import { Card, Title, Paragraph, Subheading } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import EditProfile from './EditProfile';
import App from '../../App';

const ProfileScreen = ({ navigation }) => {



    const [modalOpen, setModalOpen] = useState(false);
    const [profile, setProfile] = useState([
        {
            fname: 'Eileen',
            lname: 'Quiroz',
            email: 'eileenquiroz@gmail.com',
            phoneNum: '(123)456-7890',
        }
    ])

    const newProfile = (profile) => {
        setProfile((currentProfile) => {
            return [
                currentProfile = profile]
        });
        setModalOpen(false);
    }

    const Item = ({ fname, lname, email, phoneNum }) => (
        <View >
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Title style={[styles.txt, { fontSize: 25 }]}>
                    {fname}
                </Title>
                <Text> </Text>
                <Title style={[styles.txt, { fontSize: 25 }]}>
                    {lname}
                </Title>
            </View>
            <Subheading style={[styles.txt, { fontSize: 20, textAlign: 'center' }]}>
                {email}</Subheading>
            <Subheading style={[styles.txt, { fontSize: 20, textAlign: 'center' }]}>
                {phoneNum}</Subheading>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item
            fname={item.fname}
            lname={item.lname}
            email={item.email}
            phoneNum={item.phoneNum} />
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableOpacity
                onPress={() => setModalOpen(true)} >
                <View style={styles.titleBar}>
                    <Feather name='edit' size={30} color='black' />
                </View>
            </TouchableOpacity>

            <View style={{ alignSelf: 'center' }}>
                <View style={styles.profileImg} >
                    <Image source={require('../../image/Logo.png')} style={styles.img} resizeMode='center' />
                </View>
            </View>

            <View>
                <Text style={[styles.txt, { fontSize: 30, textAlign: 'center' }]}>
                    Patient
                </Text>
            </View>
            <View style={styles.infoContainer}>
                <FlatList
                    data={profile}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>

            <View style={{ alignContent: 'center', alignSelf: 'center', marginTop: 20 }}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => console.log("Manage Caretaker Clicked")}>
                    <Text style={{ fontSize: 20, color: 'black', textAlign: 'center' }}>
                        Manage Caretakers
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => Alert.alert('SIGN OUT CLICKED')}                   
                    >
                    <Text style={{ fontSize: 20, color: 'black', textAlign: 'center' }}>
                        Sign Out
                    </Text>
                </TouchableOpacity>
            </View>

            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ProfileScreen')} >
                        <View style={styles.exitIcon}>
                            <Feather name='x-circle' size={30} color='black' onPress={() => setModalOpen(false)} />
                            <EditProfile newProfile={newProfile} />
                        </View>
                    </TouchableOpacity>
                </TouchableWithoutFeedback>
            </Modal>
        </SafeAreaView>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'purple',
    },
    titleBar: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // justifyContent: 'space-between',
        marginTop: 25,
        marginHorizontal: 16,
        // backgroundColor: 'purple',
    },
    txt: {
        color: 'black',
        fontWeight: 'bold',
    },
    profileImg: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: 'hidden',
        // backgroundColor: 'red',
    },
    img: {
        flex: 1,
        height: undefined,
        width: undefined,
    },
    infoContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 10,
        // backgroundColor: 'red',
        maxHeight: 100,
        maxWidth: 400,
    },
    btn: {
        marginTop: '5%',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: '#77A8AB',
        width: 250,
        height: 45,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    exitIcon: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // justifyContent: 'space-between',
        marginTop: 25,
        marginHorizontal: 16,
        // backgroundColor: 'purple',
    },

})