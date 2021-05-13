import React, { useState } from 'react';
import {
    Text, View, StyleSheet, TouchableOpacity, ScrollView,
    Button, Modal, TouchableWithoutFeedback, Keyboard, FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Card, Title, Subheading } from 'react-native-paper';
import SympForm from './SymptomForm';
import { SafeAreaView } from 'react-native';

const SymptomScreen = ({ navigation }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const [symptom, setSymptom] = useState([
        {
            id: 0,
            title: 'Back Pain',
            description: 'Dull pain in lumbars.',
            date: '06/05/2020',
            time: '12:32 PM',
            painScale: '3',
        },
        {
            id: 1,
            title: 'Nausea',
            description: 'Sudden bout of nausea and dizziness.',
            date: '05/04/2020',
            time: '2:23 PM',
            painScale: '0',
        },
        {
            id: 2,
            title: 'Headache',
            description: 'Sharp headache in the temporal area of the head.',
            date: '08/10/2020',
            time: '10:42 AM',
            painScale: '5',
        },
    ]);

    const addSymptom = (symptom) => {
        setSymptom((currentSymptom) => {
            return [...currentSymptom, symptom];
        });
        setModalOpen(false);
    };

    const updateSymptom = (item) => {
        const newSymptom = [...symptom];
        newSymptom[item.id] = item;
        return setSymptom(newSymptom);
    };

    const deleteSymptom = (id) => {
        setSymptom(symptom.filter((data) => data.id !== id));
        for (var index = id; index < symptom.length; index++) {
            symptom[index].id = symptom[index].id - 1;
        }
    };

    const Symptom = ({ title, description, date, time, painScale }) => (
        <View style={styles.cardList}>
            <Card style={styles.itemCard}>
                <Card.Content>
                    <Title>
                        {title}</Title>
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
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('View Symptom',
                    {
                        item: item,
                        updateSymptom: updateSymptom,
                        deleteSymptom: deleteSymptom,
                    });
            }}>
            <Symptom
                id={item.id}
                title={item.title}
                description={item.description}
                date={item.date}
                time={item.time}
                painScale={item.painScale}
            />
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={{ flex: 1 }} >
            <View style={styles.header}>
                <Text style={[styles.txt, { fontSize: 30 }]} >
                    Symptom Log </Text>
            </View>

            <FlatList
                data={symptom}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />

            <TouchableOpacity style={styles.btn}
                onPress={() => setModalOpen(true)}>
                <Text style={styles.btnTxt}>
                    Add New Symptom </Text>
            </TouchableOpacity>

            <Modal visible={modalOpen} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <Icon
                            name="x" style={styles.close}
                            size={25} color="#77A8AB"
                            onPress={() => setModalOpen(false)} />
                        <SympForm addSymptom={addSymptom}
                            id={symptom.length} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </SafeAreaView>
    );
};

export default SymptomScreen;

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
})
