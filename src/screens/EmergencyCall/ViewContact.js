import React, { useState } from 'react';
import {
    View, Text, StyleSheet, Modal, Keyboard, Linking,
    TouchableOpacity, SafeAreaView, TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Card, Title, Subheading } from 'react-native-paper';
import ContactEdit from './ContactEdit';

const ViewContact = ({ navigation, route }) => {

    const [modalOpen, setModalOpen] = useState(false);

    const triggerCall = () => {
        Linking.openURL(`tel:${route.params.item.phoneNum}`)
    };

    const onUpdate = (item) => {
        route.params.updateContact(item);
        setModalOpen(false);
        navigation.navigate('ContactList');
    }

    const onDelete = (id) => {
        route.params.deleteContact(id);
        navigation.navigate('ContactList');
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Card style={styles.itemCard}>
                    <Card.Content>
                        <Title style={{ alignSelf: 'center', fontSize: 21 }}>
                            {route.params.item.name} </Title>
                        <Subheading style={{ fontSize: 18 }}>
                            {route.params.item.phoneNum}
                        </Subheading>
                    </Card.Content>
                    <Card.Actions style={styles.cardBtn}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => setModalOpen(true)}>
                            <Text style={styles.btnTxt}>
                                Edit
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => onDelete(route.params.item.id)}>
                            <Text style={styles.btnTxt}>
                                Delete
                            </Text>
                        </TouchableOpacity>
                    </Card.Actions>
                </Card>
                <TouchableOpacity
                    style={styles.btnCall}
                    onPress={() => triggerCall(route.params.item.phoneNum)}>
                    <Text style={styles.btnTxt}>
                        Call
                        </Text>
                </TouchableOpacity>
            </View>

            <Modal visible={modalOpen} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <Icon
                            name="x" style={styles.close}
                            size={25} color="#77A8AB"
                            onPress={() => setModalOpen(false)}
                        />
                        <ContactEdit item={route.params.item}
                            updateContact={onUpdate} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.goBack()}>
                <Text style={styles.btnTxt}>
                    Go Back
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default ViewContact;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: '10%',
        justifyContent: 'center',
        // backgroundColor: 'red'
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // justifyContent: 'space-between',
        marginTop: 25,
        marginHorizontal: 16,
        // backgroundColor: 'purple',
    },

    itemCard: {
        marginTop: 20,
        paddingHorizontal: '10%',
        // height: '30%',
        maxHeight: 200,
        // width: 400,
        // backgroundColor: 'blue'
    },
    cardBtn: {
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    btn: {
        margin: '10%',
        marginTop: '5%',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: '#77A8AB',
        // width: 250,
        // height: 45,
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

    modalContent: {
        paddingVertical: '5%'
    },
    close: {
        alignSelf: 'flex-end',
        // // padding: '5%'
        paddingHorizontal: '5%',

        flexDirection: 'row',
        // justifyContent: 'flex-end',
        // justifyContent: 'space-between',
        // marginTop: 25,
        // marginHorizontal: 16,
        // backgroundColor: 'purple',
    },

    btnCall: {
        margin: '10%',
        marginTop: '5%',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 50,
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
});