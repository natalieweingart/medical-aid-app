import React, { useState } from 'react';
import {
    Text, TextInput, View, StyleSheet, TouchableOpacity, ScrollView,
    Button, Modal, TouchableWithoutFeedback, Keyboard, FlatList,
} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Feather';
import { Card, Title, Paragraph, Subheading } from 'react-native-paper';
import SympForm from './SymptomForm';

const SymptomLog = ({ navigation }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const [btn, setBtn] = useState(false);
    const [currentDate, setCurrentDate] = useState('');
    const [symptom, setSymptom] = useState([
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            date: 'June 5',
            time: '12:32pm',
            title: 'Back Pain',
            description: 'Dull pain in lumbars.',
            painScale: '3',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            date: 'May 4',
            time: '14:23pm',
            title: 'Nausea',
            description: 'Sudden bout of nausea and dizziness.',
            painScale: '0',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            date: 'Aug 10',
            time: '10:42am',
            title: 'Headache',
            description: 'Sharp headache in the temporal area of the head.',
            painScale: '5',
        },
    ]);

    const addSymptom = (symptom) => {
        setSymptom((currentSymptom) => {
            return [symptom, ...currentSymptom];
        });
        setModalOpen(false);
    };

    const Item = ({ title, description, date, time, painScale }) => (
        <View style={styles.cardList}>
            <Card style={styles.itemCard}>
                <Card.Content>
                    <Title>{title}</Title>
                    <Subheading>
                        {description}
                        {'\n'}
                        {date} at {time}
                        {'\n'}
            Pain Level: {painScale}
                    </Subheading>
                </Card.Content>
            </Card>
        </View>
    );

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('View Symptom', item)}>
            <Item
                title={item.title}
                description={item.description}
                date={item.date}
                time={item.time}
                painScale={item.painScale}
            />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.saveButton}
                onPress={() => setModalOpen(true)}>
                <Text>Log New Symptom</Text>
            </TouchableOpacity>

            <Modal visible={modalOpen} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <Icon
                            name="x"
                            style={styles.close}
                            size={25}
                            color="#77A8AB"
                            onPress={() => setModalOpen(false)}
                        />
                        <SympForm addSymptom={addSymptom}></SympForm>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <FlatList
                data={symptom}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default SymptomLog;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        padding: 5,
    },

    heading: {
        fontSize: 25,
        alignSelf: 'center',
        paddingVertical: 10,
        fontWeight: 'bold',
    },

    inputBox: {
        borderWidth: 1,
        padding: 10,
        margin: 10,
    },

    descriptionBox: {
        borderWidth: 1,
        paddingHorizontal: 7,
        paddingTop: 7,
        paddingBottom: 50,
        margin: 10,
    },

    submitButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 10,
    },

    saveButton: {
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

    cancelButton: {
        borderRadius: 20,
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: '#F2F4F8',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    title: {
        fontSize: 30,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        marginTop: '5%',
    },

    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
    },

    listHeading: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    listText: {
        fontSize: 16,
        marginBottom: 5,
    },

    modalContent: {
        paddingVertical: '5%'
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

    errorText: {
        color: 'red',
        fontWeight: 'bold',
        marginLeft: '4%',
        marginBottom: '2%'
    },
});

