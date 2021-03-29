import React, { useState } from 'react';
import {
    Text, TextInput, View, StyleSheet, TouchableOpacity, ScrollView,
    Button, Modal, TouchableWithoutFeedback, Keyboard, FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Feather from 'react-native-vector-icons/Feather';
import { Card, Title, Paragraph, Subheading } from 'react-native-paper';
import ApptForm from './AppointmentForm';
import { SafeAreaView } from 'react-native';

const Appointment = ({ navigation }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [appt, setAppt] = useState([
        {
            title: "Doctor's Appointment",
            description: "Physical Check Up",
            date: '4/6/2021',
            time: '10:00 AM'
        }
    ]);

    const addAppt = (appt) => {
        setAppt((currentAppt) => {
            return [...currentAppt, appt]
        });
        setModalOpen(false);
    };

    const Item = ({ title, description, date, time }) => (
        <View style={styles.cardList}>
            <Card style={styles.itemCard}>
                <Card.Content>
                    <Title>{title}</Title>
                    <Subheading>
                        {description}
                        {'\n'}
                        {date} | {time}
                    </Subheading>
                </Card.Content>
            </Card>
        </View>
    );

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('View Appointment', item)}>
            <Item
                title={item.title} description={item.description}
                date={item.date} time={item.time} />
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ marginHorizontal: 10 }} >


                <View style={styles.header}>
                    <Text style={[styles.txt, { fontSize: 30 }]} >
                        Appointments
                    </Text>
                </View>

                <FlatList
                    data={appt}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
                <TouchableOpacity style={styles.addBtn} onPress={() => setModalOpen(true)}>
                    <Text style={styles.txt}>
                        Add New Appointment
                </Text>
                </TouchableOpacity>

                <Modal visible={modalOpen} animationType='slide'>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.modalContent}>
                            <Icon name="x" style={styles.close}
                                size={25} color="#77A8AB"
                                onPress={() => setModalOpen(false)} />
                            <ApptForm addAppt={addAppt}></ApptForm>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>


                {/* </View> */}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Appointment;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center'
    },

    modalContent: {
        paddingVertical: '5%'
    },
    header: {
        // flexDirection: 'row',
        // justifyContent: 'flex-end',
        // justifyContent: 'space-between',
        // justifyContent: 'center',
        marginTop: '5%',
        marginBottom: '3%',
        marginHorizontal: 16,
        // backgroundColor: 'purple',
        alignItems: 'center',
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
    btnTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
    },
    addBtn: {
        borderRadius: 20,
        margin: 20,
        padding: 10,
        backgroundColor: '#77A8AB',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },

    close: {
        alignSelf: 'center',
        padding: '2%'
    },

    cardList: {
        padding: '2%',
    },

    itemCard: {
        paddingHorizontal: '10%',
    },
})

