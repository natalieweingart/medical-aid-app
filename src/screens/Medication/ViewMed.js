import React, { useState } from 'react';
import {
    View, Text, StyleSheet, Modal, Keyboard,
    TouchableOpacity, SafeAreaView, TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Card, Title, Subheading } from 'react-native-paper';
import MedicationEditForm from './MedEditForm';

const ReviewMed = ({ navigation, route }) => {

    const [modalOpen, setModalOpen] = useState(false);

    const onUpdate = (medication) => {
        route.params.updateMedication(medication);
        setModalOpen(false);
        navigation.navigate('Medication Tracker');
    }

    const onDelete = (id) => {
        route.params.deleteMedication(id);
        navigation.navigate('Medication Tracker');
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Card style={styles.itemCard}>
                    <Card.Content>
                        <Title>
                            {route.params.item.name}</Title>
                        <Subheading>
                            {route.params.item.instructions}
                            {'\n'}
                            {route.params.item.time} | {route.params.item.dosage}
                        </Subheading>
                    </Card.Content>
                    <Card.Actions style={styles.cardBtn}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => setModalOpen(true)}>
                            <Text style={styles.btnTxt}>
                                Edit </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => onDelete(route.params.item.id)}>
                            <Text style={styles.btnTxt}>
                                Delete </Text>
                        </TouchableOpacity>
                    </Card.Actions>
                </Card>
            </View>

            <Modal visible={modalOpen} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <Icon
                            name="x" style={styles.close}
                            size={25} color="#77A8AB"
                            onPress={() => setModalOpen(false)}
                        />
                        <MedicationEditForm item={route.params.item}
                            updateMedication={onUpdate} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.goBack()}>
                <Text style={styles.btnTxt}>
                    Go Back </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default ReviewMed;

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
        marginTop: 25,
        marginHorizontal: 16,
        // backgroundColor: 'purple',
    },

    itemCard: {
        marginTop: 20,
        paddingHorizontal: '10%',
        maxHeight: 200,
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
        paddingHorizontal: '5%',
        flexDirection: 'row',
        // backgroundColor: 'purple',
    },
});