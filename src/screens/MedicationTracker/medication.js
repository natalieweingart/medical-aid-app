import React, { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Card, Title, Paragraph, Subheading } from 'react-native-paper';
import Styles from '../../styles/stylesheet';
import MedicationAddForm from './medicationAddForm';

const MedicationTracker = ({ navigation }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const [medication, setMedication] = useState([
    {
      id: 0,
      name: 'Simvastatin',
      instructions: 'Take with water on an empty stomach.',
      time: '9:00 am',
      dosage: '300mg',
      taken: false,
    },
    {
      id: 1,
      name: 'Lisinopril',
      instructions: 'Take with food and water.',
      time: '9:30 am',
      dosage: '150mg',
      taken: false,
    },
    {
      id: 2,
      name: 'Levothyroxine',
      instructions: 'Do not eat at least an hour after taking medication.',
      time: '9:00 pm',
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

  const updateMedication = (item) => {
    const newMedication = [...medication];
    newMedication[item.id] = item;
    return setMedication(newMedication);
  };

  const deleteMedication = (index) => {
    setMedication(medication.filter((data) => data.id !== index));
  };

  const medicationTaken = (id) => {
    const newItem = medication[id];
    newItem.taken = true;
    return updateMedication(newItem);
  };

  function Medication({ id, name, instructions, time, dosage, taken }) {
    return (
      <View style={Styles.cardList}>
        <Card style={taken ? Styles.itemCardMuted : Styles.itemCard}>
          <Card.Content>
            <Title>{name}</Title>
            <Subheading>
              {instructions}
              {'\n'}
              {dosage} at {time}
            </Subheading>
            {!taken &&
              <TouchableOpacity style={Styles.saveButton} onPress={() => medicationTaken(id)}>
                <Text>Take Medication</Text>
              </TouchableOpacity>
            }
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
    <View style={Styles.container}>
      <TouchableOpacity
        style={Styles.saveButton}
        onPress={() => setModalOpen(true)}>
        <Text>Add New Medication</Text>
      </TouchableOpacity>

      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={Styles.modalContent}>
            <Icon
              name="x"
              style={Styles.close}
              size={25}
              color="#77A8AB"
              onPress={() => setModalOpen(false)}
            />
            <MedicationAddForm
              addMedication={addMedication}
              id={medication.length}
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <FlatList
        data={medication}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MedicationTracker;
