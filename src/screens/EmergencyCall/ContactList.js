import React, { useState } from 'react';

import {
    SafeAreaView, View, Text, StyleSheet, TouchableOpacity,
    Modal, TouchableWithoutFeedback, Linking, FlatList,
    Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Card, Title, Subheading } from 'react-native-paper';
import ContactForm from './ContactForm';

const ContactList = ({ navigation }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [contact, setContact] = useState([
        {
            id: 0,
            name: 'Mom',
            phoneNum: '818-456-7890',
        },
        {
            id: 1,
            name: 'Brother',
            phoneNum: '818-987-2413',
        }
    ]);

    const addContact = (contact) => {
        setContact((currentContact) => {
            return [contact, ...currentContact];
        });
        setModalOpen(false);
    };

    const updateContact = (item) => {
        const newContact = [...contact];
        newContact[item.id] = item;
        return setContact(newContact);
    };

    const deleteContact = (index) => {
        setContact(contact.filter((data) => data.id !== index));
        for (var id = index; id < contact.length; id++) {
            contact[id].index = contact[id].index - 1;
        }
    };

    const ContactInfo = ({ name, phoneNum }) => (
        <View style={styles.cardList}>
            <Card style={styles.itemCard}>
                <Card.Content>
                    <Title style={{ alignSelf: 'center', fontSize: 21 }}>
                        {name}</Title>
                    <Subheading style={{ fontSize: 18 }}>
                        {phoneNum}
                    </Subheading>
                </Card.Content>
            </Card>
        </View>
    );


    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('View Contact',
                    {
                        item: item,
                        updateContact: updateContact,
                        deleteContact: deleteContact,
                    });
            }} >
            <ContactInfo
                id={item.id}
                name={item.name}
                phoneNum={item.phoneNum}
            />
        </TouchableOpacity>
    )

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={[styles.txt, { fontSize: 30 }]} >
                    Contact </Text>
            </View>

            <FlatList
                data={contact}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />

            <TouchableOpacity style={styles.btn}
                onPress={() => setModalOpen(true)}>
                <Text style={styles.btnTxt}>
                    Add New Contact </Text>
            </TouchableOpacity>

            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <Icon
                            name="x" style={styles.close}
                            size={25} color="#77A8AB"
                            onPress={() => setModalOpen(false)} />
                        <ContactForm addContact={addContact}
                            id={contact.length} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

        </SafeAreaView>
    )
}

export default ContactList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'purple',
    },

    modalContent: {
        paddingVertical: '5%'
    },

    header: {
        marginTop: '5%',
        marginBottom: '3%',
        marginHorizontal: 16,
        alignItems: 'center',
        // backgroundColor: 'purple',
    },

    mainTxt: {
        alignItems: 'center',
        marginTop: 20,
        // backgroundColor: 'purple',
    },

    txt: {
        color: 'black',
        fontWeight: 'bold',
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

    cardList: {
        padding: '2%',
    },

    itemCard: {
        paddingHorizontal: '10%',
    },
})