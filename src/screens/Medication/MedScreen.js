import React, { useState, Component } from 'react';
import {
    Text, View, StyleSheet, TouchableOpacity, ScrollView,
    Modal, TouchableWithoutFeedback, Keyboard, FlatList,
    SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Card, Title, Paragraph, Subheading } from 'react-native-paper';
import MedForm from './MedForm';
import Feather from 'react-native-vector-icons/Feather';


const MedicationTracker = ({ navigation }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [medication, setMedication] = useState([
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            time: '9am',
            name: 'Simvastatin',
            dosage: '300mg',
            instructions: 'Take with water on an empty stomach.',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            time: '9:30am',
            name: 'Lisinopril',
            dosage: '150mg',
            instructions: 'Take with food and water.',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            time: '9pm',
            name: 'Levothyroxine',
            dosage: '50mg',
            instructions: 'Do not eat at least an hour after taking medication.',
        },
    ]);

    const addMedication = (medication) => {
        setMedication((currentMedication) => {
            return [medication, ...currentMedication];
        });
        setModalOpen(false);
    };

    const Medication = ({ name, instructions, time, dosage }) => (
        <View style={styles.cardList}>
            <Card style={styles.itemCard}>
                <Card.Content>
                    <Title>{name}</Title>
                    <Subheading>
                        {instructions}
                        {'\n'}
                        {dosage} at {time}
                    </Subheading>
                </Card.Content>
            </Card>
        </View>
    );

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate('View Medication', item)}>
            <Medication
                name={item.name} instructions={item.instructions}
                time={item.time} dosage={item.dosage}
            />
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ marginHorizontal: 10 }} >
                {/* <View style={styles.container}> */}

                <View style={styles.header}>
                    <Text style={[styles.txt, { fontSize: 30 }]} >
                        Medications
                    </Text>
                </View>

                <FlatList
                    data={medication}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />

                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => setModalOpen(true)}>
                    <Text style={styles.btnTxt}>Add New Medication</Text>
                </TouchableOpacity>

                <Modal visible={modalOpen} animationType="slide">
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.modalContent}>
                            <Icon name="x" style={styles.close}
                                size={25} color="#77A8AB"
                                onPress={() => setModalOpen(false)}
                            />
                            <MedForm addMedication={addMedication}></MedForm>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
                {/* </View> */}
            </ScrollView>
        </SafeAreaView>
    );
};

export default MedicationTracker;


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