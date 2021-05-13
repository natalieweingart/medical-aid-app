import React, { useState, useContext } from 'react';

import {
    View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity,
    Modal, TouchableWithoutFeedback, FlatList, Keyboard, Alert
} from 'react-native';
import { Title, Subheading } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import EditProfile from './EditProfile';
import { AuthContext } from '../../components/Authcontext';

const ProfileScreen = ({ navigation }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [profile, setProfile] = useState([
        {
            fname: 'Eileen',
            lname: 'Quiroz',
            email: 'eileenquiroz@gmail.com',
            phoneNum: '123-456-7890',
        }
    ])

    const { signOut } = useContext(AuthContext);

    const newProfile = (item) => {
        setProfile((currentProfile) => {
            return [
                currentProfile = item]
        });
        setModalOpen(false);
    }

    const Item = ({ fname, lname, email, phoneNum }) => (
        <View >
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Title style={[styles.txt, { fontSize: 25 }]}>
                    {fname} </Title>
                <Title style={[styles.txt, { fontSize: 25 }]}>
                    {lname} </Title>
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
                <View style={styles.header}>
                    <Icon name='edit' size={30} color='black' />
                </View>
            </TouchableOpacity>

            <View style={{ alignSelf: 'center' }}>
                <View style={styles.profileImg} >
                    <Image source={require('../../image/Logo.png')} style={styles.img} resizeMode='center' />
                </View>
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
                    // onPress={() => Alert.alert('SIGN OUT CLICKED')} 
                    onPress={() => signOut()} >
                    <Text style={styles.btnTxt}>
                        Sign Out
                    </Text>
                </TouchableOpacity>
            </View>

            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {/* <TouchableOpacity
                        onPress={() => navigation.navigate('ProfileScreen')} > */}
                    <View style={styles.modalContent}>
                        <Icon style={styles.close}
                            name='x' size={30} color='#77A8AB'
                            onPress={() => setModalOpen(false)} />
                        <EditProfile newProfile={newProfile} />
                    </View>
                    {/* </TouchableOpacity> */}
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

    header: {
        flexDirection: 'row',
        marginTop: '5%',
        marginBottom: '3%',
        marginHorizontal: 16,
        justifyContent: 'flex-end',
        // backgroundColor: 'purple',
    },

    txt: {
        color: 'black',
        fontWeight: 'bold',
    },

    modalContent: {
        paddingVertical: '5%'
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
        margin: '10%',
        marginTop: '5%',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: '#77A8AB',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    btnTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
    },

    close: {
        alignSelf: 'flex-end',
        paddingHorizontal: '5%',
        flexDirection: 'row',
        // backgroundColor: 'purple',
    },

})