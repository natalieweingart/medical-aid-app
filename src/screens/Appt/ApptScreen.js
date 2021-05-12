import React, { useState } from 'react';
import {
    Text, View, StyleSheet, TouchableOpacity,
    Modal, TouchableWithoutFeedback, Keyboard, FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Card, Title, Subheading } from 'react-native-paper';
import ApptForm from './ApptForm';
import { SafeAreaView } from 'react-native';

const Appointment = ({ navigation }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [appt, setAppt] = useState([
        {
            id: 0,
            title: "Doctor's Appointment",
            description: "Physical Check Up",
            date: '04/06/2021',
            time: '10:00 AM'
        },
        {
            id: 1,
            title: "Dentist's Appointment",
            description: "Teeth Cleaning",
            date: '04/09/2021',
            time: '11:00 AM'
        }
    ]);

    const addAppt = (appt) => {
        setAppt((currentAppt) => {
            return [...currentAppt, appt]
        });
        setModalOpen(false);
    };

    const updateAppt = (item) => {
        const newAppointment = [...appt];
        newAppointment[item.id] = item;
        return setAppt(newAppointment);
    };

    const deleteAppt = (id) => {
        setAppt(appt.filter((data) => data.id !== id));
        for (var index = id; index < appt.length; index++) {
          appt[index].id = appt[index].id-1;
        }
    };

    function Appointment({ id, title, description, date, time }) {
        return (
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
        )
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('View Appointment',
                    {
                        item: item,
                        updateAppt: updateAppt,
                        deleteAppt: deleteAppt,
                    });
            }}>
            <Appointment
                id={item.id}
                title={item.title}
                description={item.description}
                date={item.date}
                time={item.time} />
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
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
            <TouchableOpacity style={styles.btn} onPress={() => setModalOpen(true)}>
                <Text style={styles.btnTxt}>
                    Add New Appointment
                </Text>
            </TouchableOpacity>

            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <Icon name="x" style={styles.close}
                            size={25} color="#77A8AB"
                            onPress={() => setModalOpen(false)} />
                        <ApptForm addAppt={addAppt} id={appt.length}/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
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

    cardList: {
        padding: '2%',
    },

    itemCard: {
        paddingHorizontal: '10%',
    },
})