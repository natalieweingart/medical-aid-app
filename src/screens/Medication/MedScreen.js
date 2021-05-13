import React, { useState, useCallback, useEffect } from 'react';
import {
    Text, View, StyleSheet, TouchableOpacity,
    Modal, TouchableWithoutFeedback, Keyboard, FlatList,
    SafeAreaView, Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Card, Title, Subheading } from 'react-native-paper';
import MedForm from './MedForm';

const MedicationTracker = ({ navigation }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const date = new Date();
    const [lastOpened, setLastOpened] = useState(12);
    const [medication, setMedication] = useState([
        {
            id: 0,
            name: 'Simvastatin',
            instructions: 'Take with water on an empty stomach.',
            time: '9:00 AM',
            dosage: '300mg',
            taken: false,

        },
        {
            id: 1,
            name: 'Lisinopril',
            instructions: 'Take with food and water.',
            time: '9:30 AM',
            dosage: '150mg',
            taken: false,

        },
        {
            id: 2,
            name: 'Levothyroxine',
            instructions: 'Do not eat at least an hour after taking medication.',
            time: '9:00 PM',
            dosage: '50mg',
            taken: false,
        },
    ]);

    const addMedication = (medication) => {
        setMedication((currentMedication) => {
            return [...currentMedication, medication];
        });
        setModalOpen(false);
    };

    const updateMedication = useCallback(
        (item) => {
            const newMedication = [...medication];
            newMedication[item.id] = item;
            return setMedication(newMedication);
        },
        [medication]
    );

    const deleteMedication = (index) => {
        setMedication(medication.filter((data) => data.id !== index));

        for (var id = index; id < medication.length; id++) {
            medication[id].id = medication[id].id - 1;
        }
    };

    const medicationTaken = (id) => {
        const newItem = medication[id];
        newItem.taken = true;
        return updateMedication(newItem);
    };

    const reset = useCallback(() => {
        for (var id = 0; id < medication.length; id++) {
            medication[id].taken = false;
            updateMedication(medication[id]);
        }
        console.log('medication reset');
    }, [updateMedication, medication]);

    const checkDate = useCallback(
        (prevDate, curDate) => {
            console.log('prev date: ' + prevDate);
            console.log('cur date: ' + curDate);
            if (prevDate !== curDate) {
                reset();
                setLastOpened(curDate);
            }
        },
        [reset]
    );

    useEffect(() => {
        console.log('testing 1 2');
        checkDate(lastOpened, date.getDate());
    }, [checkDate, lastOpened, date]);

    function Medication({ id, name, instructions, time, dosage, taken }) {
        return (
            <View style={styles.cardList}>
                <Card style={taken ? styles.itemCardMuted : styles.itemCard}>
                    <Card.Content>
                        <Title>
                            {name}</Title>
                        <Subheading>
                            {instructions}
                            {'\n'}
                            {dosage} at {time}
                            {'\n'}
                            {!taken ? (
                                <View style={styles.sideBySide}>
                                    <Text>
                                        Mark Taken</Text>
                                    <TouchableOpacity
                                        style={styles.takeButton}
                                        onPress={() => medicationTaken(id)}>
                                        <Text style={styles.checkmark}>
                                            &#10003; </Text>
                                    </TouchableOpacity>
                                </View>
                            ) : (
                                <Text style={styles.italic}>
                                    Medication Taken Today</Text>
                            )}
                        </Subheading>
                    </Card.Content>
                </Card>
            </View>
        );
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('View Medication', {
                    item: item,
                    updateMedication: updateMedication,
                    deleteMedication: deleteMedication,
                });
            }}>
            <Medication
                id={item.id}
                name={item.name}
                instructions={item.instructions}
                time={item.time}
                dosage={item.dosage}
                taken={item.taken}
            />
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={[styles.txt, { fontSize: 30 }]} >
                    Medications </Text>
            </View>

            <FlatList
                data={medication}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />

            <TouchableOpacity
                style={styles.btn}
                onPress={() => setModalOpen(true)}>
                <Text style={styles.btnTxt}>
                    Add New Medication</Text>
            </TouchableOpacity>

            <Modal visible={modalOpen} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <Icon name="x" style={styles.close}
                            size={25} color="#77A8AB"
                            onPress={() => setModalOpen(false)}
                        />
                        <MedForm addMedication={addMedication}
                            id={medication.length} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </SafeAreaView>
    );
};

export default MedicationTracker;

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

    itemCardMuted: {
        paddingHorizontal: '10%',
        backgroundColor: '#e2e2e2',
    },

    sideBySide: {
        marginTop: 3,
        paddingTop: 5,
        flexDirection: 'row',
    },

    takeButton: {
        borderRadius: 5,
        padding: 5,
        width: 25,
        height: 25,
        textAlign: 'center',
        backgroundColor: '#77A8AB',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginLeft: 5,
    },

    checkmark: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    italic: {
        fontStyle: 'italic',
    },
})